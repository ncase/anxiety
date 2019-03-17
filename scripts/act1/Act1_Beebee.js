function Act1_Beebee(){

	var self = this;

	// Sprite!
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

			"head_normal",
			"head_normal_2",
			"head_small",
			"head_small_2",

			"eyes_normal",
			"eyes_normal_right",
			"eyes_uncertain",
			"eyes_uncertain_right",
			"eyes_narrow",
			"eyes_narrow_eyebrow",
			"eyes_fear",
			"eyes_pretty",
			"eyes_wat",

			"blank",

			"body_panic",
			"body_panic_2",
			"body_scream_anger",
			"body_scream_anger_2",
			"body_scream",
			"body_scream_2",

			"body_flail",
			"body_flail_2",
			"body_flail_3",
			"body_flail_4",

		],
		x: 270,
		y: 390
	};

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

	/**

	bb("point_heart", "normal_talk", "pretty")

	**/

	// First frame
	// self.sprite.gotoFrameByName("normal");

	// Draw
	var ticker = 0;
	self.draw = function(ctx){

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
		*/

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
		}*/

	});

	// Kill
	self.kill = function(){
	};

}