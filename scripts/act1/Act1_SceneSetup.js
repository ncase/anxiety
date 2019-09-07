Loader.addSounds([
	{ id:"music_battle", src:"sounds/music/pogMIX.mp3" },
	{ id:"music_pokemon", src:"sounds/music/pokemon.mp3" },
	{ id:"fart", src:"sounds/sfx/fart.mp3" }
]);

SceneSetup.act1 = function(){

	Game.resetScene();

	// HI TABS
	publish("show_tabs");

	// RESET HP
	HP.reset();

	// ATTACKS
	Game.start(); /* RESET THE GLOBAL VAR _ */
	_.CHAPTER = 1;
	_.attack_harm_ch1 = 0;
	_.attack_alone_ch1 = 0;
	_.attack_bad_ch1 = 0;

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