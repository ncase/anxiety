Loader.addImages([
	{ id:"hp", src:"sprites/ui/hp.png" }
]);

Loader.addSounds([
	{ id:"hit", src:"sounds/sfx/hit.mp3" },
	{ id:"hit_big", src:"sounds/sfx/hit_big.mp3" },
	{ id:"hit_bb", src:"sounds/sfx/hit_bb.mp3" }
]);


// The Class!
function HitPoints(){

	var self = this;

	// My DOM & canvas
	self.dom = $("#game_hp");
	self.canvas = document.createElement("canvas");
	self.canvas.width = 360 * 2;
	self.canvas.height = 100 * 2;
	self.canvas.style.width = self.canvas.width/2 + "px";
	self.canvas.style.height = self.canvas.height/2 + "px";
	self.context = self.canvas.getContext("2d");
	self.dom.appendChild(self.canvas);

	// My sprite
	self.image = Library.images.hp;

	// My stats
	self.reset = function(){
		self.hong = 100;
		self.beebee = 100;
		self.leftWhite = 1;
		self.rightWhite = 1;
	};
	self.reset();

	// Show/hide
	self.show = function(){
		self.dom.classList.add('show');
	};
	self.hide = function(instant){
		self.dom.classList.remove('show');
		if(instant) flushElementTransitions(self.dom);
	};
	subscribe("hp_show", self.show);
	subscribe("hp_hide", self.hide);

	// Attack!
	self.doDamage = function(str, target){

		// Absolute or Relative Damage?
		var num = parseFloat(str);
		var isAbsolute = (str.slice(-1)=="p"); // p = absolute, % = relative
		if(isAbsolute){
			self[target] -= num;
		}else{
			var relativeDamage = Math.floor( self[target] * (num/100) );
			self[target] -= relativeDamage;
		}

		// Floor bound
		if(self[target]<0){
			self[target] = 0;
		}

	};

	// Who's been attacked?
	subscribe("attack", function(target, damage, type){

		Game.clearText(); // BYE

		if(target=="hong"){
			self.doDamage(damage, "hong");
			self.leftShake = 30;
			publish("attack_hong",[type]);
		}else{
			self.doDamage(damage, "beebee");
			self.rightShake = 30;
			publish("attack_bb");
		}

		// Sound
		if(damage=="100p"){ // FULL!
			sfx("hit_big");
		}else{
			sfx("hit");
		}
		if(target=="bb"){
			sfx("hit_bb");
		}

	});

	// Draw
	self.leftShake = 0;
	self.leftRed = self.leftWhite = 1;
	self.rightShake = 0;
	self.rightRed = self.rightWhite = 1;
	self.drawHalf = function(ctx, isRight){

		var movedY = 0;
		let oldCompositeOp = ctx.globalCompositeOperation;

		// Which side?
		var side = isRight ? "right" : "left";
		var hp = isRight ? self.beebee : self.hong;

		// Shaking
		var stoppedShaking = (self[side+"Shake"]==0);
		if(stoppedShaking){
			self[side+"Shake"]=0;
		}else{
			var amp = self[side+"Shake"]/7;
			var shakeY = Math.sin(self[side+"Shake"]*1.3)*amp;
			ctx.translate(0,shakeY);
			movedY += shakeY;
			self[side+"Shake"]--;
		}

		// Damage
		if(!isRight){ // Hong
			var d = self.hong/100;
			self.leftRed = self.leftRed*0.8 + d*0.2;
			if(stoppedShaking){
				if(self.leftWhite > self.leftRed){
					self.leftWhite -= 0.001;
				}
			}
		}else{
			var d = self.beebee/100;
			self.rightRed = self.rightRed*0.8 + d*0.2;
			if(stoppedShaking){
				if(self.rightWhite > self.rightRed){
					self.rightWhite -= 0.001;
				}
			}
		}

		// BG: Black
		var sx=isRight ? 360 : 0, sy=200*0, sw=360, sh=200;
		ctx.drawImage(self.image, sx,sy,sw,sh, sx/2,0,sw/2,sh/2);

		// Draw White INSIDE (source-atop)
		if(self[side+"Shake"]==0){ // if not shaking, slowly reduce
			if( self[side+"WhiteWidth"] > self[side+"Width"] ){
				self[side+"WhiteWidth"] -= 0.1;
			}
		}
		var sx=isRight ? 360 : 0, sy=200*1, sw=360, sh=200;
		var offset = (1-self[side+"White"])*295;//self[side+"WhiteWidth"];
		offset *= isRight ? -1 : 1;
		ctx.globalCompositeOperation = "source-atop";
		if(isRight){
			ctx.drawImage(self.image, sx-offset,sy,sw-offset,sh, sx/2,0,(sw-offset)/2,sh/2);
		}else{
			ctx.drawImage(self.image, 0,sy,sw-offset,sh, offset/2,0,(sw-offset)/2,sh/2);
		}

		// Red
		var sx=isRight ? 360 : 0, sy=200*2, sw=360, sh=200;
		var offset = (1-self[side+"Red"])*295;//self[side+"WhiteWidth"];
		offset *= isRight ? -1 : 1;
		ctx.globalCompositeOperation = "source-atop";
		if(isRight){
			ctx.drawImage(self.image, sx-offset,sy,sw-offset,sh, sx/2,0,(sw-offset)/2,sh/2);
		}else{
			ctx.drawImage(self.image, 0,sy,sw-offset,sh, offset/2,0,(sw-offset)/2,sh/2);
		}

		// Restore
		ctx.translate(0, -movedY);
		ctx.globalCompositeOperation = oldCompositeOp;

	};
	self.draw = function(){

		var ctx = self.context;
		ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
		ctx.scale(2,2);

		// Draw Left & Right Sides
		self.drawHalf(ctx, false);
		self.drawHalf(ctx, true);

		// Draw BG BELOW
		ctx.globalCompositeOperation = "destination-over";
		var sx=0, sy=200*4, sw=720, sh=200; 
		ctx.drawImage(self.image, sx,sy,sw,sh, 0,0,sw/2,sh/2);

		// Draw "VS"
		ctx.globalCompositeOperation = "source-over";
		var sx=0, sy=200*3, sw=720, sh=200; 
		ctx.drawImage(self.image, sx,sy,sw,sh, 0,0,sw/2,sh/2);

		ctx.scale(0.5, 0.5);

	};

}