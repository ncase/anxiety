Loader.addSounds([
	{ id:"music_party1", src:"sounds/music/party1.mp3" }
]);

SceneSetup.act4 = function(){

	Game.resetScene();

	// RESET HP
	HP.reset();

	// ATTACKS (TODO: ACT I, ACT II...???)
	_.attack_harm = 0;
	_.attack_alone = 0;
	_.attack_bad = 0;

	// Music
	music('campus', {volume:0.5});

	// Background
	var bg = new BG_Act4();
	Game.scene.children.push(bg);

	// Hong
	/*var hong = new Act1_Hong();
	Game.scene.children.push(hong);

	// Beebee
	var beebee = new Act1_Beebee();
	Game.scene.children.push(beebee);*/

};