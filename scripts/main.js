// Load assets
Loader.addScenes([
	"scenes/intro.md",
	"scenes/act1.md",
	"scenes/act1-end.md"
]);
Loader.load().then(function(){

	$("#loading_progress").style.display = "none";
	$("#loading_done").style.display = "block";
	$("#loading").onclick = function(){
		publish('START_GAME');
	};

	Game.init();

});

subscribe("START_GAME", function(){
	
	$("#loading").style.display = "none";
	Game.start();

	/*SceneSetup.act1();
	music('battle', {volume:0.5});
	hong({body:"phone1"});

	_.seppuku = true;
	_.hookuphole = true;
	_.catmilk = true;

	Game.goto("act1g");*/
	
	Game.goto("intro");

});