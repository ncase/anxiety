Loader.addImages([
	{ id:"act4_bb", src:"sprites/act4/bb_convo.png" }
]);

function Act4_Beebee(){

	var self = this;

	// SPRITE CONFIG!
	var spriteConfig = {
		image: Library.images.act4_bb,
		grid:{
			width: 8,
			height: 9
		},
		frame:{
			width: 500,
			height: 500
		},
		anchor:{
			x: 171,
			y: 242
		},
		frameNames:[

			"body_normal",
			"body_chest",
			"body_two_up",
			"body_one_up",
			"body_paw",
			"cone_normal",
			"coneb_normal",
			"mouth_normal",

			"mouth_normal_talk",
			"mouth_narrow",
			"mouth_narrow_talk",
			"mouth_smile",
			"mouth_smile_talk",
			"mouth_scream",
			"mouth_scream_talk",
			"cone_scream",

			"coneb_scream",
			"eyes_normal",
			"eyes_normal_r",
			"eyes_normal_u",
			"eyes_normal_d",
			"eyes_look_down",
			"eyes_scream",
			"eyes_scream_sad",

			"eyes_super_sad",
			"eyes_closed",
			"eyes_closed_annoyed",
			"eyes_sexy",
			"eyes_smile",
			"eyes_smile_r",
			"eyes_smile_u",
			"eyes_smile_d",

			"eyes_angry",
			"eyes_angry_r",
			"eyes_angry_u",
			"eyes_angry_d",
			"eyes_surprise",
			"eyes_surprise_r",
			"eyes_surprise_u",
			"eyes_surprise_d",

			"eyes_annoyed",
			"eyes_annoyed_r",
			"eyes_annoyed_u",
			"eyes_annoyed_d",
			"eyes_sad",
			"eyes_sad_r",
			"eyes_sad_u",
			"eyes_sad_d",

			"eyes_suspect",
			"eyes_suspect_r",
			"body_karate_1*",
			"body_karate_2*",
			"cone_karate",
			"coneb_karate",
			"body_yap_1*",
			"body_yap_2*",

			"body_yap_3*",
			"body_yap_4*",
			"cone_yap_1",
			"cone_yap_2",
			"cone_yap_3",
			"cone_yap_4",
			"eyes_blank", // BLANK
			"mouth_blank", // BLANK

			"coneb_blank", // BLANK

		],
		x: 110+171,
		y: 200+242,
		OVERRIDE_LAYER_NAMES: ["coneb", "body", "mouth", "eyes", "cone"]
	};

	// ANIM LOOPS
	var animLoops = [

		// YAP YAP YAP
		{ target:"body", ifOnFrame:"yap_1*", wait:1/24, thenGoToFrame:"yap_2*" },
		{ target:"body", ifOnFrame:"yap_2*", wait:1/24, thenGoToFrame:"yap_3*" },
		{ target:"body", ifOnFrame:"yap_3*", wait:1/24, thenGoToFrame:"yap_4*" },
		{ target:"body", ifOnFrame:"yap_4*", wait:1/24, thenGoToFrame:"yap_1*" },

		// KARATE
		{ target:"body", ifOnFrame:"karate_1*", wait:0.25, thenGoToFrame:"karate_2*" }, // no loop

	];

	// Inherit from Character!
	Character.apply(self, [spriteConfig, animLoops]);

	// Go To Frames!
	self.gotoFrames({
		body: "normal",
		mouth: "normal",
		eyes: "normal",
	});
	var _subscriptions = [];
	_subscriptions.push( subscribe("bb", self.gotoFrames) );
	_subscriptions.push( subscribe("DONE_SPEAKING", self.whenDoneSpeaking) );

	// Hide cone?
	if(!_.INJURED){
		self.layers.coneb.visible = false;
		self.layers.cone.visible = false;
	}

	// Draw!
	var ticker = 0;
	self.characterSpeakerID = "b";
	// self.bounceHookes = 0.25; 
	// self.bounceDamp = 0.9;
	
	//////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////

	// Kill!
	self.kill = function(){
		_subscriptions.forEach(unsubscribe);
	};

}