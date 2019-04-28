window.Options = {};

(function(){

	var text_speed_slider = $("#text_speed_slider");
	var text_speed_preview = $("#text_speed_preview");

	var SPEED_TEXTS = [
		"Show text slowlyyyyy",
		"Show text at a relaxed speed",
		"Show text at the default speed",
		"Show text at a brisk speed",
		"Show text NOW! (& click-to-advance)"
	];
	var SPEEDS = [
		120,
		80,
		60,
		40,
		0
	];
	text_speed_slider.oninput = function(){
		updateText();
	};

	///////////////////////////////////
	// For previewing the text speed //
	///////////////////////////////////

	Options.update = function(){

		// Timeout callbacks...
		for(var i=0; i<_timeoutCallbacks.length; i++){
			var tc = _timeoutCallbacks[i];
			tc.timeLeft -= 1000/60;
			if(tc.timeLeft<=0){
				tc.callback();
				_timeoutCallbacks.splice(i,1); // delete that one
				i -= 1; // set index back one
			}
		}

	};

	var _timeoutCallbacks = [];
	var _setTimeout = function(callback, interval){
		_timeoutCallbacks.push({
			callback: callback,
			timeLeft: interval
		});
	};
	var _clearAllTimeouts = function(){
		_timeoutCallbacks = [];
	};

	var updateText = function(){

		var i = parseInt(text_speed_slider.value);
		var div = text_speed_preview;

		Game.TEXT_SPEED = SPEEDS[i];

		// Clear previous crap
		_clearAllTimeouts();
		div.innerHTML = "";

		// What's the dialogue?
		var dialogue = SPEED_TEXTS[i];

		// Put in the text
		var span, chr;
		for(var i=0; i<dialogue.length; i++){
			span = document.createElement("span");
			span.innerHTML = dialogue[i];
			span.style.opacity = 0;
			div.appendChild(span);
		}

		// Then REVEAL letters one-by-one
		var interval = 0;
		for(var i=0; i<dialogue.length; i++){

			var chr = dialogue[i];

			(function(index, interval){
				_setTimeout(function(){
					div.children[index].style.opacity = 1;
				}, interval);
			})(i, interval);

			// Bigger interval
			interval += Game.TEXT_SPEED;

		}

	};
	updateText();

})();