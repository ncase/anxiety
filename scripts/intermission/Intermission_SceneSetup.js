Loader.addSounds([
	{ id:"intermission", src:"sounds/stings/you_winMIX.mp3" }
]);

SceneSetup.intermission = function(STAGE){

	Game.resetScene();

	// RESET HP
	HP.reset();

	// Music
	sfx('intermission', {volume:0.9});

	// Background
	var bg = new BG_Intermission(STAGE);
	Game.scene.children.push(bg);

	// HACK
	Game.TEXT_SPEED = 0;
	Game.FORCE_TEXT_Y = 10;
	Game.FORCE_CANT_SKIP = true;
	Game.NO_NARRATOR_SOUNDS = true;
	$("#click_to_advance").style.color = "#000";

	// SAVE
	if(_.INTERMISSION_STAGE==1){ // between Act I and II
		publish("SAVE_GAME", ["act2"]);
	}else if(_.INTERMISSION_STAGE==2){ // between Act II and III
		publish("SAVE_GAME", ["act3"]);
	}
	
	// KILL
	Game.scene.kill = function(){

		Game.clearText();

		publish("update_text_speed");
		Game.FORCE_TEXT_Y = -1;
		Game.FORCE_CANT_SKIP = false;
		Game.NO_NARRATOR_SOUNDS = false;
		$("#click_to_advance").style.color = "";
	};

};