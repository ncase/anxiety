/***************************************************

A sprite built off this config:
{
	image: image,
	grid:{ // in frames
		width: 2,
		height: 2
	},
	frame:{ // in pixels
		width: 100,
		height: 100
	},
	anchor:{ // in pixels. optional.
		x: 10,
		y: 30
	},
	frameNames:[ // optional
		"one",
		"two",
		"three"
	],
	x: 0, // optional
	y: 0, // optional
	rotation: 0, // optional
	scale: 1, // optinal
	squash: 1, // optional
}


***************************************************/

function Sprite(config){

	var self = this;

	// Sprite image & dimensions
	self.image = config.image;
	self.grid = config.grid;
	self.frame = config.frame;

	// Sprite anchor
	self.anchor = {};
	config.anchor = config.anchor || {};
	self.anchor.x = config.anchor.x || 0;
	self.anchor.y = config.anchor.y || 0;

	// Current frame
	self.currentFrame = 0;
	self.currentFrameName = "";
	self.frameNames = config.frameNames || [];
	self.gotoFrame = function(index){
		self.currentFrame = index;
		self.currentFrameName = self.frameNames[self.currentFrame] || "";
	};
	self.nextFrame = function(){
		self.gotoFrame(self.currentFrame+1);
	};
	self.gotoFrameByName = function(name){
		var index = self.frameNames.indexOf(name);
		self.gotoFrame(index);
	};
	self.doesFrameNameExist = function(name){
		return self.frameNames.indexOf(name)>=0;
	};
	self.gotoFrame(0);

	// Other transformations
	self.x = config.x || 0;
	self.y = config.y || 0;
	self.rotation = config.rotation || 0;
	self.scale = config.scale || 1;
	self.squash = config.squash || 1;
	self.alpha = config.alpha || 1;

	// Visible at all?
	self.visible = true;
	
	// Draw frame!
	self.draw = function(ctx){

		if(!self.visible) return; // nah
		if(self.alpha==0) return; // also nah

		// Which part of image to draw?
		var sx = self.currentFrame % self.grid.width;
		var sy = Math.floor((self.currentFrame - sx)/self.grid.width);
		var fw = self.frame.width;
		var fh = self.frame.height;

		// Translate...
		var dx = self.x;
		var dy = self.y;
		ctx.translate(dx, dy);

		// Scale
		var scaleX = self.scale * self.squash;
		var scaleY = self.scale / self.squash;
		ctx.scale(scaleX, scaleY);

		// Rotation
		ctx.rotate(self.rotation);

		// Alpha
		var oldAlpha = ctx.globalAlpha;
		ctx.globalAlpha = self.alpha;

		// Draw it!
		ctx.drawImage(
			self.image,
			sx*fw, sy*fh, fw, fh,
			-self.anchor.x, -self.anchor.y, fw/2, fh/2
		);

		ctx.rotate(-self.rotation);
		ctx.scale(1 / scaleX, 1 / scaleY);
		ctx.translate(-dx, -dy);
		ctx.globalAlpha = oldAlpha;

	};

}