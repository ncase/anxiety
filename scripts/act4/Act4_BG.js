Loader.addImages([
		
	{ id:"act4_callback", src:"sprites/act4/callback.png" },
	{ id:"a4_hong_walks_in", src:"sprites/act4/hong_walks_in.png" },
	{ id:"a4_hong_transition", src:"sprites/act4/hong_transition.png" },

	{ id:"break_hp", src:"sprites/act4/break_hp.png" },

	{ id:"al_shire", src:"sprites/act4/al_shire.png" },
	{ id:"hong_to_alshire", src:"sprites/act4/hong_to_alshire.png" },
	{ id:"bb_to_alshire", src:"sprites/act4/bb_to_alshire.png" },
	
	{ id:"hong_closer", src:"sprites/act4/hong_closer.png" },
	{ id:"bb_closer", src:"sprites/act4/bb_closer.png" },

	{ id:"sexy", src:"sprites/act4/sexy.png" }

]);

Loader.addSounds([
	{ id:"yaps", src:"sounds/sfx/yaps.mp3" },
	{ id:"youbothwin", src:"sounds/stings/you_both_winMIX.mp3" },

	{ id:"smash_glass", src:"sounds/sfx/smash_glass.mp3" },
	{ id:"alshire_run", src:"sounds/sfx/alshire_run.mp3" },
	{ id:"hiya", src:"sounds/sfx/hiya.mp3" },
]);

function BG_Act4(){

	var self = this;

	// BACKGROUND SPRITES
	var BGSpriteConfig = {
		image: Library.images.intro_bg,
		grid:{ width:2, height:3 },
		frame:{ width:1200, height:1200 },
		anchor:{ x:0, y:0 },
		frameNames:[ "sky", "clouds", "buildings", "grass", "stump" ],
		x:0, y:0
	};
	self.sky = new Sprite(BGSpriteConfig);
	self.sky.gotoFrameByName("sky");
	self.clouds = new Sprite(BGSpriteConfig);
	self.clouds.gotoFrameByName("clouds");
	self.buildings = new Sprite(BGSpriteConfig);
	self.buildings.gotoFrameByName("buildings");
	self.grass = new Sprite(BGSpriteConfig);
	self.grass.gotoFrameByName("grass");
	self.stump = new Sprite(BGSpriteConfig);
	self.stump.gotoFrameByName("stump");

	/////////////////////////////////////////////
	// EXTERNAL WORLD SPRITES ///////////////////
	/////////////////////////////////////////////

	// Hong in
	self.hong_walks_in = new Sprite({
		image: Library.images.a4_hong_walks_in,
		grid:{ width:8, height:3 },
		frame:{ width:720, height:500 },
		anchor:{ x:0, y:0 },
		x:0, y:200
	});
	self.hong_walks_in.gotoFrame(19); // blank

	// Callback
	self.callback = new Sprite({
		image: Library.images.act4_callback,
		grid:{ width:2, height:1 },
		frame:{ width:400, height:200 },
		y: 347
	});
	self.callback.gotoFrame( _.act1_ending=="fight" ? 0 : 1 );

	var hongSitsSprite = {
		image: Library.images.a4_hong_transition,
		grid:{ width:8, height:3 },
		frame:{ width:720, height:500 },
		anchor:{ x:0, y:0 },
		x:0, y:200
	};

	// The crutches
	self.crutches = new Sprite(hongSitsSprite);
	self.crutches.gotoFrame(2);
	self.crutches.visible = false;
	
	// The legs
	self.legs = new Sprite(hongSitsSprite);
	self.legs.gotoFrame( _.INJURED ? 1 : 0);
	self.legs.visible = false;

	// Hong transition
	self.hong_transition = new Sprite(hongSitsSprite);
	self.hong_transition.gotoFrame(3);
	self.hong_transition.visible = false;

	// Hong transition Cone
	self.hong_transition_cone = new Sprite(hongSitsSprite);	
	self.hong_transition_cone.gotoFrame(6);
	self.hong_transition_cone.visible = false;
	
	// Alshire
	self.alshire = new Sprite({
		image: Library.images.al_shire,
		grid:{ width:8, height:3 },
		frame:{ width:360, height:360 },
		y: 190
	});
	self.alshire.visible = false;

	// Hong alshire
	self.hong_to_alshire = new Sprite({
		image: Library.images.hong_to_alshire,
		grid:{ width:8, height:2 },
		frame:{ width:300, height:300 },
		/*x:210,*/ y:258
	});
	self.hong_to_alshire.visible = false;

	// BB alshire
	var bb_to_alshire_sprite = {
		image: Library.images.bb_to_alshire,
		grid:{ width:4, height:1 },
		frame:{ width:200, height:300 },
		/*x:261,*/ y:281
	};
	self.bb_to_alshire = new Sprite(bb_to_alshire_sprite);
	self.bb_to_alshire.visible = false;

	/////////////////////////////////////////////
	// INTERNAL WORLD SPRITES ///////////////////
	/////////////////////////////////////////////

	// Anxiety BG... WHITE MODE
	self.anxiety = new BG_Anxiety(true);

	// Hong
	self.hong = new Act4_Hong();
	
	// BB
	self.beebee = new Act4_Beebee();
	
	// Smash Sprite
	var break_hp_sprite = {
		image: Library.images.break_hp,
		grid:{ width:8, height:2 },
		frame:{ width:720, height:1000 },
	};
	self.break_hp = new Sprite(break_hp_sprite);
	self.break_hp.y = -70;
	self.break_hp.visible = false;
	self.break_hp_cone = new Sprite(break_hp_sprite);
	self.break_hp_cone.visible = false;

	// Hong Closer
	self.hong_closer = new Sprite({
		image: Library.images.hong_closer,
		grid:{ width:8, height:1 },
		frame:{ width:300, height:300 },
		y: 270
	});
	self.hong_closer.visible = false;

	// BB Closer
	var bb_closer_sprite = {
		image: Library.images.bb_closer,
		grid:{ width:8, height:4 },
		frame:{ width:500, height:500 },
		y: 200
	};
	self.bb_closer = new Sprite(bb_closer_sprite);
	self.bb_closer.visible = false;
	self.bb_closer_cone = new Sprite(bb_closer_sprite);
	self.bb_closer_cone.visible = false;
	self.bb_closer_cone.gotoFrame(28);
	self.bb_closer_coneb = new Sprite(bb_closer_sprite);
	self.bb_closer_coneb.visible = false;
	self.bb_closer_coneb.gotoFrame(29);

	// LAYERS
	self.layers = [
		
		self.sky,
		self.clouds,
		self.buildings,
		self.grass,

		self.alshire,

		self.hong_walks_in,
		self.callback,

		self.stump,

		self.crutches,
		self.anxiety,
		self.legs,
		self.hong_transition,
		self.hong_transition_cone,

		self.break_hp,
		self.break_hp_cone,

		self.hong,
		self.beebee,

		self.hong_to_alshire,
		self.bb_to_alshire,

		self.hong_closer,
		self.bb_closer_coneb,
		self.bb_closer,
		self.bb_closer_cone,

	];
	var PARALLAXES = [
		
		0, // sky
		0.1, // clouds
		0.25, // buildings
		0.48, // grass

		0.8, // alshire

		1.0, // hong_walks_in
		1.0, // callback

		1.0, // stump

		1.0, // crutches
		0.0, // anxiety
		1.0, // legs
		1.0, // hong_transition
		1.0, // hong_transition_cone

		0, // break_hp
		0, // break_hp_cone

		1.0, // hong
		1.0, // beebee

		1.0, // hong_to_alshire
		1.0, // bb_to_alshire

		1.0, // hong_closer,
		1.0, // bb_closer_coneb
		1.0, // bb_closer,
		1.0, // bb_closer_cone,

	];
	var ALPHAS = [

		1.0, // sky
		1.0, // clouds
		1.0, // buildings
		1.0, // grass

		1.0, // alshire

		1.0, // hong_walks_in
		1.0, // callback
		
		1.0, // stump
		
		1.0, // crutches
		0.0, // anxiety
		1.0, // legs
		1.0, // hong_transition
		1.0, // hong_transition_cone

		1.0, // break_hp
		1.0, // break_hp_cone

		0.0, // hong
		0.0, // beebee

		1.0, // hong_to_alshire
		1.0, // bb_to_alshire

		1.0, // hong_closer,
		1.0, // bb_closer_coneb
		1.0, // bb_closer,
		1.0, // bb_closer_cone,

	];
	var MAGIC_NUMBER_2 = 163;
	var OFFSETS = [

		0, // sky
		0, // clouds
		0, // buildings
		0, // grass

		0, // alshire

		0, // hong_walks_in
		0, // callback
		
		0, // stump
		
		207, // crutches
		0, // anxiety
		207, // legs
		207, // hong_transition
		207, // hong_transition_cone

		0, // break_hp
		0, // break_hp_cone

		0, // hong
		0, // beebee

		210, // hong_to_alshire
		261+100, // bb_to_alshire

		50 + MAGIC_NUMBER_2, // hong_closer,
		96 + MAGIC_NUMBER_2, // bb_closer_coneb
		96 + MAGIC_NUMBER_2, // bb_closer,
		96 + MAGIC_NUMBER_2, // bb_closer_cone,

	];

	// HACK: THE SEXY SCENE
	self.sexySprite = new Sprite({
		image: Library.images.sexy,
		grid:{ width:1, height:1 },
		frame:{ width:720, height:1200 },
	});
	self.sexySprite.visible = false;

	////////////////////////////////////////////////////////////////////////
	// ANIMATIONS... ///////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////

	// animation: { ticker:0, target:"sprite_name", frames:[{when:0, wait:0.1, then:4}, ...] }
	self.animations = [];
	self.createAnimation = function(spriteName, frames){
		self.animations.push({
			ticker: 0,
			target: spriteName,
			frames: frames
		});	
	};
	var _animSequence = function(from, to, duration, loop){
		var frames = [];
		for(var frame=from; frame<=to; frame++){
			
			if(loop){
				// LOOP
				var next = (frame==to) ? from : frame+1;
				frames.push({ when:frame, wait:duration, then:next });
			}else{
				// NOT LOOP: FINAL FRAME IS "TO"
				var next = frame+1;
				if(next<=to){
					frames.push({ when:frame, wait:duration, then:next });
				}
			}

		}
		return frames;
	};
	self.executeAnimation = function(anim, delta){

		// Frame...
		var sprite = self[anim.target];
		var frame = anim.frames.find(function(frame){
			return frame.when == sprite.currentFrame;
		});
		if(frame){

			var frameToGoTo = frame.when;

			// Next?
			anim.ticker += delta;
			if(anim.ticker >= frame.wait){
				anim.ticker = 0;
				frameToGoTo = frame.then;
			}

			// Change sprite
			sprite.gotoFrame(frameToGoTo);

		}

	};

	// SMASH THAT
	self.createAnimation("break_hp", _animSequence( 1,4, (1/12-0.01), true) );

	// ALSHIRE
	self.createAnimation("alshire", _animSequence( 4,5, 1/10, true) );
	self.createAnimation("alshire", _animSequence( 6,9, 1/15, true) );
	self.createAnimation("alshire", _animSequence( 11,22, 1/30, false) );

	// BB
	self.createAnimation("bb_closer", _animSequence( 18,21, 1/24, true) );

	////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////


	var parallax = 0;
	var parallaxTicker = 0;
	var PARALLAXING = null;
	var ANXIETY_INDEX = 9;
	var ticker = 0;
	var MAGIC_NUMBER = (210 + 8);

	self.update = function(delta){

		// TICKER
		ticker += delta;

		// CLOUD OFFSET
		OFFSETS[1] = 80 - ticker*3;

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
			parallax = -t*MAGIC_NUMBER;

			// Anxiety Alpha
			ALPHAS[ANXIETY_INDEX] = t;

			// DONE
			if(t==1 || t==0){
				PARALLAXING = null;

				// Seeing Al-Shire
				if(STAGE==2){
					self.break_hp.visible = false;
					self.bb_to_alshire.visible = true;
					self.bb_to_alshire.gotoFrame(_.INJURED ? 2 : 0); // CONE?
					ALPHAS[16] = 0; // BB
				}

			}

		}

		// Anxiety BG
		if(ALPHAS[ANXIETY_INDEX]>0){
			self.anxiety.updateAlpha(ALPHAS[ANXIETY_INDEX]);
			self.anxiety.update(delta);
		}

		// BREAK_HP'S ALPHA
		if(self.break_hp.visible){
			self.break_hp.alpha = ALPHAS[ANXIETY_INDEX];
		}

		// ALL ANIMS
		self.animations.forEach(function(anim){
			self.executeAnimation(anim, delta);
		});

	};

	self.draw = function(ctx, delta){

		if(self.sexySprite.visible){

			self.sexySprite.draw(ctx, delta);

		}else{

			// SUPER HACK FOR CONES

			// INTRO
			if(_.INJURED && self.hong_transition.visible && self.hong_transition.currentFrame>=16){
				self.hong_transition_cone.visible = true;
				self.hong_transition_cone.gotoFrame(self.hong_transition.currentFrame+5);
			}else{
				self.hong_transition_cone.visible = false;
			}

			// SMASHING
			if(self.break_hp.visible){
				self.break_hp.y = self.break_hp.y*0.8 + 0*0.2; // move in
			}
			if(_.INJURED && self.break_hp_cone.visible){
				self.break_hp_cone.gotoFrame( self.break_hp.currentFrame+5 );
			}
			self.break_hp_cone.y = self.break_hp.y;

			// ENDINGS YAP YAP YAP
			if(self.bb_closer.currentFrame>=13 && self.bb_closer.currentFrame<=15){
				self.bb_closer_coneb.gotoFrame(27);
				self.bb_closer_cone.gotoFrame(26);
			}
			if(self.bb_closer.currentFrame==16){
				self.bb_closer_coneb.gotoFrame(31); // blank
				self.bb_closer_cone.gotoFrame(17);
			}
			if(self.bb_closer.currentFrame>=18 && self.bb_closer.currentFrame<=21){
				self.bb_closer_coneb.gotoFrame(31); // blank
				self.bb_closer_cone.gotoFrame(self.bb_closer.currentFrame + 4); // CONE
			}

			// BB EASES IN
			if(self.bb_to_alshire.visible){
				OFFSETS[18] = OFFSETS[18]*0.9 + 261*0.1;
			}


			/////////////////////////////////////////

			var oldAlpha = ctx.globalAlpha;

			for(var i=0; i<self.layers.length; i++){
				
				var layer = self.layers[i];
				layer.x = PARALLAXES[i] * parallax + OFFSETS[i];
				
				// DON'T DRAW ANYTHING UNDER ANXIETY_INDEX WHEN'S IT'S 1
				var DONT_DRAW_BENEATH = (ALPHAS[ANXIETY_INDEX]==1);
				if(ALPHAS[i]>0){
					if( !(i<ANXIETY_INDEX && DONT_DRAW_BENEATH) ){
						ctx.globalAlpha = ALPHAS[i];
						layer.draw(ctx, delta);
					}
				}
			}

			ctx.globalAlpha = oldAlpha;

		}

	};

	var STAGE = 0;
	var _subscriptions = [];
	_subscriptions.push(

		subscribe("act4", function(thing, frame){
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
		subscribe("act4_hong_sits", function(){

			if(_.INJURED){
				self.crutches.visible = true;
				//self.hong_transition_cone.visible = true;
			}
			self.legs.visible = true;
			self.hong_walks_in.visible = false;
			self.hong_transition.visible = true;

		}),

		subscribe("act4-out-1", function(){
			
			STAGE = 1;
			PARALLAXING = "out";
			sfx("whoosh"); // WHOOSH
			
			// IT'S WHITE IN HERE
			window.BLACK_CTA = true;

		}),
		subscribe("act4-show-chars", function(){
			self.hong_transition.visible = false;
			ALPHAS[15] = 1; // Hong
			ALPHAS[16] = 1; // Beebee
		}),


		subscribe("smash", function(stage){
			if(stage==0){

				self.break_hp.visible = true;

				sfx("ui_show_choice", {volume:0.4});

				hong({ body:"normal", eyes:"look_up", mouth:"blank" });
				bb({ eyes:"normal_u" });

			}
			if(stage==1){
				
				ALPHAS[15] = 0; // Hong
				ALPHAS[16] = 0; // Beebee
				
				self.break_hp.gotoFrame(1);
				if(_.INJURED){
					self.break_hp_cone.visible = true;
					self.break_hp_cone.gotoFrame(1+5);
				}

			}
			if(stage==2){
				
				ALPHAS[15] = 1; // Hong
				ALPHAS[16] = 1; // Beebee

				self.break_hp.gotoFrame(5);
				self.break_hp_cone.visible = false;
				
			}
		}),

		subscribe("act4-in-2", function(){

			// Hide JUST HONG, parallax BB.
			ALPHAS[15] = 0; // Hong
			self.beebee.ALLOW_PARALLAX = true;
			PARALLAXES[16] = 1.0; // battle bb
			OFFSETS[16] = MAGIC_NUMBER*PARALLAXES[16]; // battle bb
			PARALLAXES[13] = 1.0; // break_hp
			OFFSETS[13] = MAGIC_NUMBER*PARALLAXES[13]; // break_hp

			// Show Alshire sprites
			self.alshire.visible = true;
			self.alshire.gotoFrame(23);
			self.hong_to_alshire.visible = true;

			// WHOOSH
			STAGE = 2;
			PARALLAXING = "in";
			sfx("whoosh");

			// IT'S DARK OUT HERE
			window.BLACK_CTA = false;

		}),

		subscribe("act4-out-3", function(){

			// WHOOSH
			STAGE = 3;
			PARALLAXING = "out";
			sfx("whoosh");

			// PARALLAX
			MAGIC_NUMBER = MAGIC_NUMBER_2;

			// JUMP CUT TO THE FINAL BB
			self.bb_to_alshire.visible = false;
			self.bb_closer.visible = true;
			if(_.INJURED){
				self.bb_closer_coneb.visible = true;
				self.bb_closer_cone.visible = true;
			}

			// IT'S WHITE IN HERE
			window.BLACK_CTA = true;

		}),
		subscribe("act4-jumpcut-hong", function(){
			self.hong_to_alshire.visible = false;
			self.hong_closer.visible = true;
		}),

		subscribe("act4-sexy", function(visible){
			self.sexySprite.visible = visible;
		})

	);

	self.kill = function(){
		_subscriptions.forEach(unsubscribe);
		window.BLACK_CTA = false; // back to normal
	};

}