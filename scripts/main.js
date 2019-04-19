// Load assets
Loader.addScenes([
	"scenes/intro.md",
	"scenes/act1.md",
	//"scenes/test.md",
	//"scenes/test-outro.md"
]);
Loader.load().then(function(){
	Game.init();
	Game.start();

	// Set up...
	SceneSetup.act1();
	publish("hp_show");
	hong({body:"phone1", mouth:"neutral", eyes:"neutral"});
	//_.whitebread = true;
	_.partyinvite="ignore";
	_.fifteencigs = true;
	//_.subtweet=true;
	_.seppuku = true;

	// GO!
	Game.goto("act1g");

});