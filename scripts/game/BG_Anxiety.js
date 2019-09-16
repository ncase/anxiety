/******************************

A cool floating-squares dark background...
or maybe CA?

******************************/

function BG_Anxiety(whiteMode){

	var self = this;

	self.whiteMode = whiteMode;

	// Moving white boxes
	var BG_WIDTH = 360;
	var BG_HEIGHT = 600;
	self.boxes = [];
	self.resetBox = function(box, startInView){
		
		// Random size
		box.w = box.h = Math.random()*200 + 100;

		// Start in view?
		if(startInView){
			// Random position
			box.x = Math.random()*(BG_WIDTH+box.w*2) - box.w;
			box.y = Math.random()*(BG_HEIGHT+box.h*2) - box.h;
		}

		// Move horizontal-only or vertical-only
		if(Math.random()<0.5){
			box.velX = (Math.random()>0.5 ? -1 : 1) * (Math.random()*0.8+0.2);
			box.velY = 0;
		}else{
			box.velX = 0;
			box.velY = (Math.random()>0.5 ? -1 : 1) * (Math.random()*0.8+0.2);
		}

		// If NOT start in view, use Velocity to determine where to put box
		if(!startInView){

			// Horizontal
			if(box.velY==0){
				box.y = Math.random()*(BG_HEIGHT+box.h*2) - box.h;
				if(box.velX>0){ // ltr
					box.x = -box.w;
				}else{ // rtl
					box.x = BG_WIDTH;
				}
			}

			// Vertical
			if(box.velX==0){
				box.x = Math.random()*(BG_WIDTH+box.w*2) - box.w;
				if(box.velY>0){ // utd
					box.y = -box.h;
				}else{ // dtu
					box.y = BG_HEIGHT;
				}
			}

		}

	};

	self.isBoxOutOfSight = function(box){
		if(box.x < -box.w) return true;
		if(box.y < -box.h) return true;
		if(box.x > BG_WIDTH) return true;
		if(box.y > BG_HEIGHT) return true;
		return false;
	};

	self.updateBox = function(box, delta){
		// Move it
		const speedMultiplier = 60;
		box.x += box.velX * delta * speedMultiplier;
		box.y += box.velY * delta * speedMultiplier;

		// If it's out of sight, reset it
		if(self.isBoxOutOfSight(box)) self.resetBox(box);
	};
	
	var boxLayerAlpha = 1;
	self.updateAlpha = function(alpha){
		boxLayerAlpha = alpha;
	};

	self.update = function(delta){
		for(const box of self.boxes) self.updateBox(box, delta);
	};

	self.drawBox = function(box, ctx){
		ctx.fillRect(box.x, box.y, box.w, box.h);
	};

	self.draw = function(ctx){

		// A big ol' black box
		ctx.fillStyle = self.whiteMode ? "#dddddd" : "#111111";
		ctx.fillRect(0,0, BG_WIDTH, BG_HEIGHT);

		// Moving white boxes
		ctx.globalAlpha = boxLayerAlpha * (self.whiteMode ? 0.1 : 0.03);
		ctx.fillStyle = "#fff";
		for(const box of self.boxes) self.drawBox(box, ctx);
		ctx.globalAlpha = 1;

	};

	for(var i=0; i<40; i++){
		var box = {};
		self.resetBox(box, true);
		self.boxes.push(box);
	}

}