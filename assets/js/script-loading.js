const preloader = document.querySelector('#preloader')
const hideBack = document.getElementsByClassName('back-input')

// setTimeout(function() {
//     layoutLoading.style.display = 'none';
//     // hideBack.style.opacity = '0'
// },3000)

window.addEventListener("load",function() {
    preloader.style.display = 'none';
})