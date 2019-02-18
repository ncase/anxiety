// Load assets
Loader.addScenes([
	"scenes/demo.md"
]);
Loader.addImages([
	{ id:"demo_beebee", src:"sprites/demo_beebee.png" },
	{ id:"demo_hong", src:"sprites/demo_hong.png" }
]);
Loader.load().then(function(){
	Game.init();
	Game.start();
});