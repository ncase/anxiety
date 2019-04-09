SceneSetup.intro = function(){

	Game.resetScene();

	// Background
	var bg = new BG_Intro();
	Game.scene.children.push(bg);

	// Hong
	/*var hong = new Act1_Hong();
	Game.scene.children.push(hong);

	// Beebee
	var beebee = new Act1_Beebee();
	subscribe("scene", function(command){
		switch(command){
			case "add_beebee":
				Game.scene.children.push(beebee);
				break;
		}
	});*/

};