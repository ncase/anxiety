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
	self.gotoFrameByName = function(name){
		var index = self.frameNames.indexOf(name);
		self.gotoFrame(index);
	};
	self.gotoFrame(0);

	// Other transformations
	self.x = config.x || 0;
	self.y = config.y || 0;
	self.rotation = config.rotation || 0;
	self.scale = config.scale || 1;
	self.squash = config.squash || 1;
	self.alpha = config.alpha || 1;
	
	// Helpers
	self.breathe = 0;
	self.breatheSpeed = 0;
	self.breatheAmp = 0;
	self.bounce = 1;
	self.bounceVel = 0;
	self.bounceDamp = 0.8;
	self.bounceHookes = 0.4;
	self.shake = 0;
	self.shakeAmp = 0;
	self.shakeSpeed = 0;
	self.shakeTimer = 0;

	// Update breath/bounce, all that jazz.
	self.update = function(){
		
		// Breathe
		self.breathe += self.breatheSpeed;

		// Bounce
		self.bounce += self.bounceVel;
		self.bounceVel -= (self.bounce-1) * self.bounceHookes;
		self.bounceVel *= self.bounceDamp;

		// Shake
		self.shakeTimer -= 1/60;
		if(self.shakeTimer>0){
			self.shake = Math.sin(self.shakeTimer*self.shakeSpeed*Math.PI*2) * self.shakeAmp;
		}else{
			self.shake = 0;
		}

	};

	// Draw frame!
	self.draw = function(ctx){

		ctx.save();

		// Which part of image to draw?
		var sx = self.currentFrame % self.grid.width;
		var sy = Math.floor((self.currentFrame - sx)/self.grid.width);
		var fw = self.frame.width;
		var fh = self.frame.height;

		// Translate...
		var dx = self.x + self.shake;
		var dy = self.y;
		ctx.translate(dx, dy);

		// Scale
		var breatheSquash = 1 + Math.sin(self.breathe)*self.breatheAmp;
		var totalSquash = self.squash * breatheSquash * self.bounce;
		var scaleX = self.scale * totalSquash;
		var scaleY = self.scale / totalSquash;
		ctx.scale(scaleX, scaleY);

		// Alpha
		ctx.globalAlpha = self.alpha;

		// Draw it!
		ctx.drawImage(
			self.image,
			sx*fw, sy*fh, fw, fh,
			-self.anchor.x, -self.anchor.y, fw/2, fh/2
		);

		ctx.restore();

	};

}