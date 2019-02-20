SceneSetup.demo = function(){

	Game.resetScene();

	// Background
	var bg = new BG_Anxiety();
	Game.scene.children.push(bg);

	// Hong
	var hong = new Demo_Hong();
	Game.scene.children.push(hong);

	// Beebee
	var beebee = new Demo_Beebee();
	subscribe("scene", function(command){
		switch(command){
			case "add_beebee":
				Game.scene.children.push(beebee);
				break;
		}
	});

};