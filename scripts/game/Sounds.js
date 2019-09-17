Loader.addSounds([
	{ id:"voice_hong", src:"sounds/voices/hong.mp3" },
	{ id:"voice_beebee", src:"sounds/voices/beebee.mp3" },
	{ id:"voice_narrator", src:"sounds/voices/narrator.mp3" },
	{ id:"voice_narrator_emphasis", src:"sounds/voices/narrator_emphasis.mp3" },
	{ id:"voice_typewriter", src:"sounds/voices/typewriter.mp3" },
	{ id:"voice_hunter", src:"sounds/voices/hunter.mp3" },
	{ id:"voice_al", src:"sounds/voices/al.mp3" },
	{ id:"voice_shire", src:"sounds/voices/shire.mp3" }
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

window._lastPlayedVoice = {};
window.voice = function(name, options){

	// How long since voice last played?
	name = "voice_"+name;
	window._lastPlayedVoice[name] = window._lastPlayedVoice[name] || 0;
	var now = (new Date()).getTime();
	var delta = now - window._lastPlayedVoice[name];

	// If too soon, DON'T PLAY.
	var delay = (name=="voice_beebee") ? 8 : 5;
	if(delta < delay/60*1000) return;

	// Otherwise, play
	options = options || {};
	sfx(name, options);
	window._lastPlayedVoice[name] = now;

}

window.CURRENT_MUSIC = null;
/*subscribe("GAME_PAUSED",function(){
	if(window.CURRENT_MUSIC && window.CURRENT_MUSIC.playing()) window.CURRENT_MUSIC.pause();
});
subscribe("GAME_UNPAUSED",function(){
	if(window.CURRENT_MUSIC && !window.CURRENT_MUSIC.playing()) window.CURRENT_MUSIC.play();
});*/
window.music = function(song, options, onend){

	options = options || {};
	options.volume = options.volume===undefined ? 1 : options.volume;
	options.fade = options.fade===undefined ? 0 : options.fade;

	// Fade out or cut previous?
	if(options.fade==0){
		if(window.CURRENT_MUSIC) window.CURRENT_MUSIC.stop();
	}else if(window.CURRENT_MUSIC){
		var currentVolume = window.CURRENT_MUSIC.volume();
		window.CURRENT_MUSIC.fade(currentVolume, 0, options.fade*1000);
	}

	// Play new song (if any)
	if(!song){
		window.CURRENT_MUSIC = null;
	}else{

		var song = Library.sounds["music_"+song];
		song.stop(); // just in case it was playing earlier
		if(options.NO_LOOP){
			song.play();
		}else{
			song.loop(true);
		}

		if(options.fade==0){
			song.volume(options.volume);
		}else{
			song.fade(0, options.volume, options.fade);
		}
		
		window.CURRENT_MUSIC = song;
		song.play();

	}

	// IF AN ON-END (used basically once in this whole game)
	if(onend){
		song.on('end', onend);
	}

};