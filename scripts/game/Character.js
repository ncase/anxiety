/********************************

Character Architecture:

* Layers: Body + Mouth + Eyes
* Can animate each layer independently
* Alternate mouth when talking
* Short animation loops
* [star] in body means show no eyes/mouth

*********************************/

Loader.addImages([

	{ id:"fear_harm", src:"sprites/ui/fear_harm.png" },
	{ id:"fear_alone", src:"sprites/ui/fear_alone.png" },
	{ id:"fear_bad", src:"sprites/ui/fear_bad.png" },
	{ id:"fear_captions", src:"sprites/ui/fear_captions.png" }

]);

function Character(spriteConfig, animLoops){

	var self = this;
	self.spriteConfig = spriteConfig;
	self.animLoops = animLoops || [];

	// Sprite!
	var THERE_IS_A_CONE = !!spriteConfig.OVERRIDE_LAYER_NAMES;
	var LAYER_NAMES = spriteConfig.OVERRIDE_LAYER_NAMES || ["body","mouth","eyes"];
	self.layers = {};
	LAYER_NAMES.forEach(function(layerName){
		self.layers[layerName] = new Sprite(spriteConfig);
	});

	// Attack sprites (Hong only, really)
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

	// Fear caption sprites
	self.fearCaptionSprite = new Sprite({
		image: Library.images.fear_captions,
		grid: { width:1, height:3 },
		frame: { width:200, height:200 },
		anchor: { x:100/2, y:100/2 },
		scale: 0.75,
		frameNames:["harm","alone","bad"]
	});

	// Go To Frames
	self.bounce = 1;
	self.bounceVel = 0;
	self.bounceHookes = 0.2;
	self.bounceDamp = 0.8;
	self.characterFrames = {};
	self.MOUTH_LOCK = false;
	self.whenDoneSpeaking = function(){
		self.MOUTH_LOCK = false;
	};
	self.gotoFrames = function(args, bounce){

		// Gimme those args
		if(args.body){
			if(!self.layers.body.doesFrameNameExist("body_"+args.body)) args.body+="*"; // add * if missing
			self.characterFrames.body = args.body;
		}
		if(args.mouth) self.characterFrames.mouth = args.mouth;
		if(args.eyes) self.characterFrames.eyes = args.eyes;

		// DID ANY PART CHANGE?
		var ANY_PART_CHANGED = false;

		if(args.body){
			var bodyName = "body_"+args.body;
			if(self.layers.body.currentFrameName!=bodyName) ANY_PART_CHANGED=true;
			self.layers.body.gotoFrameByName(bodyName);
			self.characterFrames.body = args.body;
		}

		if(args.mouth){
			var mouthName = "mouth_"+args.mouth;
			if(self.layers.mouth.currentFrameName!=mouthName) ANY_PART_CHANGED=true;
			self.layers.mouth.gotoFrameByName(mouthName);
		}

		if(args.eyes){
			var eyesName = "eyes_"+args.eyes;
			if(self.layers.eyes.currentFrameName!=eyesName) ANY_PART_CHANGED=true;
			self.layers.eyes.gotoFrameByName(eyesName);
		}

		// If NO CHANGE, then BOUNCE=0
		if(!ANY_PART_CHANGED) bounce=0;

		// Bounce?
		if(bounce===undefined) bounce=0.03; // a LITTLE bit, by default
		if(bounce!==undefined){
			self.bounce += bounce;
		}

		// Go go go
		var l = self.layers;
		var c = self.characterFrames;
		l.body.gotoFrameByName( "body_"+c.body );
		l.mouth.gotoFrameByName( "mouth_"+c.mouth );
		l.eyes.gotoFrameByName( "eyes_"+c.eyes );

		// LOCK IN THE CONE TO BODY + MOUTH, IF ANY 
		if(THERE_IS_A_CONE){
			l.cone.gotoFrameByName( "cone_normal" );
			l.coneb.gotoFrameByName( "coneb_normal" );
		}

		// MOUTH LOCK?
		if(args.MOUTH_LOCK){
			self.MOUTH_LOCK = l.mouth.currentFrameName;
		}

	};

	// Draw
	self.characterSpeakerID = "derp";
	self.characterSquash = 1;
	self.ALLOW_PARALLAX = false;
	self.x = -1337;
	self.draw = function(ctx, delta){

		var fname;
		var l = self.layers;
		var c = self.characterFrames;

		// ALLOW PARALLAX???
		var xMoved = 0;
		if(self.ALLOW_PARALLAX){
			ctx.translate(self.x, 0);
			xMoved += self.x;
		}

		// Attacked? SHAKE WHOLE CONTEXT
		if(IVE_BEEN_ATTACKED){
			var shakeDuration = 0.6;
			if(attackedTimer<shakeDuration){
				var shakeAmp = (shakeDuration-attackedTimer)/shakeDuration;
				var shakeX = Math.sin(attackedTimer*Math.TAU*10)*shakeAmp*10;
				ctx.translate(shakeX, 0);
				xMoved += shakeX;
			}
		}

		// GLOBAL PARAMS: SQUASH * BOUNCE
		self.bounce += self.bounceVel;
		self.bounceVel += (1-self.bounce)*self.bounceHookes;
		self.bounceVel *= self.bounceDamp;
		var totalSquash = self.characterSquash * self.bounce;
		l.body.squash = l.mouth.squash = l.eyes.squash = totalSquash;
		if(THERE_IS_A_CONE){
			l.cone.squash = l.coneb.squash = totalSquash;
		}

		// Anim Loop rules!
		self.runAnimLoopRules(delta);

		// SUPER DUPER HACK
		if(THERE_IS_A_CONE){
			if(l.mouth.currentFrameName.indexOf("scream")>=0){
				l.cone.gotoFrameByName( "cone_scream" );
				l.coneb.gotoFrameByName( "coneb_scream" );
			}else if(l.body.currentFrameName.indexOf("karate")>=0){
				l.cone.gotoFrameByName( "cone_karate" );
				l.coneb.gotoFrameByName( "coneb_karate" );
			}else if(l.body.currentFrameName.indexOf("yap")>=0){
				l.cone.gotoFrame(l.body.currentFrame+4);
				l.coneb.gotoFrameByName( "coneb_blank" );
			}else{
				l.cone.gotoFrameByName( "cone_normal" );
				l.coneb.gotoFrameByName( "coneb_normal" );
			}
		}

		// SUPER HACK
		if(THERE_IS_A_CONE){
			l.coneb.draw(ctx);
		}

		// Body
		l.body.draw(ctx);

		// If body is NOT on a "*" frame...
		if(l.body.currentFrameName.indexOf("*")<0){

			// Mouth
			if(self.MOUTH_LOCK){
				l.mouth.gotoFrameByName(self.MOUTH_LOCK);
			}else{
				if(Game.WHO_IS_SPEAKING==self.characterSpeakerID){
					// If I'm talking, switch to a talking mouth!
					var mouthTalkFrame = "mouth_"+c.mouth+"_talk";
					if( l.mouth.doesFrameNameExist(mouthTalkFrame) ){
						l.mouth.gotoFrameByName(mouthTalkFrame);
					}
				}else{
					// If I'm not talking & my mouth is in the talk position, switch it back!
					var isMyMouthTalking = (l.mouth.currentFrameName.indexOf("_talk")>=0);
					if(isMyMouthTalking){
						l.mouth.gotoFrameByName( "mouth_"+c.mouth );
					}
				}
			}
			l.mouth.draw(ctx);

			// Eyes
			l.eyes.draw(ctx);

		}

		// SUPER HACK
		if(THERE_IS_A_CONE){
			l.cone.draw(ctx);
		}

		// Draw attacked icon
		if(IVE_BEEN_ATTACKED){
			
			if(attackedIconShown){
				var icon = self.fears[attackedIconShown];
				icon.draw(ctx);

				var caption = self.fearCaptionSprite;
				caption.gotoFrameByName(attackedIconShown);
				caption.x = icon.x;
				caption.y = icon.y-37;
				caption.alpha = icon.alpha;
				caption.draw(ctx);
			}
			
			attackedTimer += delta;
			if(attackedTimer>1.75){
				if(attackedIconShown){
					icon.y -= 1;
					icon.alpha -= 1/15;
				}
				iconAlpha_HACK -= 1/15;
				if(iconAlpha_HACK<0){
					attackedIconShown = null;
					IVE_BEEN_ATTACKED = false;
				}
			}

		}
		
		// Instead of save / restore, just move back the amount that we moved!
		ctx.translate(-xMoved, 0);

	};
	var iconAlpha_HACK = 0;

	// Anim Loop logic!
	self.animLoops.forEach(function(rule){
		rule.active = false;
		rule.countdown = -1;
	});
	self.runAnimLoopRules = function(delta){
		for(var i=0; i<self.animLoops.length; i++){

			// Find target
			var rule = self.animLoops[i];
			var target = self.layers[rule.target];

			// Activate rule if not already
			if(target.currentFrameName == rule.target+"_"+rule.ifOnFrame){
				if(!rule.active){
					rule.active = true;
					rule.countdown = rule.wait;
				}
			}else{
				rule.active = false;
			}

			// Countdown... and ACTIVATE!
			if(rule.active){
				rule.countdown -= delta;
				if(rule.countdown<=0){
					target.gotoFrameByName(rule.target+"_"+rule.thenGoToFrame);
					rule.active = false;
					return; // DONE! No more.
				}
			}

		}
	};

	// Show attacked icon!
	var IVE_BEEN_ATTACKED = false;
	var attackedIconShown = null; 
	var attackedTimer = 0;
	self.showAttackedIcon = function(type){
		IVE_BEEN_ATTACKED = true;
		if(type){
			attackedIconShown = type;
			var icon = self.fears[attackedIconShown];
			icon.x = 82;
			icon.y = 250;
			icon.alpha = 1;
		}
		iconAlpha_HACK = 1;
		attackedTimer = 0;
	};

}