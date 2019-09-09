Loader.addImages([
	{ id:"act1_beebee", src:"sprites/act1/act1_beebee.png" }
]);

function Act1_Beebee(){

	var self = this;

	// SPRITE CONFIG!
	var spriteConfig = {
		image: Library.images.act1_beebee,
		grid:{
			width: 4,
			height: 8
		},
		frame:{
			width: 720,
			height: 500
		},
		anchor:{
			x: 546/2,
			y: 400/2
		},
		frameNames:[
			
			"body_normal",
			"body_fear",
			"body_point_crotch",
			"body_point_heart",
			"body_sing",

			"mouth_normal",
			"mouth_normal_talk",
			"mouth_small",
			"mouth_small_talk",
			"mouth_small_lock",

			"eyes_normal",
			"eyes_normal_right",
			"eyes_uncertain",
			"eyes_uncertain_right",
			"eyes_narrow",
			"eyes_narrow_eyebrow",
			"eyes_fear",
			"eyes_pretty",
			"eyes_wat",
			"eyes_wat_2",

			"body_panic*",
			"body_panic_2*",
			"body_scream_anger*",
			"body_scream_anger_2*",
			"body_scream*",
			"body_scream_2*",

			"body_flail*",
			"body_flail2*",
			"body_flail3*",
			"body_flail4*",

			"mouth_smile",
			"mouth_smile_talk",
			"mouth_smile_lock",
			"eyes_smile",
			"eyes_look",
			"eyes_look_sad",
			"eyes_look_sad_smile",
			"eyes_pained1",
			"eyes_pained2",
			"mouth_shut",
			"eyes_anger",

			"body_meta*",
			"body_laugh*",
			"body_pride_talk*",
			"body_pride*",
			"body_squeeze_talk*",
			"body_squeeze*",

		],
		x: 270-7.5,
		y: 390+4.5
	};

	// ANIM LOOPS
	var animLoops = [
		{ target:"body", ifOnFrame:"panic*", wait:0.07, thenGoToFrame:"panic_2*" },
		{ target:"body", ifOnFrame:"panic_2*", wait:0.07, thenGoToFrame:"panic*" },

		{ target:"body", ifOnFrame:"scream_anger*", wait:0.1, thenGoToFrame:"scream_anger_2*" },
		{ target:"body", ifOnFrame:"scream_anger_2*", wait:0.1, thenGoToFrame:"scream_anger*" },
		{ target:"body", ifOnFrame:"scream*", wait:0.1, thenGoToFrame:"scream_2*" },
		{ target:"body", ifOnFrame:"scream_2*", wait:0.1, thenGoToFrame:"scream*" },

		{ target:"body", ifOnFrame:"flail*", wait:0.05, thenGoToFrame:"flail2*" },
		{ target:"body", ifOnFrame:"flail2*", wait:0.05, thenGoToFrame:"flail3*" },
		{ target:"body", ifOnFrame:"flail3*", wait:0.05, thenGoToFrame:"flail4*" },
		{ target:"body", ifOnFrame:"flail4*", wait:0.05, thenGoToFrame:"flail*" }
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
		var b = self.layers.body.currentFrameName;
		if(b=="body_squeeze_talk*" || b=="body_squeeze*"){// || b=="body_pride_talk*" || b=="body_pride*"){
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