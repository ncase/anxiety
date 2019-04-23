window.Loader = {};
window.Library = {
	images: {},
	sounds: {}
};
Loader.load = function(){
	return new RSVP.Promise(function(resolve){
		
		var loadPromises = [];

		// All scenes
		Loader.sceneSources.forEach(function(src){
			loadPromises.push( Loader.loadScene(src) );
		});
		
		// All images
		Loader.imageConfigs.forEach(function(config){
			loadPromises.push( Loader.loadImage(config) );
		});
		
		// All sounds
		Loader.soundConfigs.forEach(function(config){
			loadPromises.push( Loader.loadSound(config) );
		});

		// Go go go!
		RSVP.all(loadPromises).then(resolve);

	});
};

/////////////////////////////
// IMAGES ///////////////////
/////////////////////////////

Loader.imageConfigs = [];
Loader.addImages = function(imageConfigs){
	Loader.imageConfigs = Loader.imageConfigs.concat(imageConfigs);
};
Loader.loadImage = function(imageConfig){
	return new RSVP.Promise(function(resolve){
		var img = new Image();
		var id = imageConfig.id;
		Library.images[id] = img; // ADD TO LIBRARY
		img.onload = resolve;
		img.src = imageConfig.src;
	});
};

/////////////////////////////
// SCENES ///////////////////
/////////////////////////////

Loader.sceneSources = [];
Loader.addScenes = function(sceneSources){
	Loader.sceneSources = Loader.sceneSources.concat(sceneSources);
};
Loader.loadScene = function(src){
	var loadDataPromise = new RSVP.Promise(function(resolve){
		var xhr = new XMLHttpRequest();
		xhr.open("GET", src);
		xhr.onload = function() {
		    if(xhr.status===200){
		    	Game.parseSceneMarkdown(xhr.responseText); // PARSE INTO GAME
		    	resolve();
		    }
		};
		xhr.send();
	});
};

/////////////////////////////
// SOUNDS ///////////////////
/////////////////////////////

Loader.soundConfigs = [];
Loader.addSounds = function(soundConfigs){
	Loader.soundConfigs = Loader.soundConfigs.concat(soundConfigs);
};
Loader.loadSound = function(soundConfig){
	return new RSVP.Promise(function(resolve){
		var sound = new Howl({
			src: [soundConfig.src]
		});
		var id = soundConfig.id;
		Library.sounds[id] = sound; // ADD TO LIBRARY
		sound.once("load",function(){
			resolve();
		});
	});
};
