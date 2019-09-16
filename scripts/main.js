// Load assets
Loader.addScenes([

	//"scenes/PROMO.md",
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

	// Intro
	Game.goto("intro");

	//Game.TEXT_SPEED = 5;

	// Act 2
	//_ = {"CHAPTER":2,"attack_harm_ch1":2,"attack_alone_ch1":2,"attack_bad_ch1":2,"parasite":true,"partyinvite":"no","badnews":true,"factcheck":true,"hookuphole":true,"act1g":"go","act1_ending":"flight","INTERMISSION_STAGE":1,"attack_harm_ch2":0,"attack_alone_ch2":0,"attack_bad_ch2":0}
	//Game.goto("act2");

	// Act 3
	//_ = {"CHAPTER":3,"attack_harm_ch1":2,"attack_alone_ch1":2,"attack_bad_ch1":2,"parasite":true,"partyinvite":"no","badnews":true,"factcheck":true,"hookuphole":true,"act1g":"go","act1_ending":"fight","INTERMISSION_STAGE":2,"attack_harm_ch2":1,"attack_alone_ch2":0,"attack_bad_ch2":5,"a2_first_danger":"meaning","a2_attack_1":"bad","a2_first_choice":"different","a2_second_danger":"hitler","a2_attack_2":"bad","a2_hoodie_callback":"Hitler","a2_attack_3":"bad","SPECIAL_ATTACK":"bad","a2_ending":"fight"};
	//Game.goto("act3");

	// Act 4
	//_ = {"CHAPTER":4,"attack_harm_ch1":2,"attack_alone_ch1":2,"attack_bad_ch1":2,"parasite":true,"partyinvite":"no","badnews":true,"factcheck":true,"hookuphole":true,"act1g":"go","act1_ending":"fight","INTERMISSION_STAGE":2,"attack_harm_ch2":1,"attack_alone_ch2":0,"attack_bad_ch2":5,"a2_first_danger":"meaning","a2_attack_1":"bad","a2_first_choice":"different","a2_second_danger":"hitler","a2_attack_2":"bad","a2_hoodie_callback":"Hitler","a2_attack_3":"bad","SPECIAL_ATTACK":"alone","a2_ending":"fight","act3_bb_body":4,"a3_ending":"jump","INJURED":true,"attack_harm_total":3,"attack_alone_total":2,"attack_bad_total":7,"TOP_FEAR":"bad"}
	//Game.goto("act4");

	// Credits
	//Game.goto("credits");

});

subscribe("SAVE_GAME", function(nextChapter){
	var json = JSON.stringify(_);
	window.localStorage.setItem("continueChapter", nextChapter); // to Continue
	window.localStorage.setItem(nextChapter, json); // for chapter select
});

subscribe("LOAD_GAME", function(fromNextChapter){
	_ = JSON.parse(window.localStorage.getItem(fromNextChapter)); // LOAD IT!
});

// TODO: also save Sound options???

window._SAVE = function(){
	copy(JSON.stringify(_));
};
