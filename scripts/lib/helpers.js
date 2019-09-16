// I'm twice the number you'll ever be
Math.TAU = Math.PI*2;

// The poor man's jQuery
function $(query){
	return document.querySelector(query);
}

// Flush an element's transitions
function flushElementTransitions(element){
	if(typeof element == "string") element = $(element);
	element.classList.add('clear_transition')
	element.clientHeight;
	element.classList.remove('clear_transition');
}