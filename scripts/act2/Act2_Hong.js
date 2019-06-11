Loader.addImages([
	{ id:"act2_hong", src:"sprites/act2/battle_hong.png" }
]);

function Act2_Hong(){

	var self = this;

	// SPRITE CONFIG!
	var spriteConfig = {
		image: Library.images.act2_hong,
		grid:{
			width: 4,
			height: 3
		},
		frame:{
			width: 720,
			height: 400
		},
		anchor:{
			x: 66,
			y: 188
		},
		frameNames:[
			"body_ignore*",
			"body_ignore_sweat*",
			"body_attacked*",
			"body_yell*",
			"body_cry*",
			"body_hold_alcohol*",
			"body_drinking*",
			"body_drunk*",
			"body_defeated*",
			"mouth_blank",
			"eyes_blank",
		],
		x: 66,
		y: 258+188
	};

	// ANIM LOOPS
	var animLoops = [];

	// Inherit from Character!
	Character.apply(self, [spriteConfig, animLoops]);

	// Go To Frames!
	self.gotoFrames({
		body: "ignore",
		mouth: "blank",
		eyes: "blank",
	});
	var _subscriptions = [];
	_subscriptions.push( subscribe("hong", self.gotoFrames) );
	_subscriptions.push( subscribe("attack_hong", self.showAttackedIcon) );

	// Draw
	self.characterSpeakerID = "h";

	//////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////

	// Kill!
	self.kill = function(){
		_subscriptions.forEach(unsubscribe);
	};

}