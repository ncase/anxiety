/**********************************

A big ol' singleton class that just makes it easy to create scenes.

**********************************/

window.SceneSetup = {};

SceneSetup.demo = function(){

	Game.resetScene();

	var beebee = new Beebee();
	Game.scene.children.push(beebee);

};