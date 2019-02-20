window._ = {};
window.Game = {};

Game.sections = {};
Game.startSectionID = null;

Game.dom = document.querySelector("#game_container");
Game.wordsDOM = document.querySelector("#game_words");
Game.choicesDOM = document.querySelector("#game_choices");

Game.startSectionID = null;
Game.queue = [];

window.SceneSetup = {}; // A big ol' singleton class that just makes it easy to create scenes.

// Init
Game.init = function(){

	// Animation!
	Game.wordsDOM.style.top = "80px";
	var animloop = function(){
		Game.update();
		requestAnimationFrame(animloop);
	};
	requestAnimationFrame(animloop);

};

// Parse scene markdown!
Game.parseSceneMarkdown = function(md){

	// Split into sections...
	md = md.trim();
	md = "\n" + md;
	var sections = md.split(/\n\#\s*/);
	sections.shift();
	sections.forEach(function(section){
		
		var split_index = section.indexOf("\n\n");
		var id = section.slice(0, split_index).toLocaleLowerCase();
		var text = section.slice(split_index+2);

		// Split into lines
		text = text.trim();
		var lines = text.split("\n\n");
		for(var i=0; i<lines.length; i++) lines[i]=lines[i].trim(); // trim it all!
		
		// New section
		Game.sections[id] = {
			id: id,
			lines: lines
		};
		if(!Game.startSectionID){
			Game.startSectionID = id;
		}

	});

};

////////////////////////////////////////////////////////////////////////////////////////////////
// SCENE MANAGEMENT ////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

Game.start = function(){
	window._ = {}; // global var, reset
	Game.goto(Game.startSectionID);
};

Game.update = function(){

	if(!Game.paused){

		// Timeout callbacks...
		for(var i=Game.timeoutCallbacks.length-1; i>=0; i--){ // backwards coz removing
			var tc = Game.timeoutCallbacks[i];
			tc.timeLeft -= 1000/60;
			if(tc.timeLeft<=0){
				tc.callback();
				Game.timeoutCallbacks.splice(i,1); // delete that one
			}
		}

		// The interface
		Game.updateText();
		Game.updateCanvas();

		// Ayyy
		publish("update");

	}

};

Game.paused = false;
Game.pause = function(){
	Game.paused = true;
	document.querySelector("#paused").style.display = "block";
};
window.addEventListener("blur", Game.pause);
Game.onUnpause = function(){
	if(Game.paused){
		Game.paused = false;
		document.querySelector("#paused").style.display = "none";
	}
};
window.addEventListener("click", Game.onUnpause);
window.addEventListener("touchstart", Game.onUnpause);

Game.timeoutCallbacks = [];
Game.setTimeout = function(callback, interval){
	Game.timeoutCallbacks.push({
		callback: callback,
		timeLeft: interval
	});
};

Game.goto = function(sectionID){

	// Clear choices
	Game.choicesDOM.innerHTML = "";

	// Show each line...
	var section = Game.sections[sectionID];
	if(!section){
		throw "NO SECTION NAMED "+sectionID;
	}
	var lines = section.lines;
	Game.queue = Game.queue.concat(lines);
	Game.executeNextLine();

};

Game.executeNextLine = function(){

	// Parse handlebars
	var originalLine = Game.queue.shift();
	if(!originalLine) return; // END OF QUEUE.
	line = Game.parseLine(originalLine);

	// Execute line
	var promiseNext;
	if(line==""){
		// If no line, get immediate promise...
		promiseNext = Game.immediatePromise();
	}else{

		// Execute based on what type it is!
		var lineType = Game.getLineType(line);
		switch(lineType){
			case "text":
				promiseNext = Game.executeText(line);
				break;
			case "choice":
				promiseNext = Game.executeChoice(line);
				break;
			case "code":
				promiseNext = Game.executeCode(line);
				break;
			case "wait":
				promiseNext = Game.executeWait(line);
				break;
		}

		// If it's a goto, end THIS section immediately.
		if(lineType=="goto"){
			Game.clearQueue(); // CLEAR ALL ELSE IN QUEUE
			Game.executeGoto(line);
			return;
		}

	}

	// Do next line?
	if(Game.queue.length>0){
		promiseNext.then(function(){
			Game.executeNextLine();
		});
	}

};
Game.clearQueue = function(){
	Game.queue = [];
};
Game.addToQueue = function(line){
	Game.queue.push(line);
}


////////////////////////////////////////////////////////////////////////////////////////////////
// TEXT AND STUFF //////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

// Immediate Promise
Game.immediatePromise = function(){
	return new RSVP.Promise(function(resolve){
		resolve();
	});
};

// Move the text DOM to latest
Game.updateText = function(){
	var wordsHeight = 80 + Game.wordsDOM.getBoundingClientRect().height;
	var currentY = parseFloat(Game.wordsDOM.style.top) || 80;
	var gotoY = (wordsHeight<250) ? 0 : wordsHeight-250;
	gotoY = 80 - gotoY;
	var nextY = currentY*0.9 + gotoY*0.1;
	Game.wordsDOM.style.top = nextY+"px";
};

// Execute text! Just add it to text DOM.
Game.OVERRIDE_TEXT_SPEED = 1;
Game.executeText = function(line){

	return new RSVP.Promise(function(resolve){

		// Who's speaking?
		// b: Beebee, h: Hong, n: Narrator, x: Xavier, y: Yvonne
		var regex = /^(.)\:(.*)/
		var speaker = line.match(regex)[1].trim();
		var dialogue = line.match(regex)[2].trim();

		// Add the bubble, with animation
		var div = document.createElement("div");
		Game.wordsDOM.appendChild(div);
		switch(speaker){
			case "b":
				div.className = "beebee-bubble";
				break;
			case "h":
				div.className = "hong-bubble";
				break;
			case "n":
				div.className = "narrator-bubble";
				break;
		}
		requestAnimationFrame(function(){
			requestAnimationFrame(function(){
				div.style.opacity = 1;
				div.style.left = 0;
			});
		});

		// TODO: BOLD LETTER BY LETTER...

		// Add the text
		var interval = 0;
		var SPEED = Math.round(40 / Game.OVERRIDE_TEXT_SPEED);
		if(speaker!="n"){

			// If not narrator, add letter by letter...
			for(var i=0; i<dialogue.length; i++){

				var chr = dialogue[i];

				// If it's the last char & it's "-", skip
				if(i==dialogue.length-1 && chr=="-") break;

				// for scopin'
				(function(chr, interval){
					Game.setTimeout(function(){
						div.innerHTML += chr;
					}, interval);
				})(chr, interval);

				// Bigger interval
				if(i!=dialogue.length-1){ // NOT last
					if(chr=="."){
						interval += SPEED*9;
					}else if(chr==","){
						interval += SPEED*5;
					}else{
						interval += SPEED;
					}
				}

			}

		}else{

			// IF NARRATOR

			// *Emphasize multiple words* => *Emphasize* *multiple* *words*
			var regex = /\*([^\*]*)\*/g;
			var emphasized = dialogue.match(regex) || [];
			for(var i=emphasized.length-1; i>=0; i--){ // backwards coz replacing

				// Convert
				var originalEm = emphasized[i]
				var em = originalEm;
				em = em.substr(1,em.length-2); // remove *
				var ems = em.split(" ");
				ems = ems.map(function(word){
					return "*"+word+"*";
				});
				em = ems.join(" ");

				// Replace in main string
				var startIndex = dialogue.indexOf(originalEm);
				dialogue = dialogue.slice(0, startIndex) + em + dialogue.slice(startIndex+originalEm.length);

			}

			// Add word by word
			var dialogueWords = dialogue.split(" ");
			for(var i=0; i<dialogueWords.length; i++){

				var word = dialogueWords[i];
				var bareWord = word;
				if(/\*(.*)\*/.test(bareWord)){
					bareWord = word.match(/\*(.*)\*/)[1].trim();
				}

				// for scopin'
				(function(word, interval){
					Game.setTimeout(function(){
						
						// if emphasize, emphasize!
						if(/\*(.*)\*/.test(word)){
							word = "<i>" + word.match(/\*(.*)\*/)[1].trim() + "</i>"
						}

						// add word
						div.innerHTML += word+" ";

					}, interval);
				})(word, interval);

				// Interval
				interval += SPEED*5;

				// Larger interval if punctuation...
				if(bareWord.slice(-1)==",") interval += SPEED*5;
				if(bareWord.slice(-3)=="...") interval += SPEED*15;

			}


		}

		// Return promise
		var nextLineDelay = SPEED*7;
		if(dialogue.slice(-1)=="-") nextLineDelay=0; // sudden interrupt!
		Game.setTimeout(resolve, interval+nextLineDelay);

	});

}

// Execute choice! Add it to choice DOM.
Game.OVERRIDE_CHOICE_LINE = false;
Game.executeChoice = function(line){
	
	var choiceText = line.match(/\[([^\]]*)\]/)[1].trim();
	var choiceID = line.match(/\(\#([^\)]*)\)/)[1].trim().toLocaleLowerCase();

	var preChoiceCodeIfAny = null;
	if(/\`(.*)\`/.test(line)){
		preChoiceCodeIfAny = line.match(/\`(.*)\`/)[0]; // 0, with backticks
	}

	var div = document.createElement("div");
	div.innerHTML = choiceText;
	div.onclick = function(){

		// Any pre-choice code?
		if(preChoiceCodeIfAny) Game.executeCode(preChoiceCodeIfAny);

		// Override line... ONCE
		if(!Game.OVERRIDE_CHOICE_LINE){
			Game.addToQueue("b: "+choiceText);
		}
		Game.OVERRIDE_CHOICE_LINE = true;

		// Goto that choice, now!
		Game.goto(choiceID);

	};

	Game.choicesDOM.appendChild(div);

	// Return immediate promise
	return Game.immediatePromise();

}

// Execute code!
Game.executeCode = function(line){

	var code = line.match(/\`+([^\`]*)\`+/)[1].trim();
	try{
		eval(code);
	}catch(e){
		console.log(e);
	}

	// Return immediate promise
	return Game.immediatePromise();

}

// Execute wait! Just wait.
Game.executeWait = function(line){
	
	// Get integer from (...NN)
	var waitTime = parseInt(line.match(/^\(\.\.\.(\d+)\)/)[1].trim());
	
	// Delayed promise
	return RSVP.Promise(function(resolve){
		Game.setTimeout(resolve, waitTime);
	});

};

// Execute goto! Just goto.
Game.executeGoto = function(line){
	var gotoID = line.match(/^\(\#(.*)\)/)[1].trim().toLocaleLowerCase();
	Game.goto(gotoID);
}

// Determine line type... text, choice, or code?
Game.getLineType = function(line){

	// Is it a choice?
	var isChoice = /\[.*\]\(\#.*\)/.test(line);
	if(isChoice) return "choice";

	// Is it a goto?
	var isGoto = /^\(\#(.*)\)/.test(line);
	if(isGoto) return "goto";

	// Is it code?
	var isCode = /^\`/.test(line);
	if(isCode) return "code";

	// Is it a wait?
	var isWait = /^\(\.\.\.\d+\)/.test(line);
	if(isWait) return "wait";

	// Otherwise, it's text.
	return "text";

};

// Parse all the handlebars...
Game.parseLine = function(line){

	// Get the IFs, if any
	var lookForIfs = true;
	while(lookForIfs){

		lookForIfs = false;

		// Look for an IF!
		var regex = /\{\{if.*\/if\}\}/ig;
		var regexResult = regex.exec(line);
		if(regexResult){

			// The result...
			var fullConditional = regexResult[0];
			var startsAtIndex = regexResult.index;
			var endsAtIndex = startsAtIndex + fullConditional.length;

			// Extract the condition
			var condition = fullConditional.match(/\{\{if\s+([^\{\}]*)\}\}/)[1];

			// Extract the inside text
			var insideText = fullConditional.match(/\}\}([^\{\}]*)\{\{/)[1].trim();

			// Eval condition!
			var conditionIsTrue = false;
			try{
				conditionIsTrue = eval(condition);
			}catch(e){
				console.log(e);
			}

			// Edit the line
			var insert = conditionIsTrue ? insideText : "";
			line = line.slice(0,startsAtIndex) + insert + line.slice(endsAtIndex);

			// Keep searching...
			lookForIfs = true;

		}
		
	}

	// Return line!
	return line;

};

////////////////////////////////////////////////////////////////////////////////////////////////
// WHERE STUFF WILL BE DRAWN ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

Game.canvas = document.querySelector("#game_canvas");
Game.canvas.width = 360 * 2;
Game.canvas.height = 450 * 2;
Game.canvas.style.width = Game.canvas.width/2 + "px";
Game.canvas.style.height = Game.canvas.height/2 + "px";
Game.context = Game.canvas.getContext("2d");

// A blank scene
Game.resetScene = function(){
	Game.scene = {};
	Game.scene.children = [];
};
Game.resetScene();

// Update & draw all the kids!
Game.updateCanvas = function(){

	// For retina
	var ctx = Game.context;
	ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
	ctx.save();
	ctx.scale(2,2);
	
	// Update/Draw all kids
	Game.scene.children.forEach(function(child){
		child.draw(ctx);
	});

	// Restore
	ctx.restore();

	// Draw HP
	HP.draw();

};



