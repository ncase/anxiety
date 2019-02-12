var xhr = new XMLHttpRequest();
xhr.open('GET', 'woods.md?v='+Math.random());
xhr.onload = function() {
    if(xhr.status===200){
        Game.onload(xhr.responseText);
    }
};
xhr.send();

/*****************************/
/*****************************/
/*****************************/

window._ = {};
window.Game = {};

Game.sections = {};
Game.startSectionID = null;

Game.dom = document.querySelector("#game_container");
Game.wordsDOM = document.querySelector("#game_words");
Game.choicesDOM = document.querySelector("#game_choices");

Game.queue = [];

// Parse data!
Game.onload = function(data){

	// THE FIRST ID
	Game.startSectionID = null;

	// Split into sections...
	data = data.trim();
	data = "\n" + data;
	var sections = data.split(/\n\#\s*/);
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

	// Animation!
	Game.wordsDOM.style.top = "80px";
	var animloop = function(){
		Game.update();
		requestAnimationFrame(animloop);
	};
	requestAnimationFrame(animloop);

	// Let's go!
	Game.start();

}

Game.start = function(){
	window._ = {}; // global var, reset
	Game.goto(Game.startSectionID);
};

Game.update = function(){

	var wordsHeight = 80 + Game.wordsDOM.getBoundingClientRect().height;
	var currentY = parseFloat(Game.wordsDOM.style.top) || 80;
	var gotoY = (wordsHeight<260) ? 0 : wordsHeight-260;
	gotoY = 80 - gotoY;

	var nextY = currentY*0.9 + gotoY*0.1;
	Game.wordsDOM.style.top = nextY+"px";

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

	var doNextLineImmediately = false;

	// Parse handlebars
	var originalLine = Game.queue.shift();
	if(!originalLine) return; // END OF QUEUE.
	line = Game.parseLine(originalLine);

	// Execute line
	var promiseNext;
	if(line!=""){ // none, don't execute...

		// Execute based on what type it is!
		var lineType = Game.getLineType(line);
		switch(lineType){
			case "text":
				promiseNext = Game.executeText(line);
				break;
			case "choice":
				promiseNext = Game.executeChoice(line);
				doNextLineImmediately = true;
				break;
			case "code":
				promiseNext = Game.executeCode(line);
				doNextLineImmediately = true;
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

// Execute text! Just add it to text DOM.
Game.executeText = function(line){

	var div = document.createElement("div");
	var promiseDone = pinkySwear();

	// Is it human or wolf?
	var dialogue;
	var isWolf = /^\>(.*)/.test(line);
	if(isWolf){
		div.className = "wolf-bubble";
		dialogue = line.match(/^\>(.*)/)[1].trim();
	}else{
		div.className = "human-bubble";
		dialogue = line;
	}

	// Add the bubble, with animation
	Game.wordsDOM.appendChild(div);
	requestAnimationFrame(function(){
		requestAnimationFrame(function(){
			div.style.opacity = 1;
			div.style.left = 0;
		});
	});

	// Add the text, letter by letter!
	var interval = 0;
	var SPEED = 40;
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
	setTimeout(function(){
		promiseDone(true, []);
	}, interval+200);
	return promiseDone;

}

// Execute choice! Add it to choice DOM.
Game.executeChoice = function(line){
	
	var choiceText = line.match(/\[(.*)\]/)[1].trim();
	var choiceID = line.match(/\(\#(.*)\)/)[1].trim().toLocaleLowerCase();

	var div = document.createElement("div");
	div.innerHTML = choiceText;
	div.onclick = function(){
		Game.addToQueue("> "+choiceText);
		Game.goto(choiceID);
	};

	Game.choicesDOM.appendChild(div);

	// Return promise
	var promiseImmediate = new pinkySwear();
	promiseImmediate(true, []);
	return promiseImmediate;

}

// Execute code!
Game.executeCode = function(line){

	var code = line.match(/\`+([^\`]*)\`+/)[1].trim();
	try{
		eval(code);
	}catch(e){
		console.log(e);
	}

	// Return promise
	var promiseImmediate = new pinkySwear();
	promiseImmediate(true, []);
	return promiseImmediate;

}

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


/*****************************/
/*****************************/
/*****************************/

Game.canvas = document.querySelector("#game_canvas");
Game.canvas.width = 360 * 2;
Game.canvas.height = 450 * 2;
Game.canvas.style.width = Game.canvas.width/2 + "px";
Game.canvas.style.height = Game.canvas.height/2 + "px";


