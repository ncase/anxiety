// Load assets
Loader.addScenes([
	"scenes/intro.md",
	"scenes/test.md",
	"scenes/test-outro.md"
]);
Loader.load().then(function(){
	Game.init();
	Game.start();

	// Outro
	SceneSetup.act1();
	Game.goto("act1i");

});