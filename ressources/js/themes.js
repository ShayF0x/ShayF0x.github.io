var x = 1

var element = document.getElementById("themeValue");
element.innerHTML = x;

function changeTheme() {
    element.innerHTML = ++x;
    if (x >= 4) {
        x = 1;
        element.innerHTML = x;
    }
    swapStyleSheet(x)
}
function swapStyleSheet(sheet) {
    document.getElementById("theme").setAttribute("href", 'ressources/css/themes/' + sheet + '.css');
    load_js('ressources/js/particles.js');
    load_js('ressources/js/app.js');
}

function load_js(src) {
    var head = document.getElementsByTagName('head')[0];
    var old_script = document.getElementById(src);
    if(old_script!=null){
        console.info("not null");
        head.removeChild(old_script);
    }
    var script = document.createElement('script');
    script.src = src;
    script.id = src;
    head.appendChild(script);
}
load_js('ressources/js/particles.js');
load_js('ressources/js/app.js');