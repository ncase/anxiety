Loader.addImages([
		
	{ id:"credits_bb_dance", src:"sprites/credits/bb_dance.png" },
	{ id:"credits_end_message", src:"sprites/credits/end_message.png" },
	{ id:"credits_end_walk", src:"sprites/credits/end_walk.png" },
	{ id:"credits_gramm", src:"sprites/credits/gramm.png" },
	{ id:"credits_screens", src:"sprites/credits/screens.png" },
	{ id:"credits_starring", src:"sprites/credits/starring.png" },
	{ id:"credits_thanks", src:"sprites/credits/thanks.png" },

]);

function BG_Credits(){

	var self = this;

	// SHOW LOGO & MAKERS
	self.screens = new Sprite({
		image: Library.images.credits_screens,
		grid:{ width:3, height:2 },
		frame:{ width:720, height:1200 },
		anchor:{ x:0, y:0 },
		x:0, y:0
	});

	// STARRING
	self.starring = new Sprite({
		image: Library.images.credits_starring,
		grid:{ width:1, height:1 },
		frame:{ width:720, height:4400 },
		anchor:{ x:0, y:0 },
		x:0, y:0
	});
	self.starring.y = 600;
	self.gramm = new Sprite({
		image: Library.images.credits_gramm,
		grid:{ width:2, height:1 },
		frame:{ width:720, height:840 },
		anchor:{ x:0, y:0 },
		x:0, y:0
	});
	self.gramm.y = 194/2;

	// THANKS & DANCE
	self.thanks = new Sprite({
		image: Library.images.credits_thanks,
		grid:{ width:1, height:1 },
		frame:{ width:720, height:7200 },
		anchor:{ x:0, y:0 },
		x:0, y:0
	});
	self.thanks.y = 600;
	var BBDance = {
		image: Library.images.credits_bb_dance,
		grid:{ width:8, height:6 },
		frame:{ width:720, height:1200 },
		anchor:{ x:0, y:0 },
		x:0, y:0
	};
	self.hook = new Sprite(BBDance);
	self.hook.gotoFrame(43);
	self.bb_dance = new Sprite(BBDance);

	// END MESSAGE
	var endMsg = {
		image: Library.images.credits_end_message,
		grid:{ width:4, height:1 },
		frame:{ width:720, height:1200 },
		anchor:{ x:0, y:0 },
		x:0, y:17
	};
	self.endMessages = [];
	[{from:49.9667,to:50.6},
	 {from:51.4667,to:52.1},
	 {from:53.8333,to:54.4667},
	 {from:57.8333,to:58.4667}].forEach(function(period, i){
		var msg = new Sprite(endMsg);
		msg.gotoFrame(i);
		msg._PERIOD = period;
		self.endMessages.push(msg);
	});

	// END WALK
	self.end_walk = new Sprite({
		image: Library.images.credits_end_walk,
		grid:{ width:5, height:1 },
		frame:{ width:500, height:400 },
		anchor:{ x:0, y:0 },
		x:52, y:330
	});

	///////////////////////////////////////
	// ANIMATION //////////////////////////
	///////////////////////////////////////

	var STAGE = 0;
	var T_OFFSET = 1.9667; // stage 0
	/*var T_OFFSET = 18;
	window.CURRENT_MUSIC.stop();
	window.CURRENT_MUSIC.seek(T_OFFSET);
	window.CURRENT_MUSIC.play();*/

	self.t = T_OFFSET;
	var _lastTime = (new Date()).getTime();
	self.update = function(){
		// hah, nah
	};

	// STAGE 0 & 1
	self.velY = 0;
	self.accY = 0;
	self.gotoY = 0;
	var PULL_BACK = 50;
	var ZOOM_UP = -600;
	var ZOOM_IN = 600;

	// STAGE 1
	var STAGE_1_SCROLL_START = 18;
	var STAGE_1_SCROLL_END = 31.4667;
	var STAGE_1_SCROLL_DURATION = STAGE_1_SCROLL_END - STAGE_1_SCROLL_START;
	var STAGE_1_SCROLL_LENGTH = (-1630.4) - (292.6);
	STAGE_1_SCROLL_LENGTH -= 25; // HACK.

	// STAGE 2
	var S2_SCROLL_START = 34.1667;// + 0.75;
	var S2_SCROLL_END = 49.6667;
	var S2_SCROLL_DUR = S2_SCROLL_END-S2_SCROLL_START;
	var S2_SCROLL_LEN = 3600 + 600;

	// STAGE 4
	var YELPED = false;

	// STAGE 6
	var HAS_PUBLISHED_THE_END = false;

	self.draw = function(ctx){

		// Keep on tickin' -- todo: Game passes in time, coz paused...
		var now = (new Date()).getTime();
		var delta = (now - _lastTime)/1000;
		_lastTime = now;
		self.t += delta; //1/60;		

		// What STAGE?
		if(self.t >= 71.0333 + 1.5){
			if(!HAS_PUBLISHED_THE_END){
				HAS_PUBLISHED_THE_END = true;
				publish("THE_END");
			}
		}else if(self.t >= 71.0333){
			STAGE = 5; // THE END
		}else if(self.t >= 63.9667){
			STAGE = 4; // END WALK
		}else if(self.t >= 49.9667){
			STAGE = 3; // END MESSAGE
		}else if(self.t >= 33.9667){
			STAGE = 2; // THANKS DANCE
		}else if(self.t >= 18){
			if(STAGE!=1){
				self.accY = 0;
				self.gotoY = 260;
			}
			STAGE = 1; // STARRING
		}else{
			STAGE = 0; // LOGO & MAKERS
		}

		////////////////////////////////////////////
		////////////////////////////////////////////

		// STAGE 0 - LOGO & MAKERS
		if(STAGE==0){

			// BG
			ctx.fillStyle = "#000";
			ctx.fillRect(0,0,360,600);

			// Which Screen?
			if(self.t > 14.0333){

				if(self.screens.currentFrame!=3) self.screens.y = ZOOM_IN;
				self.screens.gotoFrame(3);

				// Pull back, zoom up?
				if(self.t > 17.7) self.gotoY = ZOOM_UP;
				else if(self.t > 17.2667) self.gotoY = PULL_BACK;
				else self.gotoY = 0;

			}else if(self.t > 9.9){

				if(self.screens.currentFrame!=2) self.screens.y = ZOOM_IN;
				self.screens.gotoFrame(2);

				// Pull back, zoom up?
				if(self.t > 13.7333) self.gotoY = ZOOM_UP;
				else if(self.t > 13.3) self.gotoY = PULL_BACK;
				else self.gotoY = 0;

			}else if(self.t > 5.8333){
				
				if(self.screens.currentFrame!=1) self.screens.y = ZOOM_IN;
				self.screens.gotoFrame(1);

				// Pull back, zoom up?
				if(self.t > 9.6333) self.gotoY = ZOOM_UP;
				else if(self.t > 9.1667) self.gotoY = PULL_BACK;
				else self.gotoY = 0;

			}else{

				self.screens.gotoFrame(0);

				// Pull back, zoom up?
				if(self.t > 5.6) self.gotoY = ZOOM_UP;
				else if(self.t > 5.1333) self.gotoY = PULL_BACK;
				else self.gotoY = 0;

			}

			// PHYSICS for in or out
			self.screens.y += self.velY;
			self.velY += self.accY;
			self.velY *= 0.75;
			self.accY = (self.gotoY - self.screens.y)*0.05;

			// DRAW
			self.screens.draw(ctx);

		}

		// STAGE 1 - STARRING
		if(STAGE == 1){

			// BG
			ctx.fillStyle = "#000";
			ctx.fillRect(0,0,360,600);

			// Scroll til the duration's over.
			var t = (self.t - STAGE_1_SCROLL_START)/STAGE_1_SCROLL_DURATION;
			if(t>1) t=1;
			self.gotoY = 260 + t*STAGE_1_SCROLL_LENGTH;

			// PHYSICS for scroll
			self.starring.y += self.velY;
			self.velY += self.accY;
			self.velY *= 0.75;
			self.accY = (self.gotoY - self.starring.y)*0.03;

			if(self.t > 33.6333){
			//if(self.t > 33.7333){

				// Draw ANYWAY,
				self.screens.x = 0;
				self.screens.y = 0;
				self.screens.gotoFrame(4);
				self.screens.draw(ctx);

			}else if(self.t > 32.1333){

				// Draw GRAMM
				var frame = (self.t-32.1333) / (4/30);
				frame = Math.floor(frame) % 2;
				self.gramm.gotoFrame(frame);
				self.gramm.draw(ctx);

			}else{

				// DRAW CHARS
				self.starring.draw(ctx);

			}

			// HACK - to load BB?
			if(self.t > 31.8){
				self.bb_dance.y = 300;
				self.bb_dance.draw(ctx);
			}

		}

		// STAGE 2 - THANKS & DANCE
		if(STAGE == 2){

			// BG
			ctx.fillStyle = "#000";
			ctx.fillRect(0,0,360,600);

			// Credits scroll
			if(self.t>S2_SCROLL_START && self.t<S2_SCROLL_END){

				var t = (self.t - S2_SCROLL_START)/S2_SCROLL_DUR;
				self.thanks.y = 600 - t*S2_SCROLL_LEN;
				self.thanks.draw(ctx);

			}

			// BB
			if(self.t < 34.1667){

				// BB transitions in
				var t = (self.t-33.9667)/(34.1667-33.9667);
				var frame = Math.floor(t*6);
				self.bb_dance.gotoFrame(frame);

			}else if(self.t < 49.6667){

				// DANCE
				var t = (self.t-33.9667)/(49.6667-33.9667);
				var DANCE_STAGE = Math.floor(t*8);
				var frame = DANCE_STAGE*4 + 6;
				if(DANCE_STAGE>5) frame+=4;

				// Offset?
				var numFrames = (DANCE_STAGE==5) ? 8 : 4;
				var speed = (DANCE_STAGE<4) ? 2/30 : 1/30;
				var t = (self.t-34.1667)/speed;
				var offset = Math.floor(t)%numFrames;
				self.bb_dance.gotoFrame(frame + offset);

				// The hook
				if(DANCE_STAGE==7){
					var t = (self.t-47.9333)/(49.6667-47.9333);
					self.hook.x = 360 - t*360;
					self.hook.draw(ctx);
				}

			}else{

				// HOOKED
				self.bb_dance.gotoFrame(42);

				// DRAG AWAY
				if(self.t>49.7667){
					var t = (self.t-49.7667)/(49.9333-49.7667);
					self.bb_dance.x = t*360;
					ctx.fillStyle = "#fff";
					ctx.fillRect(0,0,self.bb_dance.x,600);
				}

			}
			self.bb_dance.y = 0;
			self.bb_dance.draw(ctx);

		}

		// STAGE 3 - END MESSAGE
		if(STAGE == 3){
			
			// BG
			ctx.fillStyle = "#fff";
			ctx.fillRect(0,0,360,600);

			// TEXT
			self.endMessages.forEach(function(msg){

				if(self.t > msg._PERIOD.from){

					var t = Math.min( (self.t-msg._PERIOD.from)/(msg._PERIOD.to-msg._PERIOD.from), 1 );
					msg.y = (1-Math.sqrt(t))*18;
					msg.alpha = t;
					msg.draw(ctx);

				}

			});

			// Fade out
			if(self.t>59.3333){
				var alpha = (self.t-59.3333) / (63.9333-59.3333);
				ctx.globalAlpha = alpha;
				ctx.fillStyle = "#fff";
				ctx.fillRect(0,0,360,600);
				ctx.globalAlpha = 1;
			}

		}

		// STAGE 4 - END WALK (and YELP)
		if(STAGE == 4){

			// BG
			ctx.fillStyle = "#fff";
			ctx.fillRect(0,0,360,600);

			// WALKING IN
			var t = (self.t-63.9667)/0.3667;
			var frame = Math.floor(t)%4;
			if(self.t>70.6 && !YELPED){
				YELPED = true;
				sfx("yelp");
			}
			self.end_walk.gotoFrame(YELPED ? 4 : frame);
			self.end_walk.draw(ctx);

			// Fade in
			var t = Math.min( (self.t-63.9667)/(70.1-63.9667), 1 );
			var alpha = 1 - t*0.75;
			ctx.globalAlpha = alpha;
			ctx.fillStyle = "#fff";
			ctx.fillRect(0,0,360,600);
			ctx.globalAlpha = 1;

		}

		// STAGE 5 - BLANK
		if(STAGE >= 5){
			ctx.fillStyle = "#000";
			ctx.fillRect(0,0,360,600);
		}

	}

}