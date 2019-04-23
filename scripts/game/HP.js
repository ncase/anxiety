Loader.addImages([
	{ id:"hp", src:"sprites/ui/hp.png" }
]);

Loader.addSounds([
	{ id:"hit", src:"sounds/sfx/hit.mp3" },
	{ id:"hit_big", src:"sounds/sfx/hit_big.mp3" }
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
	};
	self.reset();

	// Show/hide
	self.show = function(){
		self.dom.style.top = "0px";
	};
	self.hide = function(){
		self.dom.style.top = "-100px";
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
		}

		// Sound
		if(damage=="100p"){ // FULL!
			sfx("hit_big");
		}else{
			sfx("hit");
		}

	});

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