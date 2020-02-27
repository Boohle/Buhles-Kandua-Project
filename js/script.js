const nav = document.querySelector('#nav');
const opened = document.querySelector('.openNav');
// const hide = document.querySelector('.everything');

nav.addEventListener('click', ()=>{
nav.classList.toggle('navActive');
 opened.style.display = 'block'
 hide.style.display = 'none'
});

// nav.addEventListener('click',()=> {
//     opened.style.display = 'none';
//     hide.style.display = 'block'
// });