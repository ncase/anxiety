Loader.addImages([
	{ id:"act3_hong", src:"sprites/act3/fight_hong.png" }
]);

function Act3_Hong(){

	var self = this;

	// SPRITE CONFIG!
	var spriteConfig = {
		image: Library.images.act3_hong,
		grid:{
			width: 4,
			height: 1
		},
		frame:{
			width: 720,
			height: 400
		},
		anchor:{
			x: 59,
			y: 180
		},
		frameNames:[
			"body_angry*",
			"body_drink*",
			"body_stop*",
			"body_foobar*",
			"mouth_blank",
			"eyes_blank",
		],
		x: 59,
		y: 258+180
	};

	// ANIM LOOPS
	var animLoops = [];

	// Inherit from Character!
	Character.apply(self, [spriteConfig, animLoops]);

	// Go To Frames!
	self.gotoFrames({
		body: "angry",
		mouth: "blank",
		eyes: "blank",
	});
	var _subscriptions = [];
	_subscriptions.push( subscribe("hong", self.gotoFrames) );
	//_subscriptions.push( subscribe("attack_hong", self.showAttackedIcon) );

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