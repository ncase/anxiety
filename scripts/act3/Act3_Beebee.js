Loader.addImages([
	{ id:"act3_bb", src:"sprites/act3/fight_bb.png" }
]);

function Act3_Beebee(){

	var self = this;

	// SPRITE CONFIG!
	var spriteConfig = {
		image: Library.images.act3_bb,
		grid:{
			width: 4,
			height: 2
		},
		frame:{
			width: 720,
			height: 500
		},
		anchor:{
			x: 270,
			y: 222
		},
		frameNames:[
			"body_scared*",
			"body_sad*",
			"body_attacked*",
			"body_dead*",
			"eyes_blank",
			"mouth_blank",
		],
		x: 270,
		y: 258+222-60
	};

	// ANIM LOOPS
	var animLoops = [];

	// Inherit from Character!
	Character.apply(self, [spriteConfig, animLoops]);

	// Go To Frames!
	self.gotoFrames({
		body: "scared",
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