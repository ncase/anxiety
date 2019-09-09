Loader.addImages([
	{ id:"intro_logo", src:"sprites/intro/intro_logo.png" },
	{ id:"intro_bg", src:"sprites/intro/intro_bg.png" },
	{ id:"intro_anim", src:"sprites/intro/intro_anim.png" }
]);

Loader.addSounds([
	
	{ id:"whoosh", src:"sounds/sfx/whoosh.mp3" },
	{ id:"intro_scream", src:"sounds/sfx/intro_scream.mp3" },

	{ id:"grass_step1", src:"sounds/sfx/grass_step1.mp3" },
	{ id:"grass_step2", src:"sounds/sfx/grass_step2.mp3" },
	{ id:"bag_short", src:"sounds/sfx/bag_short.mp3" },
	{ id:"bag_search", src:"sounds/sfx/bag_search.mp3" },
	{ id:"bag_kick", src:"sounds/sfx/bag_kick.mp3" },
	{ id:"sandwich", src:"sounds/sfx/sandwich.mp3" },

	{ id:"laugh", src:"sounds/sfx/laugh.mp3" },

]);

function BG_Intro(){
	
	var ticker = 0; // 18; // SKIP

	var self = this;

	// Sprites!
	var LOGO_SPRITE = {
		image: Library.images.intro_logo,
		grid:{ width:2, height:1 },
		frame:{ width:720, height:900 },
	};
	self.logoSprite = new Sprite(LOGO_SPRITE);
	self.infoSprite = new Sprite(LOGO_SPRITE);
	self.infoSprite.gotoFrame(1);
	self.infoSprite.alpha = 0;

	var spriteConfig = {
		image: Library.images.intro_bg,
		grid:{ width:2, height:3 },
		frame:{ width:1200, height:1200 },
		anchor:{ x:0, y:0 },
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
	self.layers[5].alpha = 0; // blackout alpha is ZERO at start.

	// HONG
	var hongSpriteConfig = {
		image: Library.images.intro_anim,
		grid:{
			width: 4,
			height: 7
		},
		frame:{
			width: 1200,
			height: 900
		},
		anchor:{
			x: 0,
			y: 0
		},
		x: 0,
		y: 0
	};
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
		1.0, // HONG
	];
	var OFFSETS = [
		0,
		0, // clouds
		0,
		0,
		20, // stump
		0,
		20
	]

	var frameTicker = ticker;
	var parallaxTicker = 0;
	var SHOWN_PLAY_BUTTON = false;
	var SHOWN_LOGO = false;
	var tickerSinceShown = 0;
	var thePreviousFrame;
	self.draw = function(ctx, DELTA){

		// TICKER
		ticker += DELTA;

		// CLOUD OFFSET
		OFFSETS[1] = -80 + ticker*3;

		// Animate Hong: Which frame?
		var parallax = 0;
		frameTicker += DELTA;
		if(GAME_TRANSITION==0 || GAME_TRANSITION==1 || GAME_TRANSITION==2){ 
			if(frameTicker>590/30){
				if(GAME_TRANSITION==0){
					frameTicker = 381/30; // LOOP to NOM.
				}
				if(GAME_TRANSITION==1 || GAME_TRANSITION==2){ // actually ew nah stop it
					frameTicker = 590/30; // STOP.
				}
			}
		}
		if(GAME_TRANSITION==3){ // START PARALLAXING
			
			parallaxTicker += DELTA; // 0 to 1 in one second
			if(parallaxTicker>1) parallaxTicker = 1;
			self.layers[5].alpha = parallaxTicker; // blackout alpha

			// 0 to -180 in one second, smoothed
			var t = Math.cos(parallaxTicker*Math.TAU/2); // 1 to -1
			t = (1-t)/2; // 0 to 1
			parallax = -t*215;

		}

		// Find... on ticker!
		var results = findOnTicker(frameTicker);

		// Frame, new frame?
		var frame = results.frame;
		thePreviousFrame = hongSprite.currentFrame;
		var isNewFrame = (thePreviousFrame!=frame);
		hongSprite.gotoFrame(frame);

		// SFX if new frame
		if(isNewFrame && results.sfx){
			sfx(results.sfx, {volume: results.sfxVolume} );
		}
		
		// Draw all!
		for(var i=0; i<self.layers.length; i++){
			var layer = self.layers[i];
			layer.x = PARALLAXES[i] * parallax - OFFSETS[i];
			layer.draw(ctx);
		}
		if(!SHOWN_LOGO && ticker>=530/30){
			SHOWN_LOGO = true;
			sfx("intro_scream", {volume:0.7});
		}
		if(GAME_TRANSITION==0 && SHOWN_LOGO){
			self.logoSprite.draw(ctx);
			self.infoSprite.draw(ctx);
		}
		if(SHOWN_LOGO){
			tickerSinceShown += DELTA;
			if(tickerSinceShown>1.5){
				self.infoSprite.alpha = Math.min(1, tickerSinceShown-1.5);
			}
		}

		// Show Play Button
		if(!SHOWN_PLAY_BUTTON && ticker>=645/30){
			SHOWN_PLAY_BUTTON = true;
			Game.goto("intro-play-button");
		}

		// NEXT SCENE?
		if(frame==26){
			Game.goto("act1");
		}

	};

	var GAME_TRANSITION = 0;
	var _subscriptions = [];
	_subscriptions.push(
		subscribe("intro-to-game-1", function(){
			GAME_TRANSITION = 1; // BYE LOGO
		})
	);
	_subscriptions.push(
		subscribe("intro-to-game-2", function(){
			GAME_TRANSITION = 2; // STOP LOOPING
		})
	);
	_subscriptions.push(
		subscribe("intro-to-game-3", function(){
			frameTicker = 600/30;
			GAME_TRANSITION = 3; // START PARALLAXING

			// WHOOSH
			sfx("whoosh");
			
			// Music
			music("hum", {fade:2, volume:0.6});

		})
	);
	_subscriptions.push(
		subscribe("super_hack_skip_intro", function(){
			if(ticker>0.1 && ticker<18){
				frameTicker = ticker = 18;
			}
		})
	);

	//////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////

	// ANIMATE HONG, THE FRAMES!

	var HONG_FRAMES = [
		"0-0",
		"1-59-grass_step1-0.1",
		"2-79-grass_step2-0.2",
		"3-99-grass_step1-0.25",
		"4-119-grass_step2-0.3",
		"5-139-grass_step1-0.35",
		"6-199-bag_short",
		"7-234-bag_search",
		"8-244",
		"9-254",
		"8-264",
		"9-274",
		"10-299-bag_short",
		"11-336-bag_kick",
		"12-346",
		"13-381-sandwich",
		"14-400",
		"15-410",
		"14-420",
		"15-430",
		"14-440",
		"15-450",
		"16-470",

		"17-600",
		"18-603",
		"19-606",
		"20-609",
		"21-612",
		"22-615",
		"23-618",
		"24-621",
		"25-624",
		"26-627"
	];
	HONG_FRAMES = HONG_FRAMES.map(function(frame){
		var f = frame.split("-");
		var frame = parseInt(f[0]);
		var ticker = parseInt(f[1])/30;
		var sfx = f[2] ? f[2] : null;
		var sfxVolume = f[3] ? f[3] : 1;
		return [frame, ticker, sfx, sfxVolume];
	});
	var findOnTicker = function(ticker){
		var lastConfig;
		for(var i=0; i<HONG_FRAMES.length; i++){
			var f = HONG_FRAMES[i];
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

	//////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////

	// Kill!
	self.kill = function(){
		_subscriptions.forEach(unsubscribe);
	};


}