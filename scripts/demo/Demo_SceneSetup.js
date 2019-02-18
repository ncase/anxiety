SceneSetup.demo = function(){

	Game.resetScene();

	HP.hong = 80;

	// Background
	var bg = new BG_Anxiety();
	Game.scene.children.push(bg);

	// Hong
	var hong = new Demo_Hong();
	Game.scene.children.push(hong);

	// Beebee
	var beebee = new Demo_Beebee();
	Game.scene.children.push(beebee);

};