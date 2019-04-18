SceneSetup.act1 = function(){

	Game.resetScene();

	// Background
	var bg = new BG_Anxiety();
	Game.scene.children.push(bg);

	// Hong
	var hong = new Act1_Hong();
	Game.scene.children.push(hong);

	// Beebee
	var beebee = new Act1_Beebee();
	Game.scene.children.push(beebee);

};
SceneSetup.act1_outro = function(){

	clearText();
	Game.resetScene();

	// Background
	var bg = new BG_Act1_Outro();
	Game.scene.children.push(bg);

};