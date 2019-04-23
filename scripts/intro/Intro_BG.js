Loader.addImages([
	{ id:"intro_logo", src:"sprites/intro/intro_logo.png" },
	{ id:"intro_bg", src:"sprites/intro/intro_bg.png" },
	{ id:"intro_anim", src:"sprites/intro/intro_anim.png" }
]);

function BG_Intro(){

	var self = this;

	// Sprites!
	self.logoSprite = new Sprite({
		image: Library.images.intro_logo,
		grid:{ width:1, height:1 },
		frame:{ width:720, height:900 },
	});
	var spriteConfig = {
		image: Library.images.intro_bg,
		grid:{
			width: 2,
			height: 3
		},
		frame:{
			width: 1200,
			height: 900
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
		20,
		0,
		20
	]

	var ticker = 0; //16;//0;
	var frameTicker = ticker;
	var parallaxTicker = 0;
	var SHOWN_PLAY_BUTTON = false;
	var SHOWN_LOGO = false;
	self.draw = function(ctx){

		// TICKER
		ticker += 1/60;

		/*if(Math.random()<0.01){
			Library.sounds.test.play();
		}*/

		// CLOUD OFFSET
		OFFSETS[1] = -80 + ticker*3;

		// Animate Hong: Which frame?
		var parallax = 0;
		frameTicker += 1/60;
		if(GAME_TRANSITION==0 || GAME_TRANSITION==1){ 
			if(frameTicker>590/30){
				if(GAME_TRANSITION==0) frameTicker = 381/30; // LOOP to NOM.
				if(GAME_TRANSITION==1) frameTicker = 590/30; // STOP.
			}
		}
		if(GAME_TRANSITION==2){
			
			parallaxTicker += 1/60; // 0 to 1 in one second
			if(parallaxTicker>1) parallaxTicker = 1;
			self.layers[5].alpha = parallaxTicker; // blackout alpha

			// 0 to -180 in one second, smoothed
			var t = Math.cos(parallaxTicker*Math.TAU/2); // 1 to -1
			t = (1-t)/2; // 0 to 1
			parallax = -t*215;

		}

		// Hong frame
		var frame = findFrameOnTicker(frameTicker);
		hongSprite.gotoFrame(frame);
		
		// Draw all!
		for(var i=0; i<self.layers.length; i++){
			var layer = self.layers[i];
			layer.x = PARALLAXES[i] * parallax - OFFSETS[i];
			layer.draw(ctx);
		}
		if(!SHOWN_LOGO && ticker>=530/30){
			SHOWN_LOGO = true;
		}
		if(GAME_TRANSITION==0 && SHOWN_LOGO){
			self.logoSprite.draw(ctx);
		}

		// Show Play Button
		if(!SHOWN_PLAY_BUTTON && ticker>=590/30){
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
			GAME_TRANSITION = 1; // STOP LOOPING
		})
	);
	_subscriptions.push(
		subscribe("intro-to-game-2", function(){
			frameTicker = 600/30;
			GAME_TRANSITION = 2; // START PARALLAXING
		})
	);

	//////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////

	// ANIMATE HONG, THE FRAMES!

	var HONG_FRAMES = [
		"0-0",
		"1-59",
		"2-79",
		"3-99",
		"4-119",
		"5-139",
		"6-199",
		"7-234",
		"8-244",
		"9-254",
		"8-264",
		"9-274",
		"10-299",
		"11-336",
		"12-346",
		"13-381",
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
		return [parseInt(f[0]), parseInt(f[1])/30];
	});
	var findFrameOnTicker = function(ticker){
		var lastFrame;
		for(var i=0; i<HONG_FRAMES.length; i++){
			var f = HONG_FRAMES[i];
			if(f[1]<=ticker){
				lastFrame = f[0];
			}
		}
		return lastFrame;
	};

	//////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////

	// Kill!
	self.kill = function(){
		_subscriptions.forEach(unsubscribe);
	};


}