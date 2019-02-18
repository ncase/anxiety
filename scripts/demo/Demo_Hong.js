function Demo_Hong(){

	var self = this;

	// Sprite!
	var beebeeImage = new Image();
	beebeeImage.src = "sprites/demo_hong.png";
	self.sprite = new Sprite({
		image: beebeeImage,
		grid:{
			width: 4,
			height: 2
		},
		frame:{
			width: 300,
			height: 300
		},
		anchor:{
			x: 160/2,
			y: 225/2
		},
		frameNames:[
			"_body_1",
			"_body_2",
			"",
			"",
			"normal",
			"sarcasm",
			"smile",
			"shock"
		],
		x: 70,
		y: 400
	});

	// Breathe normally
	self.sprite.breatheSpeed = 0.017;
	self.sprite.breatheAmp = 0.014;

	// Bounce slow
	self.sprite.bounceHookes = 0.1;
	self.sprite.bounceDamp = 0.9;

	// First frame
	self.sprite.gotoFrameByName("normal");

	// Draw
	var ticker = 0;
	self.draw = function(ctx){

		var fname = self.sprite.currentFrameName;

		// Breathe, unless shocked
		if(fname=="shock"){
			self.sprite.breatheSpeed = 0;
			self.sprite.breatheAmp = 0;
		}else{
			self.sprite.breatheSpeed = 0.017;
			self.sprite.breatheAmp = 0.014;
		}

		// Draw body FIRST
		var bod_frame = (Math.floor(ticker/30)%2 == 0) ? "_body_1" : "_body_2";
		ticker++;
		self.sprite.gotoFrameByName(bod_frame);
		self.sprite.draw(ctx);

		// Draw face next
		self.sprite.gotoFrameByName(fname);
		self.sprite.draw(ctx);

	};

	// When going to frames...
	subscribe("hong", function(fname){
		self.sprite.gotoFrameByName(fname);
		self.sprite.bounce = 1.05;
		if(fname=="shock"){
			self.sprite.bounce = 1/1.5;
		}
	});

	// Kill
	self.kill = function(){
	};

}