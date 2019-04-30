window.About = {};

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

		aboutDOM.style.top = "";
		//aboutDOM.setAttribute("about","yes");

		// Bye
		About.showing = false;

	};

	// SHOW END
	subscribe("END_OF_DEMO", function(){

		// Hi
		About.showing = true;
		Game.pause();

		// Cut in
		aboutDOM.removeAttribute("about");
		aboutDOM.style.display = "none";
		aboutDOM.style.top = "0px";
		setTimeout(function(){
			aboutDOM.style.display = "block";
		},10);
	});

	// Replay
	$("#replay").onclick = function(){

		// TODO: UI/SCREAM SOUNDS

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