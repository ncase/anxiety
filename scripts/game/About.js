window.About = {};

Loader.addSounds([
	{ id:"yelp", src:"sounds/sfx/yelp.mp3" }
]);

(function(){

	// The About Button
	var aboutDOM = $("#about");

	$("#huh").onclick = function(){
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

	// SHOW END
	subscribe("THE_END", function(){

		// Hi
		About.showing = true;
		Game.pause();
		aboutDOM.removeAttribute("about");
		aboutDOM.style.top = "0px"; // to TOP.

		// Sound
		Howler.mute(false);
		sfx("rustle");
		music('campus', {volume:0.5, fade:1}); // aw yeah

	});

	// Replay
	$("#replay").onclick = function(){

		// UI/SCREAM SOUNDS
		stopAllSounds();
		//sfx("yelp");
		sfx("pop");

		// Cut out
		aboutDOM.style.top = "";
		aboutDOM.style.display = "none";
		setTimeout(function(){
			aboutDOM.style.display = "block";
		},100);

		// Bye
		About.showing = false;

		// Back to the beginning! (after a second)
		setTimeout(function(){
			publish("START_GAME");
		}, 1000);

	};


})();