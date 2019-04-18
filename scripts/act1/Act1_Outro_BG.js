Loader.addImages([
	{ id:"act1_end", src:"sprites/act1/act1_end.png" }
]);

function BG_Act1_Outro(){

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

	self.draw = function(ctx){

		// TICKER
		ticker += 1/60;

		// CLOUD OFFSET
		OFFSETS[1] = -80 + ticker*3;

		// PARALLAX
		var parallax = 0;
		if(GAME_TRANSITION==0){

			parallaxTicker -= 2/60; // 1 to 0 in 1/2 second
			
			if(parallaxTicker<0) parallaxTicker = 0;
			self.layers[5].alpha = parallaxTicker; // blackout alpha

			// 0 to -180 in one second, smoothed
			var t = Math.cos(parallaxTicker*Math.TAU/2); // 1 to -1
			t = (1-t)/2; // 0 to 1
			parallax = -t*215;

		}

		// Smoking crater & Hong frame
		frameTicker += 1/60;
		if(ANIM_TO_USE == "fight"){
			
			var frame = findFrameOnTicker(SMOKING_CRATER, frameTicker);
			craterSprite.gotoFrame(frame);
			var frame = findFrameOnTicker(HONG_FRAMES_FIGHT, frameTicker);
			hongSprite.gotoFrame(frame);

		}else{

			craterSprite.visible = false;
			var frame = findFrameOnTicker(HONG_FRAMES_FLIGHT, frameTicker);
			hongSprite.gotoFrame(frame);

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
		/*if(frame==26){
			Game.goto("act1");
		}*/

	};

	var GAME_TRANSITION = 0;

	//////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////

	// Find it!
	var findFrameOnTicker = function(frameArray, ticker){
		var lastFrame;
		for(var i=0; i<frameArray.length; i++){
			var f = frameArray[i];
			if(f[1]<=ticker) lastFrame = f[0];
		}
		return lastFrame;
	};
	var convertFrames = function(frameArray){
		return frameArray.map(function(frame){
			var f = frame.split("-");
			return [parseInt(f[0])-1, parseInt(f[1])/30]; // subtract 1 from frame, convert to seconds
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
		"30-90",
		"31-120",
		"32-135",
		"33-137",
		"34-139",
		"35-142",
		"36-145",
		"37-170",
		"38-185",
		//"37-200", // LOOP every 15
	];
	HONG_FRAMES_FIGHT = convertFrames(HONG_FRAMES_FIGHT);
	addLoop(HONG_FRAMES_FIGHT, 37, 185+15, 2, 15); // add in the loop

	var HONG_FRAMES_FLIGHT = [
		"1-0",
		"2-3",
		"3-5",
		"4-7",
		"5-90",
		"6-120",
		"7-122",
		"8-124",
		"9-126",
		"10-129",
		"11-132",
		"12-134",
		"13-136",
		"14-138",
		"15-140",
		"16-143",
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

		"24-183",
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
		"39-135", // BAM
		"40-137",
		"41-142", 
		"42-147",
		"43-152",
		"44-157"
	];
	SMOKING_CRATER = convertFrames(SMOKING_CRATER);
	addLoop(SMOKING_CRATER, 40, 157+5, 5, 5); // add in loop

	//////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////

	// Kill!
	self.kill = function(){
		_subscriptions.forEach(unsubscribe);
	};


}