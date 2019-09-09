Loader.addImages([
	{ id:"act1_end", src:"sprites/act1/act1_end.png" }
]);

Loader.addSounds([

	{ id:"pop", src:"sounds/sfx/pop.mp3" },
	{ id:"bounce1", src:"sounds/sfx/bounce1.mp3" },
	{ id:"bounce2", src:"sounds/sfx/bounce2.mp3" },
	{ id:"bounce3", src:"sounds/sfx/bounce3.mp3" },
	{ id:"faucet", src:"sounds/sfx/faucet.mp3" },

	{ id:"dirty_explosion", src:"sounds/sfx/dirty_explosion.mp3" },
	{ id:"rustle", src:"sounds/sfx/rustle.mp3" },
	{ id:"rustle2", src:"sounds/sfx/rustle2.mp3" },
	{ id:"act1_scream", src:"sounds/sfx/act1_scream.mp3" }

]);

function BG_Act1_Outro(){

	var self = this;

	// Sprites!
	var spriteConfig = {
		image: Library.images.intro_bg,
		grid:{
			width: 2,
			height: 3
		},
		frame:{
			width: 1200,
			height: 1200
		},
		anchor:{
			x: 0,
			y: 0
		},
		frameNames:[
			"sky",
			"clouds",
			"buildings",
			"grass",
			"stump",
			"blackout"
		],
		x: 0,
		y: 0
	};
	self.layers = [];
	["sky","clouds","buildings","grass","stump","blackout"].forEach(function(layerName){
		var sprite = new Sprite(spriteConfig);
		sprite.gotoFrameByName(layerName);
		self.layers.push(sprite);
	});

	// HONG
	var hongSpriteConfig = {
		image: Library.images.act1_end,
		grid:{
			width: 4,
			height: 12
		},
		frame:{
			width: 1100,
			height: 480
		},
		anchor:{
			x: 560/2,
			y: 370/2
		},
		x: 560/2,
		y: 370/2
	};
	var craterSprite = new Sprite(hongSpriteConfig);
	self.layers.push(craterSprite);
	var hongSprite = new Sprite(hongSpriteConfig);
	self.layers.push(hongSprite);

	// DRAW
	var BG_WIDTH = 360;
	var BG_HEIGHT = 450;
	var PARALLAXES = [
		0, // sky
		0.1, // clouds
		0.25, // buildings
		0.48, // grass
		1.0, // stump
		0, // blackout
		1.0, // crater
		1.0, // HONG
	];
	var OFFSETS = [
		0,
		0, // clouds
		0,
		0,
		20,
		0,
		20,
		20
	];

	////////////////////////////////
	// WHICH ANIM CYCLE TO USE? ////
	////////////////////////////////

	var ANIM_TO_USE = _.act1_ending || "fight";


	var ticker = 0;
	var frameTicker = ticker;
	var parallaxTicker = 1;
	var thePreviousFrame = -1;

	self.draw = function(ctx, delta){

		// TICKER
		ticker += delta;

		// CLOUD OFFSET
		OFFSETS[1] = -80 + ticker*3;

		// PARALLAX
		var parallax = 0;
		if(GAME_TRANSITION==0){

			parallaxTicker -= 2*delta; // 1 to 0 in 1/2 second
			
			if(parallaxTicker<0) parallaxTicker = 0;
			self.layers[5].alpha = parallaxTicker; // blackout alpha

			// 0 to -180 in one second, smoothed
			var t = Math.cos(parallaxTicker*Math.TAU/2); // 1 to -1
			t = (1-t)/2; // 0 to 1
			parallax = -t*215;

		}

		// Smoking crater & Hong frame
		frameTicker += delta;
		var results;
		if(ANIM_TO_USE == "fight"){
			
			results = findOnTicker(SMOKING_CRATER, frameTicker);
			craterSprite.gotoFrame(results.frame);

			// Hong's frame
			results = findOnTicker(HONG_FRAMES_FIGHT, frameTicker);

		}else{
			craterSprite.visible = false;

			// Hong's frame
			results = findOnTicker(HONG_FRAMES_FLIGHT, frameTicker);
		}

		// Is Hong on a new frame?
		thePreviousFrame = hongSprite.currentFrame;
		var isNewFrame = (thePreviousFrame!=results.frame);
		hongSprite.gotoFrame(results.frame);

		// SFX if new frame
		if(isNewFrame && results.sfx){
			sfx(results.sfx, {volume: results.sfxVolume} );
		}

		// If pre frameTicker=90/30, Hong is shaking like Beebee!
		if(frameTicker<90/30){
			hongSprite.squash = 1 + Math.sin(ticker*Math.TAU*7)*0.01; // seven vibes per second
		}else{
			hongSprite.squash = 1;
		}
		
		// Draw all!
		for(var i=0; i<self.layers.length; i++){
			var layer = self.layers[i];
			layer.x = PARALLAXES[i] * parallax - OFFSETS[i];
			if(i>=6){ // the HONG & SMOKING layer
				layer.x += 560/2 + 20; // Hack, don't know why.
				layer.y = 210 + 370/2;
			}
			layer.draw(ctx);
		}
		
		// NEXT SCENE?
		if(frameTicker>=320/30){
			_.INTERMISSION_STAGE = 1;
			Game.goto("intermission");
		}

	};

	var GAME_TRANSITION = 0;

	//////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////

	// Find it!
	/*var findFrameOnTicker = function(frameArray, ticker){
		var lastFrame;
		for(var i=0; i<frameArray.length; i++){
			var f = frameArray[i];
			if(f[1]<=ticker) lastFrame = f[0];
		}
		return lastFrame;
	};*/
	var findOnTicker = function(frameArray, ticker){
		var lastConfig;
		for(var i=0; i<frameArray.length; i++){
			var f = frameArray[i];
			if(f[1]<=ticker){
				lastConfig = f;
			}
		}
		return {
			frame: lastConfig[0],
			sfx: lastConfig[2],
			sfxVolume: lastConfig[3]
		};
	};
	var convertFrames = function(frameArray){
		return frameArray.map(function(frame){

			var f = frame.split("-");
			var frame = parseInt(f[0])-1; // subtract 1 from frame
			var ticker = parseInt(f[1])/30; // convert to seconds
			var sfx = f[2] ? f[2] : null;
			var sfxVolume = f[3] ? f[3] : 1;
			return [frame, ticker, sfx, sfxVolume];

		});
	};
	var addLoop = function(frameArray, startF, startS, frameLength, interval){
		var f = startF-1;
		var s = startS/30;
		var frameStart = f;
		for(var i=0; i<200; i++){ // 200 just in case
			frameArray.push([f,s]);
			f = ((f-frameStart)+1)%frameLength + frameStart; // swap frame
			s += interval/30;
		}
	};

	//////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////

	// ANIMATE HONG, THE FRAMES!

	var HONG_FRAMES_FIGHT = [
		"1-0",
		"2-3",
		"3-5",
		"4-7",
		"30-90-act1_scream",
		"31-150-rustle",
		"32-165-dirty_explosion", // TODO? parallax shake?
		"33-167",
		"34-169",
		"35-172",
		"36-175",
		"37-200",
		"38-215",
		//"37-200", // LOOP every 15
	];
	HONG_FRAMES_FIGHT = convertFrames(HONG_FRAMES_FIGHT);
	addLoop(HONG_FRAMES_FIGHT, 37, 215+15, 2, 15); // add in the loop

	var HONG_FRAMES_FLIGHT = [
		"1-0",
		"2-3",
		"3-5",
		"4-7",
		"5-90-pop",
		"6-120",
		"7-122-bounce1",
		"8-124",
		"9-126",
		"10-129",
		"11-132",
		"12-134",
		"13-136-bounce2",
		"14-138",
		"15-140",
		"16-143-bounce3",
		"17-145",
		"18-147",
		"19-149",
		"20-151",

		"21-153",
		"22-155",
		"23-157",
		"21-159",
		"22-161",
		"23-163",
		"21-165",
		"22-167",
		"23-169",
		"21-171",
		"22-173",
		"23-175",
		"21-177",
		"22-179",
		"23-181",

		"24-183-faucet-0.8",
		"25-185",
		"26-187",

		"27-189",
		"28-191",
		"29-193"
	];
	HONG_FRAMES_FLIGHT = convertFrames(HONG_FRAMES_FLIGHT);
	addLoop(HONG_FRAMES_FLIGHT, 27, 193+2, 3, 2); // add in the loop

	var SMOKING_CRATER = [
		"46-0", // BLANK
		"39-165", // BAM
		"40-167",
		"41-172", 
		"42-177",
		"43-182",
		"44-187"
	];
	SMOKING_CRATER = convertFrames(SMOKING_CRATER);
	addLoop(SMOKING_CRATER, 40, 187+5, 5, 5); // add in loop

	//////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////

	// Kill!
	_subscriptions = [];
	self.kill = function(){
		_subscriptions.forEach(unsubscribe);
	};


}