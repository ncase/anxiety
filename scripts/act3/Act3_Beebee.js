Loader.addImages([
	{ id:"act3_bb", src:"sprites/act3/fight_bb.png" }
]);

function Act3_Beebee(){

	var self = this;

	// SPRITE CONFIG!
	var spriteConfig = {
		image: Library.images.act3_bb,
		grid:{
			width: 8,
			height: 3
		},
		frame:{
			width: 720,
			height: 500
		},
		anchor:{
			x: 270,
			y: 223
		},
		frameNames:[

			"body_normal_1",
			"body_normal_2",
			"body_normal_3",
			"body_normal_4",
			"mouth_sorry",
			"mouth_sorry_talk",
			"eyes_sorry_down",
			"eyes_sorry",

			"eyes_sorry_up",
			"mouth_normal",
			"mouth_normal_talk",
			"eyes_oh_crap",
			"eyes_start",
			"eyes_normal",
			"eyes_angry",
			"eyes_sad",

			"mouth_ignore",
			"mouth_ignore_talk",
			"eyes_ignore",
			"eyes_ignore_oh_crap",
			"body_attacked*",
			"body_dead*",
			"body_special_attack*",
			//"eyes_blank", // BLANK
			//"mouth_blank", // BLANK

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
		body: "normal_1",
		mouth: "normal",
		eyes: "start",
	});
	var _subscriptions = [];
	_subscriptions.push( subscribe("bb", self.gotoFrames) );
	_subscriptions.push( subscribe("attack_bb", self.showAttackedIcon) );
	_subscriptions.push( subscribe("DONE_SPEAKING", self.whenDoneSpeaking) );
	_subscriptions.push(
		subscribe("bb_STOP_VIBRATING", function(){
			self.isVibrating = false;
		})
	);

	// Draw! Same as earlier except a lot of vibration
	var ticker = 0;
	var _oldDraw = self.draw;
	self.characterSpeakerID = "b";
	self.bounceHookes = 0.25; // loose
	self.bounceDamp = 0.9; // loose
	self.isVibrating = true;
	self.draw = function(ctx, delta){

		// Vibration!
		ticker += delta;
		if(self.isVibrating){
			self.characterSquash = 1 + Math.sin(ticker*Math.TAU*7)*0.01; // seven vibes per second
		}else{
			self.characterSquash = 1;
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