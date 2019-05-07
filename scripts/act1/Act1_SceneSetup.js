Loader.addSounds([
	{ id:"music_battle", src:"sounds/music/battle.mp3" },
	{ id:"music_pokemon", src:"sounds/music/pokemon.mp3" },

	{ id:"dramatic", src:"sounds/sfx/dramatic.mp3" },
	{ id:"fart", src:"sounds/sfx/fart.mp3" }
]);

SceneSetup.act1 = function(){

	Game.resetScene();

	// RESET HP
	HP.reset();

	// ATTACKS
	_.attack_harm = 0;
	_.attack_alone = 0;
	_.attack_bad = 0;

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

	HP.hide();
	clearText();	
	Game.resetScene();

	// WHOOSH
	sfx("whoosh");
	music('campus', {volume:0.5, fade:1});

	// Background
	var bg = new BG_Act1_Outro();
	Game.scene.children.push(bg);

};
SceneSetup.act1_end = function(){

	Game.resetScene();
	music(null);
	stopAllSounds();

	// HACK
	Game.TEXT_SPEED = 50;
	Game.FORCE_TEXT_Y = 52;
	Game.FORCE_CANT_SKIP = true;
	$("#game_container").style.background = "#000";
	$("#game_choices").style.display = "none";

	// KILL
	Game.scene.kill = function(){
		Game.FORCE_TEXT_Y = -1;
		Game.FORCE_CANT_SKIP = false;
		$("#game_container").style.background = "";
		$("#game_choices").style.display = "";
	};

};