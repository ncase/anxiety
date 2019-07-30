Loader.addImages([
	{ id:"act3_hong", src:"sprites/act3/fight_hong.png" }
]);

function Act3_Hong(){

	var self = this;

	// SPRITE CONFIG!
	var spriteConfig = {
		image: Library.images.act3_hong,
		grid:{
			width: 8,
			height: 4
		},
		frame:{
			width: 720,
			height: 400
		},
		anchor:{
			x: 59,
			y: 181
		},
		frameNames:[
			
			"body_normal",
			"body_cry",
			"mouth_cry",
			"mouth_cry_talk",
			"body_look_up",
			"body_look_down",
			"mouth_happy",
			"eyes_normal",

			"eyes_look_right",
			"eyes_angry",
			"eyes_less_angry",
			"eyes_look_up",
			"eyes_look_down",
			"mouth_angry",
			"mouth_angry_talk",
			"mouth_normal",

			"mouth_normal_talk",
			"body_drink*",
			"body_stop",
			"mouth_stop",
			"mouth_stop_talk",
			"body_laugh_1*",
			"body_laugh_2*",
			"body_laugh_3*",

			"body_yell_1",
			"body_yell_2",
			"mouth_yell",
			"mouth_yell_talk",
			"mouth_blank", // BLANK
			"eyes_blank", // BLANK

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
		body: "normal",
		mouth: "angry",
		eyes: "angry",
	},0);
	var _subscriptions = [];
	_subscriptions.push( subscribe("hong", self.gotoFrames) );
	_subscriptions.push( subscribe("DONE_SPEAKING", self.whenDoneSpeaking) );
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