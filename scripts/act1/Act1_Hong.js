Loader.addImages([
	{ id:"act1_hong", src:"sprites/act1/act1_hong.png" }
]);

function Act1_Hong(){

	var self = this;

	// SPRITE CONFIG!
	var spriteConfig = {
		image: Library.images.act1_hong,
		grid:{
			width: 4,
			height: 10
		},
		frame:{
			width: 720,
			height: 500
		},
		anchor:{
			x: 122/2,
			y: 404/2
		},
		frameNames:[

			"body_0_sammich_no_outline",
			"body_0_sammich",
			"body_0_squeeze*",
			"eyes_0_neutral",
			"eyes_0_lookaway",
			"eyes_0_annoyed",
			"eyes_0_shock",
			"mouth_0_neutral",
			"mouth_0_chew1",
			"mouth_0_chew2",
			"mouth_0_neutral_talk",
			"mouth_0_shock",

			"body_putaway*",
			"body_phone1",
			"body_phone2",
			"eyes_neutral",
			"eyes_annoyed",
			"eyes_sad",
			"eyes_shock",
			"eyes_lookaway",
			"eyes_anger",
			"eyes_surprise",
			"mouth_shut",
			"mouth_neutral",
			"mouth_neutral_talk",
			"mouth_smile",
			"mouth_smile_talk",
			"mouth_sad",
			"mouth_sad_talk",
			"mouth_shock",
			"mouth_anger",
			"mouth_anger_talk",

			"body_2_tired*",
			"body_2_fuck*",
			"body_2_you*",
			"body_2_sammich_eat*",
			"body_2_sammich_eaten",

			"body_3_defeated1*",
			"body_3_defeated2*",
			"body_3_defeated3*",
			"body_3_defeated3_no_outline*",

			"body_laugh*",

		],
		x: 65,
		y: 385+14
	};

	// ANIM LOOPS
	var animLoops = [
		{ target:"body", ifOnFrame:"phone1", wait:1, thenGoToFrame:"phone2" },
		{ target:"body", ifOnFrame:"phone2", wait:1, thenGoToFrame:"phone1" },
		{ target:"mouth", ifOnFrame:"0_chew1", wait:0.7, thenGoToFrame:"0_chew2" },
		{ target:"mouth", ifOnFrame:"0_chew2", wait:0.7, thenGoToFrame:"0_chew1" }
	];

	// Inherit from Character!
	Character.apply(self, [spriteConfig, animLoops]);

	// Go To Frames!
	self.gotoFrames({
		body: "0_sammich",
		mouth: "0_chew1",
		eyes: "0_neutral",
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