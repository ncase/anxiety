Loader.addSounds([
	{ id:"music_party2", src:"sounds/music/party2.mp3" },
	{ id:"music_battle_dark", src:"sounds/music/battle_dark.mp3" }
]);

SceneSetup.act3 = function(){

	Game.resetScene();

	// RESET HP
	HP.reset();

	// ATTACKS
	_.attack_harm = 0;
	_.attack_alone = 0;
	_.attack_bad = 0;

	// Music
	music('party2', {volume:0.6});

	// Background
	var bg = new BG_Rooftop();
	Game.scene.children.push(bg);

};