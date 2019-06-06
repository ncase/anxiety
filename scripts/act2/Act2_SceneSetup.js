SceneSetup.act2 = function(){

	Game.resetScene();

	// RESET HP
	HP.reset();

	// ATTACKS
	_.attack_harm = 0;
	_.attack_alone = 0;
	_.attack_bad = 0;

	// Background
	var bg = new BG_Party();
	Game.scene.children.push(bg);

	// Hong
	var hong = new Act1_Hong();
	Game.scene.children.push(hong);

	// Beebee
	var beebee = new Act1_Beebee();
	Game.scene.children.push(beebee);

};