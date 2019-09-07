Loader.addSounds([
	{ id:"music_dontfight", src:"sounds/music/uplifting_pog_MIX.mp3" }
]);

SceneSetup.act4 = function(){

	// HI TABS
	publish("show_tabs");

	Game.resetScene();

	// RESET HP
	HP.reset();

	// ATTACKS
	_.CHAPTER = 4;
	
	_.attack_harm_ch1 = (_.attack_harm_ch1==undefined) ? 0 : _.attack_harm_ch1;
	_.attack_alone_ch1 = (_.attack_alone_ch1==undefined) ? 0 : _.attack_alone_ch1;
	_.attack_bad_ch1 = (_.attack_bad_ch1==undefined) ? 0 : _.attack_bad_ch1;
	
	_.attack_harm_ch2 = (_.attack_harm_ch2==undefined) ? 0 : _.attack_harm_ch2;
	_.attack_alone_ch2 = (_.attack_alone_ch2==undefined) ? 0 : _.attack_alone_ch2;
	_.attack_bad_ch2 = (_.attack_bad_ch2==undefined) ? 0 : _.attack_bad_ch2;

	_.attack_harm_total = _.attack_harm_ch1 + _.attack_harm_ch2;
	_.attack_alone_total = _.attack_alone_ch1 + _.attack_alone_ch2;
	_.attack_bad_total = _.attack_bad_ch1 + _.attack_bad_ch2;

	// DECIDE TOP FEAR (if it's a tie, use first fear. if it's still neither, random)
	var fears = [
		{name:"harm", count:_.attack_harm_total},
		{name:"alone", count:_.attack_alone_total},
		{name:"bad", count:_.attack_bad_total}
	];
	fears = fears.sort(function(a,b){
		return b.count - a.count;
	});
	_.TOP_FEAR = fears[0].name;
	
	// Music
	music('campus', {volume:0.5});

	// Background
	var bg = new BG_Act4();
	Game.scene.children.push(bg);

	// Hong
	/*var hong = new Act1_Hong();
	Game.scene.children.push(hong);

	// Beebee
	var beebee = new Act1_Beebee();
	Game.scene.children.push(beebee);*/

};