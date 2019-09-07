Loader.addSounds([
	{ id:"music_credits", src:"sounds/music/upbeatcreditMIX.mp3" }
]);

SceneSetup.credits = function(){

	// BYE TABS
	publish("hide_tabs");

	Game.resetScene();
	Game.clearText();

	// RESET HP
	HP.reset();

	// Background
	var bg = new BG_Credits();
	Game.scene.children.push(bg);

};