Loader.addImages([
	{ id:"act4_hong", src:"sprites/act4/hong_convo.png" }
]);

function Act4_Hong(){

	var self = this;

	// SPRITE CONFIG!
	var spriteConfig = {
		image: Library.images.act4_hong,
		grid:{
			width: 8,
			height: 5
		},
		frame:{
			width: 400,
			height: 400
		},
		anchor:{
			x: 55,
			y: 135
		},
		frameNames:[
			
			"body_sit*",
			"body_sigh_1*",
			"body_sigh_2*",
			"body_hold",
			"body_normal",
			"body_one_up",
			"body_point",
			"body_shrug",

			"body_chin",
			"body_hands_1",
			"body_hands_2",
			"eyes_normal",
			"eyes_normal_l",
			"eyes_surprise",
			"eyes_surprise_l",
			"eyes_annoyed",

			"eyes_annoyed_l",
			"eyes_angry",
			"eyes_angry_l",
			"eyes_suspect",
			"eyes_suspect_l",
			"eyes_sad",
			"eyes_sad_l",
			"eyes_look_up",

			"mouth_normal",
			"mouth_normal_talk",
			"mouth_smile",
			"mouth_smile_talk",
			"mouth_sad",
			"mouth_sad_talk",
			"mouth_narrow",
			"mouth_narrow_talk",

			"mouth_blank", // BLANK
			"eyes_blank", // BLANK

		],
		x: 0+55,
		y: 258+135
	};

	// ANIM LOOPS
	var animLoops = [];

	// Inherit from Character!
	Character.apply(self, [spriteConfig, animLoops]);

	// Go To Frames!
	self.gotoFrames({
		body: "sit",
		mouth: "blank",
		eyes: "blank",
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