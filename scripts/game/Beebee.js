function Beebee(){

	var self = this;

	// Sprite!
	var beebeeImage = new Image();
	beebeeImage.src = "sprites/beebee.png";
	self.sprite = new Sprite({
		image: beebeeImage,
		grid:{
			width: 2,
			height: 3
		},
		frame:{
			width: 600,
			height: 400
		},
		anchor:{
			x: 425/2,
			y: 325/2
		},
		frameNames:[
			"normal_look_phone",
			"normal",
			"normal_speak",
			"",
			"scream",
			"scream_2"
		],
		x: 270,
		y: 405
	});

	// Draw
	var ticker = 0;
	self.draw = function(ctx){

		var fname = self.sprite.currentFrameName;

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

		self.sprite.gotoFrameByName(fname);

		// Bounce transition
		self.sprite.bounce = 1.1;
		if(fname=="scream"){
			self.sprite.bounce = 1.6;
		}

	});

	// Kill
	self.kill = function(){
	};

}