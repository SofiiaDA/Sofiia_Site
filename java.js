//-----Клік на меню-----//
const iconMenu = document.querySelector('.nav-icon');
const bodyMenu = document.querySelector('.nav-all-menu');
const navMenu = document.querySelector('.nav');
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    bodyMenu.classList.toggle('_active');
    iconMenu.classList.toggle('_active');
    navMenu.style.backgroundColor = 'white';
  });
}
if (!iconMenu.classList.contains('_active')){
  navMenu.style.backgroundColor = 'none';
}
document.addEventListener('click', function(e) {
  if(e.target.tagName === 'A') {
    bodyMenu.classList.remove('_active');
    iconMenu.classList.remove('_active');
    document.body.classList.remove('_lock');
  }
});
//----------------------------------------------//


//-----Анімація нава при скролі-----//
window.addEventListener('scroll',()=>{
  if (document.documentElement.scrollTop > 700){
    document.querySelector('.nav').style.background = 'white';
  }else{
    document.querySelector('.nav').style.background = 'none';
  };

});
//----------------------------------------------//

//-----Анімація контенту при скролі-----//
let scrollelem = document.querySelectorAll('.anim-item');

window.addEventListener('scroll',scrollanimate);
function scrollanimate(){
    for(let i = 0; i<scrollelem.length; i++){
        const elem = scrollelem[i];
        const elemh = elem.offsetHeight;
        const elemposition = offset(elem).top;
        const startanimate = 4;

        let point = window.innerHeight - elemh / startanimate;
        if (elemh > window.innerHeight){
            point = window.innerHeight - window.innerHeight / startanimate;
        }

        if((pageYOffset > elemposition - point && pageYOffset < (elemposition + elemh))){
            elem.classList.add('_activean');
        } else{
          if(!elem.classList.contains('_no-hide')){
            elem.classList.remove('_activean');
          }
        }
    }
}
function offset(el){
    const g = el.getBoundingClientRect();
    const leftscrl = window.pageXOffset || document.documentElement.scrollLeft;
    const topscrl = window.pageYOffset|| document.documentElement.scrollTop;
    return {top: g.top + topscrl, left: g.left + leftscrl}
}
scrollanimate();
//----------------------------------------------//