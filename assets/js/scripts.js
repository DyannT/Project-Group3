// var header = document.getElementById("menu");
var mobileMenu = document.getElementById("mobile-menu");

mobileMenu.onclick = function() {
    var isMenu = document.getElementById('menu');
    if (isMenu.style.display === 'none') {
        isMenu.style.display = 'block';
    } else {
        isMenu.style.display = 'none';
    }
}
