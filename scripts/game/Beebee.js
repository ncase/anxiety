function Beebee(){

	var self = this;

	// Sprite!
	var beebeeImage = new Image();
	beebeeImage.src = "sprites/beebee.png";
	self.sprite = new Sprite({
		image: beebeeImage,
		grid:{
			width: 1,
			height: 2
		},
		frame:{
			width: 720,
			height: 500
		},
		anchor:{
			x: 300,
			y: 230
		},
		frameNames:[
			"normal",
			"panic",
			"yay"
		],
		x: 300,
		y: 430,
		rotation: 0,
		scale: 1,
		squash: 1
	});

	// Draw
	var ticker = 1;
	self.draw = function(ctx){

		// Bouncing based on frame!
		ticker += 1/20;
		if(self.sprite.currentFrameName == "panic"){
			ticker += 1;
		}
		self.sprite.squash = 1 + Math.sin(ticker)*0.05;

		// Draw me!
		self.sprite.draw(ctx);

	};

	subscribe("beebee", function(frameName){
		self.sprite.gotoFrameByName(frameName);
	});

}