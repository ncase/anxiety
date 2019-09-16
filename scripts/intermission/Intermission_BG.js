Loader.addImages([
	{ id:"intermission_bg", src:"sprites/intermission/bg.png" },
	{ id:"intermission_bb", src:"sprites/intermission/bb.png" },
	{ id:"youwin", src:"sprites/intermission/youwin.png" }
]);

function BG_Intermission(STAGE){

	var self = this;

	// Sprites!
	self.bgSprite = new Sprite({
		image: Library.images.intermission_bg,
		grid:{ width:1, height:1 },
		frame:{ width:3000, height:3000 },
		anchor:{ x:1500/2, y:1500/2 },
		x:180, y:600
	});
	self.youwinSprite = new Sprite({
		image: Library.images.youwin,
		grid:{ width:1, height:2 },
		frame:{ width:720, height:600 }
	});
	self.youwinSprite.gotoFrame( STAGE==1 ? 0 : 1 );
	self.bbSprite = new Sprite({
		image: Library.images.intermission_bb,
		grid:{ width:1, height:2 },
		frame:{ width:720, height:500 },
		y: 410
	});
	self.bbSprite.gotoFrame( STAGE==1 ? 0 : 1 );

	self.update = function(delta){
		self.bgSprite.rotation += (delta/(1/60)) * Math.TAU/2500;
	};

	self.draw = function(ctx){
		self.bgSprite.draw(ctx);
		self.youwinSprite.draw(ctx);
		self.bbSprite.draw(ctx);
	};

	var _subscriptions = [];
	_subscriptions.push(
		subscribe("show_stats", function(){
			self.youwinSprite.visible = false;
		})
	);
	self.kill = function(){
		_subscriptions.forEach(unsubscribe);
	};

}