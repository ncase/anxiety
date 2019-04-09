Loader.addImages([
	{ id:"intro_bg", src:"sprites/intro/intro_bg.png" },
	{ id:"intro_anim", src:"sprites/intro/intro_anim.png" }
]);

function BG_Intro(){

	var self = this;

	// Sprite!
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
			"bag"
		],
		x: 0,
		y: 0
	};
	self.layers = [];
	["sky","clouds","buildings","grass","stump"].forEach(function(layerName){
		var sprite = new Sprite(spriteConfig);
		sprite.gotoFrameByName(layerName);
		self.layers.push(sprite);
	});

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
		0.5, // grass
		1.0, // stump
		1.0, // HONG
	];
	var OFFSETS = [
		0,
		0, // clouds
		0,
		0,
		20,
		20
	]
	// TODO: CLOUDS MOVE BY SELF
	var ticker = 0;
	self.draw = function(ctx){

		var parallax = 0; //= -(1+Math.sin(ticker))*90;
		ticker += 1/60;

		// CLOUD OFFSET
		OFFSETS[1] = -80 + ticker*3

		for(var i=0; i<self.layers.length; i++){
			var layer = self.layers[i];
			layer.x = PARALLAXES[i] * parallax - OFFSETS[i];
			layer.draw(ctx);
		}

		// Animate Hong
		var frame = findFrameOnTicker(ticker);
		hongSprite.gotoFrame(frame);

	};

	////////////////////////////////////////////////////////

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
		"16-470"
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


}