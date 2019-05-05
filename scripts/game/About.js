window.About = {};

Loader.addSounds([
	{ id:"yelp", src:"sounds/sfx/yelp.mp3" }
]);

(function(){

	// Newsletter stuff
	var gdpr = $("#gdpr");
	var submit = $("#submit");
	gdpr.oninput = function(){
		var isChecked = gdpr.checked;
		submit.disabled = !isChecked;
		submit.value = isChecked ? "Subscribe! →" : "← plz consent";
	};
	gdpr.oninput();
	$("#the_newsletter").setAttribute("action", "https://sendy.ncase.me/subscribe");

	// The About Button
	var aboutDOM = $("#end_demo");

	$("#about").onclick = function(){
		aboutDOM.setAttribute("about","yes");
		aboutDOM.style.top = "40px";

		// Hi
		About.showing = true;
		Game.pause();

	};
	$("#close_about").onclick = function(){

		sfx("ui_click");

		aboutDOM.style.top = "";
		//aboutDOM.setAttribute("about","yes");

		// Bye
		About.showing = false;

	};

	// SHOW TBC
	var tbc = $("#end_demo_tbc");
	subscribe("TO_BE_CONTINUED", function(){
		tbc.style.display = "block";
	});

	// SHOW END
	subscribe("END_OF_DEMO", function(){

		// Hi
		About.showing = true;
		Game.pause();

		// Cut in
		aboutDOM.removeAttribute("about");
		aboutDOM.style.display = "none";
		aboutDOM.style.display = "block";
		setTimeout(function(){
			aboutDOM.style.top = "0px"; // slide in
		},10);

		// Sound
		Howler.mute(false);
		sfx("rustle");
		music('campus', {volume:0.5, fade:1});

	});

	// Replay
	$("#replay").onclick = function(){

		// UI/SCREAM SOUNDS
		stopAllSounds();
		sfx("yelp");

		// Cut out
		aboutDOM.style.top = "";
		aboutDOM.style.display = "none";
		setTimeout(function(){
			aboutDOM.style.display = "block";
		},100);
		tbc.style.display = "none";

		// Bye
		About.showing = false;

		// Back to the beginning! (after a second)
		setTimeout(function(){
			publish("START_GAME");
		}, 1000);

	};


})();