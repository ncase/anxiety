Loader.addImages([
	{ id:"rooftop_bg", src:"sprites/act3/rooftop_bg.png" },
	{ id:"rooftop_hunter", src:"sprites/act3/hunter.png" },
	{ id:"rooftop_hong", src:"sprites/act3/hong.png" }
]);

function BG_Rooftop(){

	var self = this;

	// Sprites!
	self.bgSprite = new Sprite({
		image: Library.images.rooftop_bg,
		grid:{ width:1, height:1 },
		frame:{ width:720, height:1200 },
	});
	self.hunterSprite = new Sprite({
		image: Library.images.rooftop_hunter,
		grid:{ width:4, height:1 },
		frame:{ width:400, height:400 },
		y: 200,
		frameNames:[
			"side_smile",
			"side_neutral",
			"front_evil",
			"front_shock"
		]
	});
	self.hongSprite = new Sprite({
		image: Library.images.rooftop_hong,
		grid:{ width:6, height:7 },
		frame:{ width:720, height:800 },
		y: 225
	});

	// Anxiety BG
	self.anxiety = new BG_Anxiety();

	// Characters
	self.hong = new Act3_Hong();
	self.beebee = new Act3_Beebee();

	// LAYERS
	self.layers = [
		self.bgSprite,
		self.hunterSprite,
		self.anxiety,
		self.hongSprite,
		self.hong,
		self.beebee
	];
	var PARALLAXES = [
		0.5, // party bg
		0.6, // HUNTER SPRITE
		0.0, // anxiety bg
		1.0, // HONG SPRITE
		0.0, // battle hong
		0.0, // battle beebee
	];
	var ALPHAS = [
		1.0, // party bg
		1.0, // HUNTER SPRITE
		0.0, // anxiety bg
		1.0, // HONG SPRITE
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
			parallax = -t*190;

			// Anxiety Alpha
			ALPHAS[2] = t;

			// DONE
			if(t==1 || t==0){
				PARALLAXING = null;

				// Stage 1 transition end
				if(STAGE==1){
					ALPHAS[1] = 0; // HIDE Hunter
					ALPHAS[3] = 0; // HIDE Old Hong
					ALPHAS[4] = 1; // SHOW new hong
					ALPHAS[5] = 1; // SHOW Beebee
				}

			}

		}

		// Anxiety BG
		if(ALPHAS[2]>0){
			self.anxiety.update(ALPHAS[2]);
			if(ALPHAS[2]==1){ // if fully visible...
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
		subscribe("act3-out", function(){
			STAGE = 1;
			PARALLAXING = "out";
			sfx("whoosh"); // WHOOSH
		}),
		subscribe("act3-in", function(){

			// SHOW ACTION, HIDE CHARS
			ALPHAS[1] = 1; // SHOW Hunter
			ALPHAS[3] = 1; // SHOW Roof Hong
			ALPHAS[4] = 0; // HIDE battle Hong
			ALPHAS[5] = 0; // HIDE battle Beebee

			// WHOOSH
			STAGE = 2;
			PARALLAXING = "in";
			sfx("whoosh");

		}),

		// HUNTER FRAME
		subscribe("hunter-roof", function(frameName){
			self.hunterSprite.gotoFrameByName(frameName);
		}),

		// JUMP OFF
		subscribe("start-jump-anim", function(){
			self.hongSprite.gotoFrame(4);
			self.hunterSprite.gotoFrameByName("front_evil");
		}),
		subscribe("hong-next", function(){
			self.hongSprite.nextFrame();
		}),

		// WALK AWAY
		subscribe("start-walkaway-anim", function(){
			self.hongSprite.gotoFrame(23);
			self.hunterSprite.gotoFrameByName("side_smile");
		})
	);

}