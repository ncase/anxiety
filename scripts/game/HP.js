// Singleton - it's always there!
window.HP = new HitPoints();

// The Class!
function HitPoints(){

	var self = this;

	// My DOM & canvas
	self.dom = document.querySelector("#game_hp");
	self.canvas = document.createElement("canvas");
	self.canvas.width = 360 * 2;
	self.canvas.height = 100 * 2;
	self.canvas.style.width = self.canvas.width/2 + "px";
	self.canvas.style.height = self.canvas.height/2 + "px";
	self.context = self.canvas.getContext("2d");
	self.dom.appendChild(self.canvas);

	// My sprite
	self.image = new Image();
	self.image.src = "sprites/hp.png";

	// My stats
	self.reset = function(){
		self.hong = 100;
		self.beebee = 100;
	};
	self.reset();

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
	// TODO: SHAKING BASED ON AMOUNT OF ABSOLUTE DAMAGE.
	self.attackHong = function(str){
		self.doDamage(str, "hong");
		self.leftShake = 30;
		publish("hong",["attacked"]);
	};
	self.attackBeebee = function(str){
		self.doDamage(str, "beebee");
		self.rightShake = 30;
	};

	// Draw
	self.leftShake = 0;
	self.leftWidth = 360;
	self.rightShake = 0;
	self.rightWidth = 360;
	self.drawHalf = function(ctx, isRight){

		ctx.save();

		// Which side?
		var side = isRight ? "right" : "left";
		var hp = isRight ? self.beebee : self.hong;

		// Shaking
		if(self[side+"Shake"]>0){
			var amp = self[side+"Shake"]/7;
			var shakeY = Math.sin(self[side+"Shake"]*1.3)*amp;
			ctx.translate(0,shakeY);
			self[side+"Shake"]--;
		}else{
			self[side+"Shake"]=0;
		}

		// BLACK
		var sx=isRight ? 360 : 0, sy=0, sw=360, sh=150;
		ctx.drawImage(self.image, sx,sy,sw,sh, sx/2,sy/2,sw/2,sh/2); // black 

		// RED
		var hpRatio = (hp+32)/(100+32); // 100,0 => 1,0.3
		sw = 360 * hpRatio;
		sy = 150;
		self[side+"Width"] = self[side+"Width"]*0.8 + sw*0.2;
		sw = self[side+"Width"];
		if(sw>88){
			if(isRight){
				ctx.drawImage(self.image, sx+(360-sw),sy,sw,sh, 360/2,0,sw/2,sh/2);
			}else{
				ctx.drawImage(self.image, sx,sy,sw,sh, (360-sw)/2,0,sw/2,sh/2);
			}
		}
		if(self[side+"WhiteWidth"]>sw && self[side+"Shake"]<=0){
			self[side+"WhiteWidth"] -= 0.6;
		}

		ctx.restore();

	};
	self.draw = function(){

		var ctx = self.context;
		ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
		ctx.save();
		ctx.scale(2,2);

		// Draw BG
		var sx=0, sy=600, sw=720, sh=200; 
		ctx.drawImage(self.image, sx,sy,sw,sh, 0,0,sw/2,sh/2);

		// Draw Left & Right Sides
		self.drawHalf(ctx, false);
		self.drawHalf(ctx, true);

		// Draw "Timer"
		var sx=0, sy=450, sw=720, sh=150; 
		ctx.drawImage(self.image, sx,sy,sw,sh, 0,0,sw/2,sh/2);

		ctx.restore();
	};

}