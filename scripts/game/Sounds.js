Loader.addSounds([
	{ id:"voice_hong", src:"sounds/voices/hong.mp3" },
	{ id:"voice_beebee", src:"sounds/voices/beebee.mp3" },
	{ id:"voice_narrator", src:"sounds/voices/narrator.mp3" },
	{ id:"voice_narrator_emphasis", src:"sounds/voices/narrator_emphasis.mp3" }
]);

window.sfx = function(sound, options){

	options = options || {};
	options.volume = options.volume===undefined ? 1 : options.volume;
	options.pan = options.pan===undefined ? 0 : options.pan;

	var sfx = Library.sounds[sound];
	sfx.volume(options.volume);
	sfx.stereo(options.pan);
	sfx.play();

};

window.stopAllSounds = function(){
	Object.keys(Library.sounds).forEach(function(name){
		Library.sounds[name].stop();
	});
};

window.voice = function(name, options){
	options = options || {};
	sfx("voice_"+name, options);
}

window.CURRENT_MUSIC = null;
window.music = function(song, options){

	options = options || {};
	options.volume = options.volume===undefined ? 1 : options.volume;
	options.fade = options.fade===undefined ? 0 : options.fade;

	// Fade out or cut previous?
	if(options.fade==0){
		if(window.CURRENT_MUSIC) window.CURRENT_MUSIC.stop();
	}else{
		var currentVolume = window.CURRENT_MUSIC.volume();
		window.CURRENT_MUSIC.fade(currentVolume, 0, options.fade*1000);
	}

	// Play new song (if any)
	if(!song){
		window.CURRENT_MUSIC = null;
	}else{

		var song = Library.sounds["music_"+song];
		song.stop(); // just in case it was playing earlier
		song.loop(true);

		if(options.fade==0){
			song.volume(options.volume);
		}else{
			song.fade(0, options.volume, options.fade);
		}
		
		window.CURRENT_MUSIC = song;
		song.play();

	}

};