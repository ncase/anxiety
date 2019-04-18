Loader.addImages([
	{ id:"act1_beebee", src:"sprites/act1/act1_beebee.png" }
]);

function Act1_Beebee(){

	var self = this;

	// SPRITE CONFIG!
	var spriteConfig = {
		image: Library.images.act1_beebee,
		grid:{
			width: 4,
			height: 8
		},
		frame:{
			width: 720,
			height: 500
		},
		anchor:{
			x: 546/2,
			y: 400/2
		},
		frameNames:[
			
			"body_normal",
			"body_fear",
			"body_point_crotch",
			"body_point_heart",
			"body_point_sing",

			"mouth_normal",
			"mouth_normal_talk",
			"mouth_small",
			"mouth_small_talk",

			"eyes_normal",
			"eyes_normal_right",
			"eyes_uncertain",
			"eyes_uncertain_right",
			"eyes_narrow",
			"eyes_narrow_eyebrow",
			"eyes_fear",
			"eyes_pretty",
			"eyes_wat",

			"body_panic*",
			"body_panic_2*",
			"body_scream_anger*",
			"body_scream_anger_2*",
			"body_scream*",
			"body_scream_2*",

			"body_flail*",
			"body_flail2*",
			"body_flail3*",
			"body_flail4*",

			// TODO: SMILE! "That's me!"

		],
		x: 270-7.5,
		y: 390+4.5
	};

	// ANIM LOOPS
	var animLoops = [
		{ target:"body", ifOnFrame:"flail*", wait:0.05, thenGoToFrame:"flail2*" },
		{ target:"body", ifOnFrame:"flail2*", wait:0.05, thenGoToFrame:"flail3*" },
		{ target:"body", ifOnFrame:"flail3*", wait:0.05, thenGoToFrame:"flail4*" },
		{ target:"body", ifOnFrame:"flail4*", wait:0.05, thenGoToFrame:"flail*" }
	];

	// Inherit from Character!
	Character.apply(self, [spriteConfig, animLoops]);

	// Go To Frames!
	self.gotoFrames({
		body: "normal",
		mouth: "small",
		eyes: "wat",
	});
	var _subscriptions = [];
	_subscriptions.push( subscribe("bb", self.gotoFrames) );

	// Draw! Same as earlier except a lot of vibration
	var ticker = 0;
	var _oldDraw = self.draw;
	self.characterSpeakerID = "b";
	self.bounceHookes = 0.25; // loose
	self.bounceDamp = 0.9; // loose
	self.draw = function(ctx){

		// Vibration!
		ticker += 1/60;
		self.characterSquash = 1 + Math.sin(ticker*Math.TAU*7)*0.01; // seven vibes per second

		// Old Draw
		_oldDraw.apply(self, arguments);

	};
	
	/*
	self.body = new Sprite(spriteConfig);
	self.head = new Sprite(spriteConfig);
	self.eyes = new Sprite(spriteConfig);

	self.gotoFrames = function(bodyName, headName, eyesName){

		// Body
		bodyName = "body_"+bodyName;
		self.body.gotoFrameByName(bodyName);

		// Head
		headName = headName ? "head_"+headName : "blank";
		self.head.gotoFrameByName(headName); // TODO: DON'T RESET MOUTH

		// Eyes
		eyesName = eyesName ? "eyes_"+eyesName : "blank";
		self.eyes.gotoFrameByName(eyesName);

	};

	self.gotoFrames("normal", "normal", "normal");

	subscribe("bb", function(bodyName, headName, eyesName){
		self.gotoFrames(bodyName, headName, eyesName);
	});

	// First frame
	// self.sprite.gotoFrameByName("normal");

	// Draw
	var ticker = 0;
	self.draw = function(ctx){

		self.body.update();
		self.head.update();
		self.eyes.update();

		self.body.draw(ctx);
		self.head.draw(ctx);
		self.eyes.draw(ctx);

		// TALKING
		if(self.body.currentFrameName=="body_normal" || self.body.currentFrameName=="body_fear"){
			if(Game.WHO_IS_SPEAKING=="b"){

				if(ticker<=0){
					if(self.head.currentFrameName=="head_normal") self.head.gotoFrameByName("head_normal_2");
					else if(self.head.currentFrameName=="head_normal_2") self.head.gotoFrameByName("head_normal");
					ticker = 10;
				}
				
				ticker -= (Game.TEXT_SPEED/40) * Game.CURRENT_SPEAKING_SPEED;

			}else{
				if(self.head.currentFrameName=="head_normal_2") self.head.gotoFrameByName("head_normal");
				ticker = 0;
			}
			if(self.head.currentFrameName=="head_normal_2"){
				self.eyes.x = 270+1;
				self.eyes.y = 390-2;
			}else{
				self.eyes.x = 270;
				self.eyes.y = 390;
			}
		}

		// PANICKING
		if(self.body.currentFrameName=="body_panic" || self.body.currentFrameName=="body_panic_2"){

			if(ticker<=0){
				if(self.body.currentFrameName=="body_panic") self.body.gotoFrameByName("body_panic_2");
				else if(self.body.currentFrameName=="body_panic_2") self.body.gotoFrameByName("body_panic");
				ticker = 4;
			}

			ticker -= 1;

		}

		// SHIVERING
		self.body.breatheSpeed = 0.8;
		self.body.breatheAmp = 0.01;
		self.head.breatheSpeed = 0.8;
		self.head.breatheAmp = 0.01;
		self.eyes.breatheSpeed = 0.8;
		self.eyes.breatheAmp = 0.01;

		/*
		// Normal: Breathe fast!
		if(fname.substr(0,6) == "normal"){
			self.sprite.breatheSpeed = 0.8;
			self.sprite.breatheAmp = 0.01;
		}

		// Scream: Loop between scream 1/2!
		if(fname.substr(0,6) == "scream"){
			self.sprite.breatheSpeed = 0;
			self.sprite.breatheAmp = 0;
			if(ticker<=0){
				ticker=5;
				if(fname=="scream") self.sprite.gotoFrameByName("scream_2");
				if(fname=="scream_2") self.sprite.gotoFrameByName("scream");
			}else{
				ticker--;
			}
		}

		// Draw me!
		self.sprite.draw(ctx);

	};

	// When going to frames...
	subscribe("beebee", function(fname){

		/*self.sprite.gotoFrameByName(fname);

		// Bounce transition
		if(fname=="normal_speak"){
			self.sprite.bounce = 1.1;
		}
		if(fname=="scream"){
			self.sprite.bounce = 1.6;
		}

	});

	// Kill
	self.kill = function(){
	};*/

	//////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////

	// Kill!
	self.kill = function(){
		_subscriptions.forEach(unsubscribe);
	};

}