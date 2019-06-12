Loader.addImages([
	{ id:"act2_bb", src:"sprites/act2/battle_bb.png" }
]);

function Act2_Beebee(){

	var self = this;

	// SPRITE CONFIG!
	var spriteConfig = {
		image: Library.images.act2_bb,
		grid:{
			width: 4,
			height: 3
		},
		frame:{
			width: 720,
			height: 400
		},
		anchor:{
			x: 306,
			y: 188
		},
		frameNames:[
			"body_neutral*",
			"body_sad*",
			"body_happy*",
			"body_yell*",
			"body_cry*",
			"body_shock*",
			"body_attacked*",
			"body_pained*",
			"body_special_1*",
			"body_special_2*",
			"eyes_blank",
			"mouth_blank",
		],
		x: 306,
		y: 258+188
	};

	// ANIM LOOPS
	var animLoops = [];

	// Inherit from Character!
	Character.apply(self, [spriteConfig, animLoops]);

	// Go To Frames!
	self.gotoFrames({
		body: "neutral",
		mouth: "blank",
		eyes: "blank",
	});
	var _subscriptions = [];
	_subscriptions.push( subscribe("bb", self.gotoFrames) );
	_subscriptions.push( subscribe("attack_bb", self.showAttackedIcon) );

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
	//////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////

	// Kill!
	self.kill = function(){
		_subscriptions.forEach(unsubscribe);
	};

}