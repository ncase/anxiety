window._ = {};
window.Game = {};

Game.sections = {};
Game.startSectionID = null;

Game.dom = document.querySelector("#game_container");
Game.wordsDOM = document.querySelector("#game_words");
Game.choicesDOM = document.querySelector("#game_choices");
Game.canvas = document.querySelector("#game_canvas");

Game.startSectionID = null;
Game.queue = [];

window.SceneSetup = {}; // A big ol' singleton class that just makes it easy to create scenes.

// HACK TODO
window.attack = function(){};
window.miss = function(){};

// HELPER FUNCS
window.bb = function(){
	publish("bb", arguments);
};

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
		for(var i=0; i<Game.timeoutCallbacks.length; i++){
			var tc = Game.timeoutCallbacks[i];
			tc.timeLeft -= 1000/60;
			if(tc.timeLeft<=0){
				tc.callback();
				Game.timeoutCallbacks.splice(i,1); // delete that one
				i -= 1; // set index back one
			}
		}

		// The interface
		Game.updateText();
		Game.updateCanvas();

		// Ayyy
		publish("update");

	}

};

// PAUSING THE GAME
Game.paused = false;
Game.pausedDOM = document.querySelector("#paused");
Game.pause = function(){
	Game.paused = true;
	Game.pausedDOM.style.display = "block";
};
window.addEventListener("blur", Game.pause);
Game.onUnpause = function(){
	if(Game.paused){
		Game.paused = false;
		Game.pausedDOM.style.display = "none";
	}
};
window.addEventListener("click", Game.onUnpause);
window.addEventListener("touchstart", Game.onUnpause);

// "SET TIMEOUT" for text and stuff
Game.timeoutCallbacks = [];
Game.setTimeout = function(callback, interval){
	Game.timeoutCallbacks.push({
		callback: callback,
		timeLeft: interval
	});
};
// TODO: SKIP TEXT WHEN CLICK ANYWHERE (but NOT capture in choice)
Game.clearAllTimeouts = function(){
	Game.timeoutCallbacks.forEach(function(tc){
		tc.callback();
	});
	Game.timeoutCallbacks = [];
};
Game.canvas.addEventListener("click", Game.clearAllTimeouts);
Game.canvas.addEventListener("touchstart", Game.clearAllTimeouts);

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

// CLEAR TEXT
Game.clearText = function(){
	Game.wordsDOM.innerHTML = ""; // TODO HACK make prettier
};

// Execute text! Just add it to text DOM.
Game.TEXT_SPEED = 40;
Game.OVERRIDE_TEXT_SPEED = 1;
Game.WHO_IS_SPEAKING = null; // "h", "b", "n" etc...
Game.CURRENT_SPEAKING_SPEED = 1;
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
		Game.WHO_IS_SPEAKING = speaker; // WHO'S SPEAKING?!
		Game.CURRENT_SPEAKING_SPEED = Game.OVERRIDE_TEXT_SPEED;
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

		// Clear both
		var clearBoth = document.createElement("div");
		clearBoth.className = "clear-both";
		Game.wordsDOM.appendChild(clearBoth);

		// TODO: BOLD LETTER BY LETTER...

		// Add the text
		var interval = 0;
		var SPEED = Math.round(Game.TEXT_SPEED / Game.OVERRIDE_TEXT_SPEED);
		if(speaker!="n"){

			// Put in the text, each character a DIFFERENT SPAN...
			var span, chr;
			var isItalicized = false;
			for(var i=0; i<dialogue.length; i++){

				// Is it italicized?
				chr = dialogue[i];
				if(chr=="*") isItalicized = !isItalicized; // toggle!

				// Add letter span
				span = document.createElement("span");
				if(chr=="*"){
					// else, empty. can't NOT add span, coz screws up indexing.
				}else{
					span.innerHTML = isItalicized ? "<i>"+chr+"</i>" : chr;
				}
				span.style.opacity = 0;
				div.appendChild(span);

			}

			// Then REVEAL letters one-by-one
			for(var i=0; i<dialogue.length; i++){

				var chr = dialogue[i];

				// If it's the last char & it's "-", skip
				if(i==dialogue.length-1 && chr=="-") break;

				// for scopin'
				(function(index, interval){
					Game.setTimeout(function(){
						div.children[index].style.opacity = 1;
						//div.innerHTML += chr;
					}, interval);
				})(i, interval);

				// Bigger interval
				if(i!=dialogue.length-1){ // NOT last
					if(chr=="." || chr=="?" || chr=="!"){
						interval += SPEED*10;
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

			// Put in the text, each word a DIFFERENT SPAN
			var span;
			var dialogueWords = dialogue.split(" ");
			for(var i=0; i<dialogueWords.length; i++){

				// Is it an emphasized word?
				var word = dialogueWords[i];
				if(/\*(.*)\*/.test(word)){ // is 
					word = "<i>" + word.match(/\*(.*)\*/)[1].trim() + "</i>";
				}

				// Add the span
				span = document.createElement("span");
				span.innerHTML = word+" ";
				span.style.opacity = 0;
				div.appendChild(span);

			}

			// Then REVEAL words one-by-one
			for(var i=0; i<dialogueWords.length; i++){

				var word = dialogueWords[i];

				// for scopin'
				(function(index, interval){
					Game.setTimeout(function(){
						div.children[index].style.opacity = 1;
					}, interval);
				})(i, interval);

				// Interval
				interval += SPEED*6;

				// Larger interval if punctuation...
				var chr = word.slice(-1);
				if(chr=="*") chr = word[word.length-2]; // coz emphasis
				if(chr=="," || chr==":") interval += SPEED*5;
				if(chr=="." || chr=="?" || chr=="!") interval += SPEED*10;
				if(word.slice(-3)=="...") interval += SPEED*15;

			}


		}

		// Return overrides to default
		Game.OVERRIDE_TEXT_SPEED = 1;

		// Return promise
		var nextLineDelay = SPEED*7;
		if(dialogue.slice(-1)=="-") nextLineDelay=0; // sudden interrupt!
		Game.setTimeout(function(){
			Game.WHO_IS_SPEAKING = null; // DONE WITH IT.
			resolve();
		}, interval+nextLineDelay);

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
		Game.OVERRIDE_CHOICE_LINE = false;

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
	return new RSVP.Promise(function(resolve){
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

	// Get rid of newlines
	line = line.replace(/\n/gi,"");

	// Get the IFs, if any
	var lookForIfs = true;
	while(lookForIfs){

		lookForIfs = false;

		// Look for an IF!
		var regex = /\{\{if[^\/]*\/if\}\}/ig;
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



