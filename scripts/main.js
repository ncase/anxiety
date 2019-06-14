// Load assets
Loader.addScenes([
	//"scenes/intro.md",
	//"scenes/act1.md",
	//"scenes/act1_end.md",
	//"scenes/PROMO.md"
	//"scenes/act2.md",
	"scenes/act3.md",
]);
Loader.load(function(progress){

	$("#loading_bar_bg").style.height = (progress*50)+"px";

}).then(function(){

	$("#loading").setAttribute("loaded","yes");
	$("#loading").onclick = function(){
		//sfx("pop");
		publish('START_GAME');
	};

	Game.init();

});

subscribe("START_GAME", function(){
		
	$("#loading").style.display = "none";
	Game.start();
	
	Game.goto("act3");

});