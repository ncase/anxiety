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
			"eyes_0_neutral",
			"eyes_0_concerned",
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
			"body_3_defeated3_no_outline*"

		],
		x: 65,
		y: 385+14
	};

	// ANIM LOOPS
	var animLoops = [
		{ target:"body", ifOnFrame:"phone1", wait:0.5, thenGoToFrame:"phone2" },
		{ target:"body", ifOnFrame:"phone2", wait:0.5, thenGoToFrame:"phone1" }
	];

	// Inherit from Character!
	Character.apply(self, [spriteConfig, animLoops]);

	// Go To Frames!
	self.gotoFrames({
		body: "phone1",
		mouth: "neutral",
		eyes: "neutral",
	});
	var _subscriptions = [];
	_subscriptions.push( subscribe("hong", self.gotoFrames) );
	_subscriptions.push( subscribe("attack_hong", self.showAttackedIcon) );

	// Draw
	self.bounceHookes = 0.2; // stiff
	self.bounceDamp = 0.8; // stiff

	/*

	// Draw
	var ticker = 0;
	self.draw = function(ctx){

		self.sprite.update();

		// Draw body FIRST
		ticker++;
		//var bod_frame = (Math.floor(ticker/30)%2 == 0) ? "body_phone1" : "body_phone2"; // phone flickering
		self.sprite.gotoFrameByName("0_body_sammich");
		self.sprite.draw(ctx);

		// Draw mouth next
		self.sprite.gotoFrameByName("0_mouth_neutral");
		self.sprite.draw(ctx);

		// Draw eyes finally
		self.sprite.gotoFrameByName("0_eyes_neutral");
		self.sprite.draw(ctx);

		// Draw attacked icon
		if(attackedIconShown){
			
			var icon = self.fears[attackedIconShown];
			icon.draw(ctx);
			
			attackedTimer += 1/60;
			if(attackedTimer>1.5){ // 1s
				icon.y -= 1;
				icon.alpha -= 1/15;
				if(icon.alpha<0){
					attackedIconShown = null;
				}
			}

		}

	};

	// Show attacked icon!
	var attackedIconShown = null; 
	var attackedTimer = 0;
	self.showAttackedIcon = function(type){
		attackedIconShown = type;
		var icon = self.fears[attackedIconShown];
		icon.x = 82;
		icon.y = 230;
		icon.alpha = 1;
		attackedTimer = 0;
	};

	// When going to frames...
	subscribe("hong", function(fname, options){

		// If attacked, vibrate
		if(fname=="attacked"){

			//self.sprite.gotoFrameByName("shock");
			//self.sprite.bounce = 1/1.5;
			self.sprite.shakeAmp = 5;
			self.sprite.shakeSpeed = 10;
			self.sprite.shakeTimer = 0.5;

			_mouth_frame = "mouth_shock";
			_eyes_frame = "eyes_shock";

			// Show an attack icon of type=options!
			self.showAttackedIcon(options);

		}else{

			// Otherwise, go to that frame
			self.sprite.gotoFrameByName(fname);
			self.sprite.bounce = 1.05;
			if(fname=="shock"){
				self.sprite.bounce = 1/1.5;
			}

		}

	});

	// Kill
	self.kill = function(){
	};

	*/

	//////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////

	// Kill!
	self.kill = function(){
		_subscriptions.forEach(unsubscribe);
	};

}