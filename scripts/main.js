var xhr = new XMLHttpRequest();
xhr.open('GET', 'scenes/demo.md?v='+Math.random());
xhr.onload = function() {
    if(xhr.status===200){
        Game.onload(xhr.responseText);
    }
};
xhr.send();