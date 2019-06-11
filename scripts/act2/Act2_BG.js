Loader.addImages([
	{ id:"party_bg", src:"sprites/act2/party_bg.png" },
	{ id:"party_action", src:"sprites/act2/party_action.png" },
]);

function BG_Party(){

	var self = this;

	// Sprites!
	self.bgSprite = new Sprite({
		image: Library.images.party_bg,
		grid:{ width:1, height:1 },
		frame:{ width:720, height:1200 },
	});
	self.actionSprite = new Sprite({
		image: Library.images.party_action,
		grid:{ width:4, height:3 },
		frame:{ width:720, height:600 },
		y: 189
	});

	// Anxiety BG
	self.anxiety = new BG_Anxiety();

	// LAYERS
	self.layers = [
		self.bgSprite,
		self.anxiety,
		self.actionSprite
	];
	var PARALLAXES = [
		0.5, // party bg
		0.0, // anxiety bg
		1.0, // hong & hunter
	];
	var ALPHAS = [
		1.0, // party bg
		0.0, // anxiety bg
		1.0, // hong & hunter
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
			parallax = -t*200;

			// Anxiety Alpha
			ALPHAS[1] = t;

			// DONE
			if(t==1 || t==0){
				PARALLAXING = null;
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

	var _subscriptions = [];
	_subscriptions.push(
		subscribe("act2-out-1", function(){
			PARALLAXING = "out";
			sfx("whoosh"); // WHOOSH
		}),
		subscribe("act2-in-2", function(){
			PARALLAXING = "in";
			sfx("whoosh"); // WHOOSH
		}),
		subscribe("act2-out-3", function(){
			// WHOOSH
			sfx("whoosh");
		}),
		subscribe("act2-in-4", function(){
			// WHOOSH
			sfx("whoosh");
		}),
		subscribe("act2-out-5", function(){
			// WHOOSH
			sfx("whoosh");
		})
	);

}