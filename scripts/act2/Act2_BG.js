Loader.addImages([
	
	{ id:"party_bg", src:"sprites/act2/party_bg.png" },
	
	{ id:"dee", src:"sprites/act2/dee.png" },
	{ id:"dum", src:"sprites/act2/dum.png" },
	{ id:"party_hunter", src:"sprites/act2/party_hunter.png" },
	{ id:"party_hong", src:"sprites/act2/party_hong.png" },

	{ id:"act2_end", src:"sprites/act2/act2_end.png" },
	
	{ id:"SPECIAL_ATTACK", src:"sprites/act2/special.png" },

]);

Loader.addSounds([
	
	{ id:"squeak", src:"sounds/sfx/squeak.mp3" },
	{ id:"record_scratch", src:"sounds/sfx/record_scratch.mp3" },
	{ id:"hadouken", src:"sounds/sfx/hadouken.mp3" },
	{ id:"gravel", src:"sounds/sfx/gravel.mp3" },
	{ id:"slide", src:"sounds/sfx/slide.mp3" },
	{ id:"concrete_step1", src:"sounds/sfx/concrete_step1.mp3" },
	{ id:"concrete_step2", src:"sounds/sfx/concrete_step2.mp3" },
	{ id:"concrete_step3", src:"sounds/sfx/concrete_step3.mp3" },
	{ id:"concrete_step4", src:"sounds/sfx/concrete_step4.mp3" },
	{ id:"charging", src:"sounds/sfx/charging.mp3" },

]);

function BG_Party(){

	var self = this;

	// BACKGROUND SPRITES
	var BGSpriteConfig = {
		image: Library.images.party_bg,
		grid:{ width:5, height:1 },
		frame:{ width:1000, height:1200 },
	};
	self.bg = new Sprite(BGSpriteConfig);
	self.bg_peeps = new Sprite(BGSpriteConfig);
	self.bg_peeps.gotoFrame(1);
	self.couch = new Sprite(BGSpriteConfig);
	self.couch.gotoFrame(3);
	self.alshire = new Sprite(BGSpriteConfig);
	self.alshire.gotoFrame(4);

	// DEE & DUM
	self.dee = new Sprite({
		image: Library.images.dee,
		grid:{ width:4, height:2 },
		frame:{ width:400, height:400 },
	});
	self.dum = new Sprite({
		image: Library.images.dum,
		grid:{ width:4, height:2 },
		frame:{ width:400, height:400 },
	});
	self.dee.y = self.dum.y = 275;

	// HUNTER & HONG SPRITES
	self.party_hunter = new Sprite({
		image: Library.images.party_hunter,
		grid:{ width:4, height:6 },
		frame:{ width:720, height:500 },
	});
	self.party_hunter.y = 217;
	self.party_hong = new Sprite({
		image: Library.images.party_hong,
		grid:{ width:6, height:7 },
		frame:{ width:720, height:500 },
	});
	self.party_hong.y = 258.5;
	self.party_hong.gotoFrame(0);

	// HONG & BB FINALE
	self.act2_end = new Sprite({
		image: Library.images.act2_end,
		grid:{ width:6, height:3 },
		frame:{ width:720, height:400 },
		y: 260
	});

	// Anxiety BG
	self.anxiety = new BG_Anxiety();

	// Characters
	self.hong = new Act2_Hong();
	self.beebee = new Act2_Beebee();

	// LAYERS
	self.layers = [

		self.bg,
		self.bg_peeps,
		self.dee,
		self.dum,
		self.party_hunter,

		self.anxiety,
		self.party_hong,

		self.hong,
		self.beebee,
		self.act2_end,

		self.couch,
		self.alshire

	];
	var PARALLAXES = [
		
		0.1, // party bg
		0.5, // party bg peeps
		0.9, // dee
		0.9, // dum
		1.0, // hunter (at first...)

		0.0, // anxiety bg

		1.0, // party hong
		
		0.0, // battle hong
		1.0, // battle beebee
		0.0, // act2 end

		2.1, // couch
		2.2, // al shire

	];
	var OFFSETS = [

		0, // party bg
		0, // party bg peeps
		0, // dee
		0, // dum
		0, // hunter (at first...)

		0, // anxiety bg

		20, // party hong
		
		0, // battle hong
		240, // battle beebee
		0, // act2 end

		0, // couch
		0, // al shire

	];
	var ALPHAS = [
		
		1.0, // party bg
		1.0, // party bg peeps
		1.0, // dee
		1.0, // dum
		1.0, // hunter (at first...)

		0.0, // anxiety bg

		1.0, // party hong
		
		0.0, // battle hong
		0.0, // battle beebee
		0.0, // act2 end

		1.0, // couch
		1.0, // al shire

	];

	var parallax = 0;
	var parallaxTicker = 0;
	var PARALLAXING = null;
	var MAGIC_NUMBER = 230;
	var ticker = 0;
	var ticker2 = 0;
	var ticker3 = 0;
	self.update = function(delta){

		// START PARALLAXING IN / OUT
		if(PARALLAXING!=null){
			
			if(PARALLAXING=="out"){
				parallaxTicker += delta; // 0 to 1 in one second
			}
			if(PARALLAXING=="in"){
				parallaxTicker -= delta; // 1 to 0 in one second
			}
			if(parallaxTicker>1) parallaxTicker = 1;
			if(parallaxTicker<0) parallaxTicker = 0;

			// 0 to -180 in one second, smoothed
			var t = Math.cos(parallaxTicker*Math.TAU/2); // 1 to -1
			t = (1-t)/2; // 0 to 1
			parallax = -t*MAGIC_NUMBER; // MAGIC NUMBER

			// Anxiety Alpha
			ALPHAS[5] = t;

			// DONE
			if(t==1 || t==0){
				PARALLAXING = null;

				// Stage 1 or 3 transition end
				if(STAGE==1 || STAGE==3){
					ALPHAS[6] = 0; // HIDE Party Hong
					ALPHAS[7] = 1; // SHOW Battle Hong
				}

				// Stage 2 end
				if(STAGE==2){
					ALPHAS[8] = 0; // HIDE Battle Beebee
				}

				// Stage 4 end
				if(STAGE==4){
					ticker = 0;
					ALPHAS[8] = 0; // HIDE Battle Beebee
				}

				// Stage 5 transition end
				if(STAGE==5){
					ALPHAS[6] = 0; // HIDE Party Hong
					ALPHAS[9] = 1; // SHOW End
					self.act2_end.gotoFrame(1);
				}

			}else{
				if(STAGE==4){
					OFFSETS[8] += 2; // BYE BB
				}
			}

		}

		// Anxiety BG
		if(ALPHAS[5]>0){
			self.anxiety.updateAlpha(ALPHAS[5]);
			self.anxiety.update(delta);
			if(ALPHAS[5]==1){ // if fully visible...
				// hide everything under
				ALPHAS[0] = 0;
				ALPHAS[1] = 0;
				ALPHAS[2] = 0;
				ALPHAS[3] = 0;
				ALPHAS[4] = 0;
			}else{
				// show everything under
				ALPHAS[0] = 1;
				ALPHAS[1] = 1;
				ALPHAS[2] = 1;
				ALPHAS[3] = 1;
				ALPHAS[4] = 1;
			}
		}

		// SUPER HACKY - ANIMATE PARTY-HONG
		if(self.party_hong.currentFrame>=5 && self.party_hong.currentFrame<11){
			if(ticker<1/20){
				ticker += delta;
			}else{
				ticker = 0;
				self.party_hong.nextFrame();
			}
		}else if(self.party_hong.currentFrame>=26 && self.party_hong.currentFrame<32){
			if(ticker<1/15){
				ticker += delta;
			}else{
				ticker = 0;
				self.party_hong.nextFrame();
			}
		}else if(self.party_hong.currentFrame>=36 && self.party_hong.currentFrame<=39){
			if(ticker<1/15){
				ticker += delta;
			}else{
				ticker = 0;
				if(self.party_hong.currentFrame==39){
					self.party_hong.gotoFrame(36);
				}else{
					self.party_hong.nextFrame();
				}
			}
		}else{
			ticker = 0;
		}

		// SUPER HACKY - ANIMATE PARTY-HUNTER
		if(self.party_hunter.currentFrame>=19 && self.party_hunter.currentFrame<=20){
			if(ticker2<1/3){
				ticker2 += delta;
			}else{
				ticker2 = 0;
				if(self.party_hunter.currentFrame==20){
					self.party_hunter.gotoFrame(19);
				}else{
					self.party_hunter.nextFrame();
				}
			}
		}else{
			ticker2 = 0;
		}

		// SUPER HACKER - ANIMATE THE END
		if(self.act2_end.currentFrame>=2 && self.act2_end.currentFrame<10){
			if(ticker3<1/15){
				ticker3 += delta;
			}else{
				ticker3 = 0;
				self.act2_end.nextFrame();
			}
		}else{
			ticker3 = 0;
		}

	};

	self.draw = function(ctx, delta){

		var oldAlpha = ctx.globalAlpha;

		for(var i=0; i<self.layers.length; i++){
			var layer = self.layers[i];
			layer.x = PARALLAXES[i] * parallax + OFFSETS[i];
			if(ALPHAS[i]>0){
				ctx.globalAlpha = ALPHAS[i];
				layer.draw(ctx, delta);
			}
		}

		ctx.globalAlpha = oldAlpha;

	};

	var STAGE = 0;
	var _subscriptions = [];
	_subscriptions.push(
		subscribe("act2", function(thing, frame){
			if(typeof frame=="string"){
				if(frame=="next"){
					self[thing].nextFrame();
				}else{
					self[thing].gotoFrameByName(frame);
				}
			}else{
				self[thing].gotoFrame(frame);
			}
		}),
		subscribe("act2-out-1", function(){

			// ANIMATE PARTY HONG
			ticker = 0;
			self.party_hong.gotoFrame(5);

			STAGE = 1;
			PARALLAXING = "out";
			sfx("whoosh"); // WHOOSH
			ALPHAS[8] = 1; // SHOW Battle Beebee
		}),
		subscribe("act2-in-2", function(){

			MAGIC_NUMBER = 210;
			OFFSETS[8] = 220; // BB

			// Dee & Dum! And Al-Shire is gone. And BG peeps change
			self.dee.gotoFrame(4);
			self.dum.gotoFrame(4);
			self.bg_peeps.gotoFrame(2);
			self.alshire.visible = false;

			// Party Hong
			self.party_hunter.gotoFrame(3); // look right
			self.party_hong.gotoFrame(12); // look left

			ALPHAS[6] = 1; // SHOW Party Hong
			ALPHAS[7] = 0; // HIDE Battle Hong

			// WHOOSH
			STAGE = 2;
			PARALLAXING = "in";
			sfx("whoosh");

		}),
		subscribe("act2-out-3", function(){

			MAGIC_NUMBER = 150;
			PARALLAXES[10] = 3.2; // COUCH
			OFFSETS[8] = 170; // BB

			STAGE = 3;
			PARALLAXING = "out";
			sfx("whoosh"); // WHOOSH
			ALPHAS[8] = 1; // SHOW Battle Beebee
		}),
		subscribe("act2-in-4", function(){

			// Dee & Dum
			self.dee.gotoFrame(5);
			self.dum.gotoFrame(5);

			// Party Hunter & Hong
			self.party_hunter.gotoFrame(13); // disappointed
			self.party_hong.gotoFrame(25); // shocked

			ALPHAS[6] = 1; // SHOW Party Hong
			ALPHAS[7] = 0; // HIDE Battle Hong
			//ALPHAS[8] = 0; // HIDE Battle Beebee

			// WHOOSH
			STAGE = 4;
			PARALLAXING = "in";
			sfx("whoosh");

		}),
		subscribe("act2-out-5", function(){

			// RUN FAST, PARALLAX
			PARALLAXES[0] *= 3;
			PARALLAXES[1] *= 3;
			PARALLAXES[2] *= 3;
			PARALLAXES[3] *= 3;
			PARALLAXES[4] *= 3;
			PARALLAXES[10] *= 3;

			STAGE = 5;
			PARALLAXING = "out";
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

	self.kill = function(){
		_subscriptions.forEach(unsubscribe);
	};

}