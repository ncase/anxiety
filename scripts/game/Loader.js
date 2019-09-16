window.Loader = {};
window.Library = {
	images: {},
	sounds: {}
};
Loader.load = function(progressCallback){

	var totalAssets = Loader.sceneSources.length + Loader.imageConfigs.length + Loader.soundConfigs.length;
	var assetsLoaded = 0;
	subscribe("assetLoaded", function(){
		assetsLoaded++;
		progressCallback(assetsLoaded/totalAssets);
	});

	// Gotta LOAD 'EM ALL
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
		const id = imageConfig.id;
		fetch(imageConfig.src)
			.then(response => response.blob())
			.then(blobData => createImageBitmap(blobData))
			.then(bitmap => {
				bitmap.hackSrc = imageConfig.src;
				Library.images[id] = bitmap;
				publish("assetLoaded");
				resolve();
			})
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
		    	publish("assetLoaded");
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
			publish("assetLoaded");
			resolve();
		});
	});
};
