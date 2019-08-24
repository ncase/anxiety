Loader.addImages([
	{ id:"act2_hong", src:"sprites/act2/battle_hong.png" }
]);

function Act2_Hong(){

	var self = this;

	// SPRITE CONFIG!
	var spriteConfig = {
		image: Library.images.act2_hong,
		grid:{
			width: 6,
			height: 6
		},
		frame:{
			width: 400,
			height: 400
		},
		anchor:{
			x: 78,
			y: 200
		},
		frameNames:[

			"body_ignore*",
			"body_ignore_sweat*",
			"body_attacked*",
			"body_attacked_2*",
			"body_attacked_3*",
			"body_facepalm*",

			"body_facepalm_2*",
			"body_facepalm_3*",
			"body_smile",
			"mouth_smile",
			"mouth_smile_talk",
			"body_yell",

			"mouth_yell",
			"mouth_yell_talk",
			"body_cross",
			"mouth_cross_talk",
			"mouth_cross",
			"body_defeated*",

			"body_listen*",
			"body_look*",
			"mouth_blank", // BLANK!
			"eyes_blank", // BLANK!
			"eyes_asdf",
			"eyes_omfg",

			"body_hold*",
			"body_drink*",
			"body_forward",
			"mouth_forward",
			"mouth_forward_talk",
			"body_back",

			"mouth_back",
			"mouth_back_talk",
			"body_final",
			"mouth_final",
			"mouth_final_talk",

		],
		x: 65 + 10,
		y: 470 + 2
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
	}, 0); // zero bounce
	var _subscriptions = [];
	_subscriptions.push( subscribe("hong", self.gotoFrames) );
	_subscriptions.push( subscribe("attack_hong", self.showAttackedIcon) );
	_subscriptions.push( subscribe("DONE_SPEAKING", self.whenDoneSpeaking) );

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