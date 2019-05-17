/* variable */


let nav = document.getElementById('nav');
let menu = document.getElementById('enlace');

function menus(){
    let Desplazamiento_Actual = window.pageXOffset;

    if (Desplazamiento_Actual <= 300){
        nav.classList.remove('nav2');
        nav.className=('nav1');

    }else{
        nav.classList.remove('nav1');
        nav.className=('nav2');
    }
}

window.addEventListener('scroll',function(){
    console.log(window.pageXOffset);
    menus();
});