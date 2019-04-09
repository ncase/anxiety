Loader.addImages([
	{ id:"act1_hong", src:"sprites/act1/act1_hong.png" }
]);

function Act1_Hong(){

	var self = this;

	// Sprite!
	self.sprite = new Sprite({
		image: Library.images.act1_hong,
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

		if(backToNormalTicker-- <= 0 && HP.hong>0){
			self.sprite.gotoFrameByName("normal");
		}

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
	var backToNormalTicker = 0; // HACK
	subscribe("hong", function(fname){

		if(fname=="attacked"){

			self.sprite.gotoFrameByName("shock");
			self.sprite.bounce = 1/1.5;
			backToNormalTicker = 60;

		}else{

			self.sprite.gotoFrameByName(fname);
			self.sprite.bounce = 1.05;
			if(fname=="shock"){
				self.sprite.bounce = 1/1.5;
			}

		}

	});

	// Kill
	self.kill = function(){
	};

}