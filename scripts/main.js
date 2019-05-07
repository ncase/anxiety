// Load assets
Loader.addScenes([
	"scenes/intro.md",
	"scenes/act1.md",
	"scenes/act1_end.md",
	//"scenes/PROMO.md"
]);
Loader.load(function(progress){

	$("#loading_bar_bg").style.height = (progress*50)+"px";

}).then(function(){

	$("#loading").setAttribute("loaded","yes");
	$("#loading").onclick = function(){
		sfx("pop");
		publish('START_GAME');
	};

	Game.init();

});

subscribe("START_GAME", function(){
		
	$("#loading").style.display = "none";
	Game.start();


	/*SceneSetup.act1();
	//music('battle', {volume:0.5});
	hong({body:"phone1"});
	publish("hp_show");

	_.seppuku = true;
	_.hookuphole = true;
	_.catmilk = true;*/

	
	/*_.attack_harm = 0;
	_.attack_alone = 0;
	_.attack_bad = 0;
	Game.goto("act1_end");
	*/
	
	Game.goto("intro");

});