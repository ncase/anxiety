// Load assets
Loader.addScenes([
	"scenes/intro.md",
	"scenes/act1.md",
	"scenes/act1-end.md"
]);
Loader.load().then(function(){

	$("#loading_progress").style.display = "none";
	$("#loading_done").style.display = "block";

	Game.init();
	/*Game.start();

	Game.pause(); // just for sounds

	// Set up...
	/*SceneSetup.act1();
	publish("hp_show");
	hong({body:"phone1", mouth:"neutral", eyes:"neutral"});
	_.whitebread = true;*/
	
	// GO!
	//music('battle', 0.5);
	//Game.goto("act1f");
	//Game.goto("intro");

});

subscribe("START_GAME", function(){
	
	$("#loading").style.display = "none";
	Game.start();

	SceneSetup.act1();
	music('battle', {volume:0.5});
	hong({body:"phone1"});
	Game.goto("act1h");
	
	//Game.goto("intro");

});