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
Game.textDOM = document.querySelector("#game_text");
Game.choicesDOM = document.querySelector("#game_choices");

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

	// Let's go!
	Game.start();

}

Game.start = function(){
	window._ = {}; // global var, reset
	Game.goto(Game.startSectionID);
};

Game.goto = function(sectionID){

	// Clear choices
	Game.choicesDOM.innerHTML = "";

	// Show each line...
	var section = Game.sections[sectionID];
	var lines = section.lines;
	for(var i=0; i<lines.length; i++){
	
		// Parse handlebars
		var originalLine = lines[i];
		line = Game.parseLine(originalLine);

		// Execute line
		if(line!=""){ // none, don't execute...

			// Execute based on what type it is!
			var lineType = Game.getLineType(line);
			switch(lineType){
				case "text":
					Game.executeText(line);
					break;
				case "choice":
					Game.executeChoice(line);
					break;
				case "code":
					Game.executeCode(line);
					break;
			}

			// If it's a goto, end THIS section immediately.
			if(lineType=="goto"){
				Game.executeGoto(line);
				break;
			}

		}

	}

};

// Execute text! Just add it to text DOM.
Game.executeText = function(line){
	var div = document.createElement("div");
	div.innerHTML = line;
	Game.textDOM.appendChild(div);
}

// Execute choice! Add it to choice DOM.
Game.executeChoice = function(line){
	
	var choiceText = line.match(/\[(.*)\]/)[1].trim();
	var choiceID = line.match(/\(\#(.*)\)/)[1].trim().toLocaleLowerCase();

	var div = document.createElement("div");
	div.innerHTML = choiceText;
	div.onclick = function(){
		Game.executeText("> "+choiceText);
		Game.goto(choiceID);
	};

	Game.choicesDOM.appendChild(div);

}

// Execute code!
Game.executeCode = function(line){
	var code = line.match(/\`+([^\`]*)\`+/)[1].trim();
	try{
		eval(code);
	}catch(e){
		console.log(e);
	}
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

