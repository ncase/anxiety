
/*
	Lots of things in this game were written to happen every frame, but they often don't need to!

	Here's something I call a `Tickable Obersver`, it lets you (every frame) check if some values
	have changed, and only then run the expensive code!

	It's kinda like an observable, but it's tiny and runs on a frame-by-frame basis!
	- Spacie
*/

class TickableObserver {

	constructor(event){
		this.depCount = 0;
		this.previousValues = [];
		this.watchers = [];
		this.event = event;
	}

	tick(){
		for(let i = 0; i < this.depCount; i++){
			if(this.watchers[i]() != this.previousValues[i]){
				this.previousValues[i] = this.watchers[i]();
				if(this.event != null) return this.event();
			}
		}
	}

	watch(watcher){
		this.depCount++;
		this.watchers.push(watcher);
		this.previousValues.push(null);
	}

}