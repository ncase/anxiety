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

	// END WALK

	///////////////////////////////////////
	// ANIMATION //////////////////////////
	///////////////////////////////////////

	var STAGE = 0;
	//var T_OFFSET = 1.9667; // stage 0
	var T_OFFSET = 18; // stage 1
	var T_OFFSET = 33.9667; // stage 2
	window.CURRENT_MUSIC.stop();
	window.CURRENT_MUSIC.seek(T_OFFSET);
	window.CURRENT_MUSIC.play();

	self.t = T_OFFSET;
	var _lastTime = (new Date()).getTime();
	self.update = function(){

		// Keep on tickin'
		var now = (new Date()).getTime();
		var delta = (now - _lastTime)/1000;
		//console.log(delta);
		_lastTime = now;
		self.t += delta; //1/60;		

		// What STAGE?
		if(self.t >= 33.9667){
			if(STAGE!=2){
			}
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
	var S2_SCROLL_START = 34.1667;
	var S2_SCROLL_END = 49.6667;
	var S2_SCROLL_DUR = S2_SCROLL_END-S2_SCROLL_START;
	var S2_SCROLL_LEN = 3600 + 600;

	self.draw = function(ctx){

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

			// Draw GRAMM???
			if(self.t > 33.7333){

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

		}

		// STAGE 2 - THANKS & DANCE
		if(STAGE == 2){

			// Credits scroll
			if(self.t<S2_SCROLL_END){

				var t = (self.t - S2_SCROLL_START)/S2_SCROLL_DUR;
				self.thanks.y = 600 - t*S2_SCROLL_LEN;
				self.thanks.draw(ctx);

			}

			// BB transitions in
			// BB dances
			// The hook
			// BB's hooked

		}

		// STAGE 3 - END MESSAGE
		if(STAGE == 3){
		}

		// STAGE 4 - END WALK (and YELP)
		if(STAGE == 4){
		}

	}

}