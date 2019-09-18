var SHARING_LINK = window.location.href;
var SHARING_TITLE = $("#sharing_title").innerText.trim();
var SHARING_DESC = $("#sharing_desc").innerText.trim();

$("#share_link_fb").setAttribute("href",
	"https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(SHARING_LINK)
	);
$("#share_link_tw").setAttribute("href", 
	"https://twitter.com/intent/tweet?text="+encodeURIComponent(SHARING_DESC)+"%20"+encodeURIComponent(SHARING_LINK)
	);
$("#share_link_em").setAttribute("href", 
	"mailto:?subject="+encodeURIComponent(SHARING_TITLE)+"&body="+encodeURIComponent(SHARING_DESC)+"%20"+encodeURIComponent(SHARING_LINK)
	);