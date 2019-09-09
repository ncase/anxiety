Loader.addImages([
	{ id:"act2_bb", src:"sprites/act2/battle_bb.png" }
]);

function Act2_Beebee(){

	var self = this;

	// SPRITE CONFIG!
	var spriteConfig = {
		image: Library.images.act2_bb,
		grid:{
			width: 10,
			height: 8
		},
		frame:{
			width: 720,
			height: 500
		},
		anchor:{
			x: 292.5,
			y: 249.4
		},
		frameNames:[

			"body_normal",
			"body_two_up",
			"body_chest",
			"body_point",
			"body_one_up",
			"body_scream_a_1*",
			"body_scream_a_2*",
			"body_shocked*",
			"mouth_small",
			"mouth_small_talk",

			"mouth_normal",
			"mouth_normal_talk",
			"mouth_smile",
			"mouth_smile_talk",
			"eyes_normal",
			"eyes_normal_r",
			"eyes_suspect",
			"eyes_suspect_r",
			"eyes_sad",
			"eyes_sad_r",

			"eyes_shock",
			"eyes_happy",
			"eyes_happy_r",
			"eyes_closed",
			"eyes_judge",
			"body_judge_1",
			"body_judge_2",
			"body_scream_b_1*",
			"body_scream_b_2*",
			"body_scream_c_1*",

			"body_scream_c_2*",
			"body_cry_1*",
			"body_cry_2*",
			"body_cry_3*",
			"body_cry_4",
			"mouth_cry_talk",
			"mouth_cry",
			"eyes_cry",
			"eyes_cry_2",
			"body_cry_5*",

			"body_cry_6",
			"mouth_right",
			"mouth_right_talk",
			"eyes_cry_r_1",
			"eyes_cry_r_2",
			"eyes_cry_r_3",
			"eyes_cry_r_4",
			"mouth_blank", // BLANK
			"eyes_blank", // BLANK
			"eyes_asdf",

			"eyes_angry",
			"eyes_sad_2",
			"eyes_wat",
			"body_attacked*",
			"body_frazzled",
			"mouth_frazzled_talk",
			"mouth_frazzled",
			"eyes_frazzled",
			"body_panicked",
			"mouth_panicked",

			"mouth_panicked_talk",
			"eyes_panicked",
			"body_special_a*",
			"body_special_b_1*",
			"body_special_b_2*",
			"body_special_b_3*",
			"body_special_c*",
			"body_final_1*",
			"body_final_2*",
			"body_final_3*",

			"body_final_4*",
			"body_yell_1*",
			"body_yell_2*",
			"body_yell_angry_1*",
			"body_yell_angry_2*"

		],
		x: 292.5 - 10,
		y: 470 + 2 // hack
	};

	// ANIM LOOPS
	var animLoops = [

		// Scream A - Fisticuffs
		{ target:"body", ifOnFrame:"scream_a_1*", wait:0.10, thenGoToFrame:"scream_a_2*" },
		{ target:"body", ifOnFrame:"scream_a_2*", wait:0.10, thenGoToFrame:"scream_a_1*" },

		// Scream B - Bounce
		{ target:"body", ifOnFrame:"scream_b_1*", wait:0.10, thenGoToFrame:"scream_b_2*" },
		{ target:"body", ifOnFrame:"scream_b_2*", wait:0.10, thenGoToFrame:"scream_b_1*" },

		// Scream C - DIEEEEE
		{ target:"body", ifOnFrame:"scream_c_1*", wait:0.07, thenGoToFrame:"scream_c_2*" },
		{ target:"body", ifOnFrame:"scream_c_2*", wait:0.07, thenGoToFrame:"scream_c_1*" },

		// HADOUKEN
		{ target:"body", ifOnFrame:"special_b_1*", wait:0.10, thenGoToFrame:"special_b_2*" },
		{ target:"body", ifOnFrame:"special_b_2*", wait:0.10, thenGoToFrame:"special_b_3*" },
		{ target:"body", ifOnFrame:"special_b_3*", wait:0.10, thenGoToFrame:"special_b_1*" },

		// FLAIL
		{ target:"body", ifOnFrame:"final_1*", wait:0.05, thenGoToFrame:"final_2*" },
		{ target:"body", ifOnFrame:"final_2*", wait:0.05, thenGoToFrame:"final_3*" },
		{ target:"body", ifOnFrame:"final_3*", wait:0.05, thenGoToFrame:"final_4*" },
		{ target:"body", ifOnFrame:"final_4*", wait:0.05, thenGoToFrame:"final_1*" },

		// Final scream
		{ target:"body", ifOnFrame:"yell_1*", wait:0.10, thenGoToFrame:"yell_2*" },
		{ target:"body", ifOnFrame:"yell_2*", wait:0.10, thenGoToFrame:"yell_1*" },

		// Final scream (angry)
		{ target:"body", ifOnFrame:"yell_angry_1*", wait:0.10, thenGoToFrame:"yell_angry_2*" },
		{ target:"body", ifOnFrame:"yell_angry_2*", wait:0.10, thenGoToFrame:"yell_angry_1*" },

	];

	// Inherit from Character!
	Character.apply(self, [spriteConfig, animLoops]);
	self.ALLOW_PARALLAX = true;

	// Go To Frames!
	self.gotoFrames({
		body: "shocked",
		mouth: "blank",
		eyes: "blank",
	});
	var _subscriptions = [];
	_subscriptions.push( subscribe("bb", self.gotoFrames) );
	_subscriptions.push( subscribe("attack_bb", self.showAttackedIcon) );
	_subscriptions.push( subscribe("DONE_SPEAKING", self.whenDoneSpeaking) );

	// Draw! Same as earlier except a lot of vibration
	var ticker = 0;
	var _oldDraw = self.draw;
	self.characterSpeakerID = "b";
	self.bounceHookes = 0.25; // loose
	self.bounceDamp = 0.9; // loose
	self.draw = function(ctx, delta){

		// Vibration!
		ticker += delta;
		self.characterSquash = 1 + Math.sin(ticker*Math.TAU*7)*0.01; // seven vibes per second
		
		// TOTAL HACK
		if(self.layers.body.currentFrameName=="body_special_c*"){
			self.characterSquash = 1; // TOTAL HACK
			self.bounce = 1;
			self.bounceVel = 0;
		}

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