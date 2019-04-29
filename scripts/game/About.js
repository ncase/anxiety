(function(){

var gdpr = $("#gdpr");
var submit = $("#submit");
gdpr.oninput = function(){
	var isChecked = gdpr.checked;
	submit.disabled = !isChecked;
	submit.value = isChecked ? "Subscribe! →" : "← plz consent";
};
gdpr.oninput();

$("#the_newsletter").setAttribute("action", "https://sendy.ncase.me/subscribe");

})();