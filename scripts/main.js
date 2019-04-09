// Load assets
Loader.addScenes([
	"scenes/intro.md"
	//"scenes/test.md"
]);
Loader.load().then(function(){
	Game.init();
	Game.start();
});