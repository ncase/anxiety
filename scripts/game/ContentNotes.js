var ContentNotes = {};

(function(){

	var cnDOM = $("#content_notes");

	subscribe("show_cn", function(){

		cnDOM.style.top = "65px";
		ContentNotes.showing = true;
		Game.pause();
		Howler.mute(false); // hack

		if(window.NO_CUSS_MODE) $("#cn_cussing").style.display = "none";

	});

	subscribe("hide_cn", function(){

		sfx("ui_click");	
		cnDOM.style.top = "";
		ContentNotes.showing = false;
		Game.onUnpause();

	});

})();