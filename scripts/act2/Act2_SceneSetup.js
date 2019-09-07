Loader.addSounds([
	{ id:"music_party1", src:"sounds/music/party1.mp3" }
]);

SceneSetup.act2 = function(){

	// HI TABS
	publish("show_tabs");

	Game.resetScene();

	// RESET HP
	HP.reset();

	// ATTACKS (TODO: ACT I, ACT II...???)
	_.CHAPTER = 2;
	_.attack_harm_ch2 = 0;
	_.attack_alone_ch2 = 0;
	_.attack_bad_ch2 = 0;

	// Music
	music('party1', {volume:0.6});

	// Background
	var bg = new BG_Party();
	Game.scene.children.push(bg);

	// Hong
	/*var hong = new Act1_Hong();
	Game.scene.children.push(hong);

	// Beebee
	var beebee = new Act1_Beebee();
	Game.scene.children.push(beebee);*/

};