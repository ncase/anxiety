Loader.addSounds([
	{ id:"music_hum", src:"sounds/music/hum.mp3" },
	{ id:"music_campus", src:"sounds/music/campus.mp3" }
]);

SceneSetup.intro = function(){

	Game.resetScene();

	// Music
	music('campus', {volume:0.6});

	// Background
	var bg = new BG_Intro();
	Game.scene.children.push(bg);

	// TOTAL HACK
	publish("hide_tabs");

};

subscribe("HACK_chselect", function(){
	Game.choicesDOM.style.height = "250px";
});
subscribe("HACK_chselect_end", function(){
	Game.choicesDOM.style.height = "130px";
});