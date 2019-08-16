// Load assets
Loader.addScenes([

	"scenes/intro.md",
	"scenes/act1.md",
	"scenes/intermission.md",
	"scenes/act2.md",
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

	Game.TEXT_SPEED = 5;

	// Act 2
	//_ = {"CHAPTER":1,"attack_harm_ch1":3,"attack_alone_ch1":2,"attack_bad_ch1":1,"whitebread":true,"partyinvite":"ignore","subtweet":true,"serialkiller":true,"act1g":"dont","badnews":true,"factcheck":false,"act1_ending":"flight","INTERMISSION_STAGE":1};
	//Game.goto("act2");

	// Act 3
	//_ = {"CHAPTER":2,"attack_harm_ch1":3,"attack_alone_ch1":2,"attack_bad_ch1":1,"whitebread":true,"partyinvite":"ignore","subtweet":true,"serialkiller":true,"act1g":"dont","badnews":true,"factcheck":false,"act1_ending":"flight","INTERMISSION_STAGE":2,"attack_harm_ch2":2,"attack_alone_ch2":1,"attack_bad_ch2":3,"a2_first_danger":"social","a2_attack_1":"alone","a2_first_choice":"ignore","a2_second_danger":"ignore","a2_attack_2":"harm","a2_attack_3":"harm","SPECIAL_ATTACK":"bad","a2_ending":"fight"};
	//Game.goto("act3");

	// Act 4
	_ = {"CHAPTER":3,"attack_harm_ch1":3,"attack_alone_ch1":2,"attack_bad_ch1":1,"whitebread":true,"partyinvite":"ignore","subtweet":true,"serialkiller":true,"act1g":"dont","badnews":true,"factcheck":false,"act1_ending":"flight","INTERMISSION_STAGE":2,"attack_harm_ch2":2,"attack_alone_ch2":1,"attack_bad_ch2":3,"a2_first_danger":"social","a2_attack_1":"alone","a2_first_choice":"ignore","a2_second_danger":"ignore","a2_attack_2":"harm","a2_attack_3":"harm","SPECIAL_ATTACK":"alone","a2_ending":"fight","act3_bb_body":4,"a3_ending":"walkaway","INJURED":true};
	Game.goto("act4");
	
	//Game.goto("intro");

});

window._SAVE = function(){
	copy(JSON.stringify(_));
};
