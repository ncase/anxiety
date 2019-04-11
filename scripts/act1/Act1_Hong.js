Loader.addImages([
	
	{ id:"act1_hong", src:"sprites/act1/act1_hong.png" },

	{ id:"fear_harm", src:"sprites/ui/fear_harm.png" },
	{ id:"fear_alone", src:"sprites/ui/fear_alone.png" },
	{ id:"fear_bad", src:"sprites/ui/fear_bad.png" }

]);

function Act1_Hong(){

	var self = this;

	// Sprite!
	self.sprite = new Sprite({
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

			"0_body_sammich_no_outline",
			"0_body_sammich",
			"0_eyes_neutral",
			"0_eyes_concerned",
			"0_eyes_shock",
			"0_mouth_neutral",
			"0_mouth_chew1",
			"0_mouth_chew2",
			"0_mouth_neutral_talk",
			"0_mouth_shock",

			"body_putaway",
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

			"2_body_tired",
			"2_body_fuck",
			"2_body_you",
			"2_body_sammich_eat",
			"2_body_sammich_eaten",

			"3_body_defeated1",
			"3_body_defeated2",
			"3_body_defeated3",
			"3_body_defeated3_no_outline"

		],
		x: 65,
		y: 385
	});

	// Breathe normally
	//self.sprite.breatheSpeed = 0.017;
	//self.sprite.breatheAmp = 0.014;

	// Bounce slow
	//self.sprite.bounceHookes = 0.1;
	//self.sprite.bounceDamp = 0.9;

	// First frame
	self.sprite.gotoFrameByName("normal");

	// Attack sprites
	self.fears = {};
	["harm","alone","bad"].forEach( function(fearName){
		self.fears[fearName] = new Sprite({
			image: Library.images["fear_"+fearName],
			grid:{ width:1, height:1 },
			frame:{ width:200, height:200 },
			anchor:{ x:100/2, y:100/2 },
			scale:0.75
		});
	} );

	// HACK: frames
	var _mouth_frame = "mouth_smile";
	var _eyes_frame = "eyes_surprise";

	// Draw
	var ticker = 0;
	self.draw = function(ctx){

		self.sprite.update();

		// Draw body FIRST
		ticker++;
		var bod_frame = (Math.floor(ticker/30)%2 == 0) ? "body_phone1" : "body_phone2"; // phone flickering
		self.sprite.gotoFrameByName(bod_frame);
		self.sprite.draw(ctx);

		// Draw mouth next
		self.sprite.gotoFrameByName(_mouth_frame);
		self.sprite.draw(ctx);

		// Draw eyes finally
		self.sprite.gotoFrameByName(_eyes_frame);
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

}