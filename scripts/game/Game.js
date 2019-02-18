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
	Game.updateText();
	Game.updateCanvas();
	publish("update");
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
	var gotoY = (wordsHeight<260) ? 0 : wordsHeight-260;
	gotoY = 80 - gotoY;
	var nextY = currentY*0.9 + gotoY*0.1;
	Game.wordsDOM.style.top = nextY+"px";
};

// Execute text! Just add it to text DOM.
Game.OVERRIDE_TEXT_SPEED = 1;
Game.executeText = function(line){

	return new RSVP.Promise(function(resolve){

		// Is it human or wolf?
		var isWolf = /^\>(.*)/.test(line);
		var dialogue = isWolf ? line.match(/^\>(.*)/)[1].trim() : line; // Remove the > for wolf

		// Add the bubble, with animation
		var div = document.createElement("div");
		Game.wordsDOM.appendChild(div);
		div.className = isWolf ? "wolf-bubble" : "human-bubble";
		requestAnimationFrame(function(){
			requestAnimationFrame(function(){
				div.style.opacity = 1;
				div.style.left = 0;
			});
		});

		// Add the text, letter by letter!
		var interval = 0;
		var SPEED = Math.round(40 / Game.OVERRIDE_TEXT_SPEED);
		for(var i=0; i<dialogue.length; i++){

			var ch = dialogue[i];

			// for scopin'
			(function(ch, interval){
				setTimeout(function(){
					div.innerHTML += ch;
				}, interval);
			})(ch, interval);

			// Bigger interval
			if(ch=="."){
				interval += SPEED*10;
			}else{
				interval += SPEED;
			}

		}

		// Return promise
		var nextLineDelay = 300;
		if(dialogue.slice(-1)=="-") nextLineDelay=0; // sudden interrupt!
		setTimeout(resolve, interval+nextLineDelay);

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
			Game.addToQueue("> "+choiceText);
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
		setTimeout(resolve, waitTime);
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



