// Load assets
Loader.addScenes([

	"scenes/intro.md",
	"scenes/act1.md",
	"scenes/intermission.md",
	"scenes/act2_test.md",
	"scenes/act3.md",
	"scenes/act4.md",
	"scenes/credits.md"
	
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

	$("#gear").style.display = "block";
	$("#about").style.display = "block";

	// Act 2
	_ = {"CHAPTER":1,"attack_harm_ch1":3,"attack_alone_ch1":2,"attack_bad_ch1":1,"whitebread":true,"partyinvite":"ignore","subtweet":true,"serialkiller":true,"act1g":"dont","act1_ending":"flight","INTERMISSION_STAGE":1};
	Game.goto("act2");
	//Game.goto("act4");
	
	//Game.goto("intro");

});

window._SAVE = function(){
	copy(JSON.stringify(_));
};
