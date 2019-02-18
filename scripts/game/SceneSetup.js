/**********************************

A big ol' singleton class that just makes it easy to create scenes.

**********************************/

window.SceneSetup = {};

SceneSetup.demo = function(){

	Game.resetScene();

	// Background
	var bg = new BGAnxiety();
	Game.scene.children.push(bg);

	// Hong
	var hong = new Hong();
	Game.scene.children.push(hong);

	// Beebee
	var beebee = new Beebee();
	Game.scene.children.push(beebee);

};