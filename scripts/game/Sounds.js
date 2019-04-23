Loader.addSounds([
	{ id:"music_battle", src:"sounds/music/battle.mp3" }
]);

Loader.addSounds([
	{ id:"voice_hong", src:"sounds/voices/hong.mp3" },
	{ id:"voice_beebee", src:"sounds/voices/beebee.mp3" },
	{ id:"voice_narrator", src:"sounds/voices/narrator.mp3" },
	{ id:"voice_narrator_emphasis", src:"sounds/voices/narrator_emphasis.mp3" }
]);

window.sfx = function(sound, volume, pan){

	volume = volume===undefined ? 1 : volume;
	pan = pan===undefined ? 0 : pan;

	var sfx = Library.sounds[sound];
	sfx.volume(volume);
	sfx.stereo(pan);
	sfx.play();

};

window.voice = function(name, volume, pan){
	sfx("voice_"+name, volume, pan);
}

window.CURRENT_MUSIC = null;
window.music = function(song, volume){

	if(!song){

		window.CURRENT_MUSIC.stop();
		window.CURRENT_MUSIC = null;

	}else{

		var song = Library.sounds["music_"+song];
		song.volume(volume);
		song.loop(true);
		song.play();
		window.CURRENT_MUSIC = song;

	}

};