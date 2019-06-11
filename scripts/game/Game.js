window._ = {};
window.Game = {};

Game.sections = {};
Game.queue = [];

Game.dom = $("#game_container");
Game.wordsDOM = $("#game_words");
Game.choicesDOM = $("#game_choices");
Game.canvas = $("#game_canvas");

window.SceneSetup = {}; // A big ol' singleton class that just makes it easy to create scenes.

// HELPER FUNCS
window.bb = function(){
	publish("bb", arguments);
};
window.hong = function(){
	publish("hong", arguments);
};
window.attack = function(damage, type){
	publish("attack", ["hong", damage, type]);
	_["attack_"+type]++; // HACK
};
window.attackBB = function(damage, type){
	publish("attack", ["bb", damage, type]);
};

// Init
Game.init = function(){

	// HP!
	window.HP = new HitPoints();

	// Animation!
	console.log("init");
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

	});

};

////////////////////////////////////////////////////////////////////////////////////////////////
// SCENE MANAGEMENT ////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

Game.start = function(){
	window._ = {}; // global var, reset
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

	// Options update
	Options.update();

};

// PAUSING THE GAME
Game.paused = false;
Game.pausedDOM = $("#paused");
Game.pause = function(){

	Game.paused = true;
	Game.pausedDOM.style.display = "block";
	Howler.mute(true);

	$("#paused").setAttribute("modal", (Options.showing||About.showing) ? "yes" : "no" );
	
};
window.addEventListener("blur", Game.pause);
Game.onUnpause = function(){
	if(Game.paused && !(Options.showing||About.showing)){
		Game.paused = false;
		Game.pausedDOM.style.display = "none";
		Howler.mute(false);
	}
};
Game.pausedDOM.onclick = function(){
	if(Options.showing){
		publish("hide_options");
	}
	if(About.showing){
		$("#close_about").onclick();
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
// SKIP TEXT WHEN CLICK ANYWHERE (but NOT capture in choice)
Game.clearAllTimeouts = function(){

	// NOPE
	if(Game.FORCE_CANT_SKIP) return;

	// Is this DURING while someone is talking?
	var isInterrupting = (Game.WHO_IS_SPEAKING!=null);

	// If not, clear all
	// Otherwise, clear all BUT last one... UNLESS there's only one left
	if(Game.timeoutCallbacks.length==1) isInterrupting=false;
	for(var i=0; i<Game.timeoutCallbacks.length; i++){
		if(isInterrupting && i==Game.timeoutCallbacks.length-1) break;
		Game.timeoutCallbacks[i].callback();
	}
	if(isInterrupting){
		Game.timeoutCallbacks = [ Game.timeoutCallbacks[Game.timeoutCallbacks.length-1] ]; // last one
	}else{
		Game.timeoutCallbacks = [];
	}

};
Game.canvas.addEventListener("click", Game.clearAllTimeouts);
Game.canvas.addEventListener("touchstart", Game.clearAllTimeouts);
Game.choicesDOM.addEventListener("click", Game.clearAllTimeouts);
Game.choicesDOM.addEventListener("touchstart", Game.clearAllTimeouts);

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
Game.FORCE_TEXT_Y = -1;
Game.updateText = function(instant){
	if(Game.FORCE_TEXT_Y<0){
		var wordsHeight = 80 + Game.wordsDOM.getBoundingClientRect().height;
		var currentY = parseFloat(Game.wordsDOM.style.top) || 80;
		var gotoY = (wordsHeight<250) ? 0 : wordsHeight-250;
		gotoY = 80 - gotoY;
		var nextY = instant ? gotoY : currentY*0.9 + gotoY*0.1;
		Game.wordsDOM.style.top = nextY+"px";
	}else{
		Game.wordsDOM.style.top = Game.FORCE_TEXT_Y+"px";
	}
};

// CLEAR TEXT
Game.clearText = function(){
	Game.wordsDOM.innerHTML = "";
	Game.updateText(true);
};
window.clearText = Game.clearText;

// Execute text! Just add it to text DOM.
Game.TEXT_SPEED = 50;
Game.CLICK_TO_ADVANCE = true;
Game.FORCE_CANT_SKIP = false;
Game.OVERRIDE_TEXT_SPEED = 1;
Game.FORCE_TEXT_DURATION = -1;
Game.WHO_IS_SPEAKING = null; // "h", "b", "n" etc...
Game.CURRENT_SPEAKING_SPEED = 1;
Game.FORCE_NO_VOICE = false;
Game.executeText = function(line){

	return new RSVP.Promise(function(resolve){

		// Who's speaking?
		// b: Beebee, h: Hong, n: Narrator, n2: Narrator 2, n3: Narrator 3
		var regex = /^([^\:]+)\:(.*)/
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
			case "n2": // narrator 2
				div.className = "narrator-bubble-2";
				break;
			case "n3": // narrator 3
				div.className = "narrator-bubble-3";
				break;
			case "n4": // narrator 3
				div.className = "narrator-bubble-4";
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

		// Add the text
		var interval = 0;
		var SPEED = Math.round(Game.TEXT_SPEED / Game.OVERRIDE_TEXT_SPEED);
		if(Game.FORCE_TEXT_DURATION>0){
			SPEED = Math.round(Game.FORCE_TEXT_DURATION/dialogue.length);
		}

		// IF IT'S BEEBEE, HONG, or NARRATOR 3
		if(speaker=="b" || speaker=="h" || speaker=="n3"){

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
				(function(index, interval, speaker, forceNoSound){
					Game.setTimeout(function(){

						// Show it
						div.children[index].style.opacity = 1;

						// And SOUND?
						if(!forceNoSound){
							var chr = div.children[index].innerHTML;
							if(chr!=" "){
								if(speaker=="h"){
									voice("hong", {volume:0.3});
								}
								if(speaker=="b"){
									voice("beebee", {volume:0.5});
								}
								if(speaker=="n3"){
									voice("typewriter", {volume:0.5});
								}
							}
						}

					}, interval);
				})(i, interval, speaker, Game.FORCE_NO_VOICE);

				// Bigger interval
				if(i!=dialogue.length-1){ // NOT last
					if(chr=="."){
						if(dialogue[i+1]=="\""){ // UNLESS next one's a punctuation!
							interval += 0;
						}else{
							interval += SPEED*10;
						}
					}else if(chr=="?" || chr=="!"){ // gap unless next one's ALSO punctuation.
						if(dialogue[i+1]==" "){ // next one's a space? gap!
							interval += SPEED*10;
						}else{ // if not, no!
							interval += SPEED;
						}
					}else if(chr=="," || chr==":"){
						interval += SPEED*5;
					}else{
						interval += SPEED;
					}
				}

			}

		}else{

			// IF NARRATOR 1 or 2 or 4

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
				var reggie = /\*(.*)\*/;
				var word = dialogueWords[i];
				if(reggie.test(word)){ 
					word = "<i>" + word.match(reggie)[1].trim() + "</i>";
				}

				// Actual emphasis
				reggie = /\_(.*)\_/;
				if(reggie.test(word)){
					word = "<i class='italics'>" + word.match(reggie)[1].trim() + "</i>";
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
				(function(index, interval, word){
					Game.setTimeout(function(){

						// Show
						div.children[index].style.opacity = 1;

						// SOUND
						var chr = word.slice(-1);
						var isEmphasis = (chr=="*");
						voice(isEmphasis ? "narrator_emphasis" : "narrator");

					}, interval);
				})(i, interval, word);

				// Interval
				interval += SPEED*6;

				// Larger interval if punctuation...
				var chr = word.slice(-1);
				var isIcon = (word[0]=="#" && chr=="#");
				if(chr=="*") chr = word[word.length-2]; // coz emphasis
				if(chr=="," || chr==":") interval += SPEED*5;
				if(chr=="." || chr=="?" || chr=="!") interval += SPEED*10;
				if(word.slice(-3)=="...") interval += SPEED*15;

				// Oh, was it an ICON?
				if(word[0]=="#" && chr=="#"){
					interval += SPEED*10;

					var span = div.children[i];
					span.innerHTML = "";
					span.style.display = "block";
					var iconName = word.slice(1,-1)
					var icon = Library.images["fear_"+iconName];
					div.children[i].appendChild(icon);
					icon.style.display = "block";
					icon.style.margin = "0 auto";
					icon.style.width = "80px";
					icon.style.height = "80px";

				}

			}

		}

		// Return overrides to default
		Game.OVERRIDE_TEXT_SPEED = 1;
		Game.FORCE_TEXT_DURATION = -1;
		Game.FORCE_NO_VOICE = false;

		// Return promise
		var nextLineDelay = Game.TEXT_SPEED*7; // don't override this
		if(dialogue.slice(-1)=="-") nextLineDelay=0; // sudden interrupt!
		if(!Game.FORCE_CANT_SKIP){
			if(Game.CLICK_TO_ADVANCE){ // IF IT'S CLICK-TO-ADVANCE, "INFINITE" TIMEOUT.
				nextLineDelay = 1000*10000; // ten thousand seconds
			}
		}

		// No one's speaking anymore.
		Game.setTimeout(function(){
			Game.WHO_IS_SPEAKING = null;
		}, interval);

		// Show the clicky UI
		if(!Game.FORCE_CANT_SKIP){
			if(Game.CLICK_TO_ADVANCE){
				Game.setTimeout(function(){
					publish("show_click_to_advance");
				}, interval+Game.TEXT_SPEED*2);
			}
		}

		// DONE WITH IT
		Game.setTimeout(function(){
			publish("hide_click_to_advance");
			resolve(); // DONE WITH IT.
		}, interval+nextLineDelay);

	});

}

// CHOICE UI SOUNDS
Loader.addSounds([
	{ id:"ui_show_choice", src:"sounds/ui/show_choice.mp3" },
	{ id:"ui_click", src:"sounds/ui/click.mp3" },
	{ id:"ui_hover", src:"sounds/ui/hover.mp3" }
]);

// Execute choice! Add it to choice DOM.
Game.OVERRIDE_CHOICE_LINE = false;
Game.HACK_MAKE_THE_LINE_BIG = false;
Game.executeChoice = function(line){
	
	var choiceText = line.match(/\[([^\]]*)\]/)[1].trim();
	var choiceID = line.match(/\(\#([^\)]*)\)/)[1].trim().toLocaleLowerCase();

	var preChoiceCodeIfAny = null;
	if(/\`(.*)\`/.test(line)){
		preChoiceCodeIfAny = line.match(/\`(.*)\`/)[0]; // 0, with backticks
	}

	// Choice text, add italics where *word word words*
	var originalChoiceText = choiceText;
	var italicsRegex = /\*([^\*]*)\*/g;
	var results;
	while(results=italicsRegex.exec(choiceText)){
		// Modify choiceText in place, it's fine.
		var startOfMatch = results.index;
		var endOfMatch = results.index + results[0].length;
		choiceText = choiceText.slice(0,startOfMatch) + "<i>" + results[1] + "</i>" + choiceText.slice(endOfMatch);
	}

	var div = document.createElement("div");
	div.innerHTML = choiceText;
	div.onclick = function(event){

		// Any pre-choice code?
		if(preChoiceCodeIfAny) Game.executeCode(preChoiceCodeIfAny);

		// Override line... ONCE
		if(!Game.OVERRIDE_CHOICE_LINE){
			Game.addToQueue("b: "+originalChoiceText);
		}
		Game.OVERRIDE_CHOICE_LINE = false;

		// Play sound
		sfx("ui_click");

		// Goto that choice, now!
		Game.goto(choiceID);

		// STOP THE PROP
		event.stopPropagation();

	};
	div.onmouseover = function(){
		sfx("ui_hover");
	};

	// Add choice, animated!
	div.style.top = "150px";
	Game.choicesDOM.appendChild(div);
	setTimeout(function(){
		div.style.top = "0px";
		sfx("ui_show_choice", {volume:0.4});
	},10);

	// Or... FORCE
	if(Game.HACK_MAKE_THE_LINE_BIG){
		div.style.fontSize = "30px";
	}else{

		// If it's too big, shrink font size
		setTimeout(function(){
			var choiceHeight = div.getBoundingClientRect().height;
			if(choiceHeight>40) div.style.fontSize = "18px";	
			// And if still too much???		
			setTimeout(function(){
				var choiceHeight = div.getBoundingClientRect().height;
				if(choiceHeight>40) div.style.fontSize = "16px";
				// And if still too much???		
				setTimeout(function(){
					var choiceHeight = div.getBoundingClientRect().height;
					if(choiceHeight>40) div.style.fontSize = "14px";
				},1);
			},1);
		},1);
		
	}
	Game.HACK_MAKE_THE_LINE_BIG = false;

	// Wait a bit before adding new line
	return new RSVP.Promise(function(resolve){
		Game.setTimeout(resolve, 100);
	});

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

	// Unless it's click to advance, then IGNORE ALL WAITS
	if(!Game.FORCE_CANT_SKIP){

		// Specific wait-time, don't skip?
		var waitTimeString = waitTime+"";
		var lastDigit = waitTimeString[waitTimeString.length-1];
		var cantSkip = (lastDigit=="1"); // CAN'T SKIP.

		if(!cantSkip && Game.CLICK_TO_ADVANCE && waitTime<999){ // hack: unless the wait is long.
			waitTime = 0;
		}

	}
	
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
		var regex = /\{\{if[^\/]*\/if\}\}/ig; // the reason it's inside here is to reset .exec
		var regexResult = regex.exec(line);
		if(regexResult){

			// The result...
			var fullConditional = regexResult[0];
			var startsAtIndex = regexResult.index;
			var endsAtIndex = startsAtIndex + fullConditional.length;

			// Extract the condition
			var condition = fullConditional.match(/\{\{if\s+([^\{\}]*)\}\}/)[1];

			// Extract the inside text
			var insideText = fullConditional.match(/\}\}([^\{\}]*)\{\{/)[1].trim()+" ";

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

	// Evaluate {{expressions}}, if any
	var lookForExpressions = true;
	while(lookForExpressions){

		lookForExpressions = false;

		// Look for an IF!
		var regex = /\{\{[^\}]*\}\}/ig; // the reason it's inside here is to reset .exec
		var regexResult = regex.exec(line);
		if(regexResult){

			// The result...
			var fullExpression = regexResult[0];
			var startsAtIndex = regexResult.index;
			var endsAtIndex = startsAtIndex + fullExpression.length;

			// Extract the expression
			var expression = fullExpression.match(/\{\{([^\}]*)\}\}/)[1];

			// Eval condition!
			var evaluated = "";
			try{
				evaluated = eval(expression);
			}catch(e){
				console.log(e);
			}

			// Edit the line
			line = line.slice(0,startsAtIndex) + evaluated + line.slice(endsAtIndex);

			// Keep searching...
			lookForExpressions = true;

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
Game.scene = null;
Game.resetScene = function(){
	
	// Kill all of previous scene
	if(Game.scene){
		Game.scene.children.forEach(function(child){
			if(child.kill) child.kill();
		});
		if(Game.scene.kill) Game.scene.kill();
	}

	// New scene!
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
		if(child.update) child.update();
	});
	Game.scene.children.forEach(function(child){
		child.draw(ctx);
	});

	// Restore
	ctx.restore();

	// Draw HP
	HP.draw();

};



