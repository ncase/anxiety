Loader.addSounds([
	{ id:"music_party2", src:"sounds/music/party2.mp3" },
	{ id:"music_battle_dark", src:"sounds/music/battle_dark_FIRST.mp3" },
	{ id:"music_battle_dark_loop", src:"sounds/music/battle_dark_LOOP.mp3" }
]);

SceneSetup.act3 = function(){

	// HI TABS
	publish("show_tabs");

	Game.resetScene();

	// RESET HP
	HP.reset();

	// ATTACKS
	_.CHAPTER = 3;

	// Music
	music('party2', {volume:0.4});

	// Background
	var bg = new BG_Rooftop();
	Game.scene.children.push(bg);

};