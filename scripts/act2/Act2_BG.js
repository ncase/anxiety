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

	// 

	self.update = function(){

	};

	self.draw = function(ctx){
		self.bgSprite.draw(ctx);
		self.actionSprite.draw(ctx);
	};

	var _subscriptions = [];
	_subscriptions.push(
		subscribe("act2-out-1", function(){
			// WHOOSH
			sfx("whoosh");
		});
		subscribe("act2-in-2", function(){
			// WHOOSH
			sfx("whoosh");
		});
		subscribe("act2-out-3", function(){
			// WHOOSH
			sfx("whoosh");
		});
		subscribe("act2-in-4", function(){
			// WHOOSH
			sfx("whoosh");
		});
		subscribe("act2-out-5", function(){
			// WHOOSH
			sfx("whoosh");
		});
	);

}