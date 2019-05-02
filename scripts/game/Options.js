window.Options = {};

(function(){

	var optionsDOM = $("#options");
	var text_speed_slider = $("#text_speed_slider");
	var text_speed_preview = $("#text_speed_preview");
	var volume_slider = $("#volume_slider");

	text_speed_slider.oninput = function(){
		updateText();
	};

	volume_slider.oninput = function(){
		Howler.volume(parseFloat(volume_slider.value));
	};

	var text_automatic_toggle = $("#text_automatic_toggle");
	text_automatic_toggle.onclick = function(){
		if(!Game.CLICK_TO_ADVANCE){
			HOW_MANY_PROMPTS = 1;
		}
		Game.CLICK_TO_ADVANCE = !Game.CLICK_TO_ADVANCE;
		text_automatic_toggle.innerHTML = Game.CLICK_TO_ADVANCE ? "on click" : "automatically";
	};



	///////////////////////////////////
	// CLICK TO ADVANCE //
	///////////////////////////////////

	var HOW_MANY_PROMPTS = 2;

	var ctaAlpha = 1;
	var click_to_advance = $("#click_to_advance");
	click_to_advance.style.display = "none";
	subscribe("show_click_to_advance", function(){
		if(HOW_MANY_PROMPTS>0){
			click_to_advance.style.display = "block";
			blinkCTA();
			HOW_MANY_PROMPTS--;
		}
	});
	subscribe("hide_click_to_advance", function(){
		click_to_advance.style.display = "none";
	});
	var blinkCTA = function(){
		if(click_to_advance.style.display=="block"){
			ctaAlpha = (ctaAlpha==1) ? 0 : 1;
			click_to_advance.style.opacity = ctaAlpha;
			setTimeout(blinkCTA, 700);
		}
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

		var div = text_speed_preview;

		// Calculate text speed...
		var t = parseFloat(text_speed_slider.value);
		t = (1-t); // whoops, flip around
		// Log slider, from 30 to 120, with 50 "in the middle"
		// f(0)=20, f(0.5)=50(+30), f(1)=120(+100)
		var speed = Math.round( 20 + Math.exp(t*2.5)*9 ); // close enough
		Game.TEXT_SPEED = speed;

		// Clear previous crap
		_clearAllTimeouts();
		div.innerHTML = "";

		// What's the dialogue?
		var dialogue = Game.TEXT_SPEED<80 ? "Speak this fast" : "Speak this slow";

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

	///////////////////////////////////
	// Showing/hiding options /////////
	///////////////////////////////////

	subscribe("show_options_bottom", function(){
		
		optionsDOM.style.top = "447px";
		_clearAllTimeouts();
		text_speed_preview.innerHTML = "";

		setTimeout(function(){
			updateText();
		},400);

	});

	var ALREADY_DID_INTRO = false;
	$("#options_ok").onclick = function(){
		if(!ALREADY_DID_INTRO){
			publish("cut_options_bottom");
			ALREADY_DID_INTRO = true;
		}else{
			publish("hide_options");
		}
	};

	subscribe("cut_options_bottom", function(){
		optionsDOM.style.display = "none";
		optionsDOM.style.top = "";
		setTimeout(function(){
			optionsDOM.style.display = "block";
		},100);

		// Total hack, but whatever
		Game.goto("intro-start-2");

		// Double total hack
		$("#gear").style.display = "block";
		$("#about").style.display = "block";

	});

	subscribe("show_options", function(){
		$("#volume_options").style.display = "block";
		optionsDOM.style.top = "200px";
		Options.showing = true;
		Game.pause();
		Howler.mute(false); // hack
	});

	subscribe("hide_options", function(){		
		optionsDOM.style.top = "";
		Options.showing = false;
		Game.onUnpause();
	});

})();