const headerStatic = document.querySelector('.header-nav--static');


window.onscroll = function(){
    scrollDown();
}


function scrollDown(){
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        headerStatic.classList.add('header-nav--fixed');
    }
    else{
        headerStatic.classList.remove('header-nav--fixed');
    }
}
