/*****

TODO:
- whoosh out @done
- put hong & beebee sprites in for battle @done
- characters in @done
- battle talk @done
- whoosh in @done
- party talk @done
- whoosh out @done
- battle talk 2 @done
- jarring image @done
- whoosh in @done
- slap dat/run out @done
- whoosh out @done

TODO:
- fight icons in bubble @done
- music & sounds
- put them in
- re-use old sound effects for now
// white noise shock sfx for bb
- sounds: Hunter's voice, slap, white noise electic attack, party ambience, bottle slosh

****/

Loader.addImages([
	{ id:"party_bg", src:"sprites/act2/party_bg.png" },
	{ id:"party_action", src:"sprites/act2/party_action.png" },
	{ id:"hong_bb_outro", src:"sprites/act2/hong_bb_outro.png" },
	{ id:"SPECIAL_ATTACK", src:"sprites/act2/special.png" },
]);

function BG_Party(){

	var self = this;

	// Sprites!
	self.bgSprite = new Sprite({
		image: Library.images.party_bg,
		grid:{ width:1, height:1 },
		frame:{ width:720, height:1200 },
	});
	self.partyActionSprite = new Sprite({
		image: Library.images.party_action,
		grid:{ width:4, height:3 },
		frame:{ width:720, height:600 },
		y: 189,
		frameNames:[
			"pre",
			"twist1",
			"twist2",
			"twist3",
			"twist4",
			"end",
			"end_run",
			"end_slap1",
			"end_slap2",
			"end_slap3"
		]
	});
	self.outroSprite = new Sprite({
		image: Library.images.hong_bb_outro,
		grid:{ width:4, height:2 },
		frame:{ width:720, height:400 },
		y: 260,
		frameNames:[
			"end1",
			"end2",
			"end3",
			"end4",
			"end5",
			"end6"
		]
	});

	// Anxiety BG
	self.anxiety = new BG_Anxiety();

	// Characters
	self.hong = new Act2_Hong();
	self.beebee = new Act2_Beebee();

	// LAYERS
	self.layers = [
		self.bgSprite,
		self.anxiety,
		self.partyActionSprite,
		self.outroSprite,
		self.hong,
		self.beebee,
	];
	var PARALLAXES = [
		0.5, // party bg
		0.0, // anxiety bg
		1.0, // PARTY ACTION SPRITE
		0.0, // OUTRO hong & bb
		0.0, // battle hong
		0.0, // battle beebee
	];
	var ALPHAS = [
		1.0, // party bg
		0.0, // anxiety bg
		1.0, // PARTY ACTION SPRITE
		0.0, // OUTRO hong & bb
		0.0, // battle hong
		0.0, // battle beebee
	];

	var parallax = 0;
	var parallaxTicker = 0;
	var PARALLAXING = null;
	self.update = function(){

		// START PARALLAXING IN / OUT
		if(PARALLAXING!=null){
			
			if(PARALLAXING=="out"){
				parallaxTicker += 1/60; // 0 to 1 in one second
			}
			if(PARALLAXING=="in"){
				parallaxTicker -= 1/60; // 1 to 0 in one second
			}
			if(parallaxTicker>1) parallaxTicker = 1;
			if(parallaxTicker<0) parallaxTicker = 0;

			// 0 to -180 in one second, smoothed
			var t = Math.cos(parallaxTicker*Math.TAU/2); // 1 to -1
			t = (1-t)/2; // 0 to 1
			parallax = -t*210;

			// Anxiety Alpha
			ALPHAS[1] = t;

			// DONE
			if(t==1 || t==0){
				PARALLAXING = null;

				// Stage 1 or 3 transition end
				if(STAGE==1 || STAGE==3){
					ALPHAS[2] = 0; // Party Action
					ALPHAS[4] = 1; // Hong
					ALPHAS[5] = 1; // Beebee
				}

				// Stage 5 transition end
				if(STAGE==5){
					ALPHAS[2] = 0; // Party Action
					ALPHAS[3] = 1; // OUTRO Action
				}

			}

		}

		// Anxiety BG
		if(ALPHAS[1]>0){
			self.anxiety.update(ALPHAS[1]);
			if(ALPHAS[1]==1){ // if fully visible...
				ALPHAS[0] = 0; // hide everything under
			}else{
				ALPHAS[0] = 1; // show everything under
			}
		}

	};

	self.draw = function(ctx){

		ctx.save();

		for(var i=0; i<self.layers.length; i++){
			var layer = self.layers[i];
			layer.x = PARALLAXES[i] * parallax;// - OFFSETS[i];
			if(ALPHAS[i]>0){
				ctx.globalAlpha = ALPHAS[i];
				layer.draw(ctx);
			}
		}

		ctx.restore();

	};

	var STAGE = 0;
	var _subscriptions = [];
	_subscriptions.push(
		subscribe("act2-out-1", function(){
			STAGE = 1;
			PARALLAXING = "out";
			sfx("whoosh"); // WHOOSH
		}),
		subscribe("act2-in-2", function(){

			// SHOW ACTION, HIDE CHARS
			ALPHAS[2] = 1; // Party Action
			ALPHAS[4] = 0; // Hong
			ALPHAS[5] = 0; // Beebee

			// WHOOSH
			STAGE = 2;
			PARALLAXING = "in";
			sfx("whoosh");

		}),
		subscribe("act2-out-3", function(){
			STAGE = 3;
			PARALLAXING = "out";
			sfx("whoosh"); // WHOOSH
		}),
		subscribe("act2-in-4", function(){

			// SHOW ACTION, HIDE CHARS
			ALPHAS[2] = 1; // Party Action
			ALPHAS[4] = 0; // Hong
			ALPHAS[5] = 0; // Beebee

			// WHOOSH
			STAGE = 4;
			PARALLAXING = "in";
			sfx("whoosh");

		}),
		subscribe("act2-out-5", function(){
			STAGE = 5;
			PARALLAXING = "out";
		}),
		subscribe("act2-party-action", function(frameName){
			self.partyActionSprite.gotoFrameByName(frameName);
		}),
		subscribe("act2-outro", function(frameName){
			self.outroSprite.gotoFrameByName(frameName);
		}),
		subscribe("show_special_attack", function(){
			var dom = $("#special_attack");
			dom.setAttribute("attack", _.SPECIAL_ATTACK);
			dom.style.display = "block";
		}),
		subscribe("remove_special_attack", function(){
			var dom = $("#special_attack");
			dom.style.display = "none";
		})
	);

}