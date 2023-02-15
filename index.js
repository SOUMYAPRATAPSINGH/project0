// navbar toggle

const menu=document.querySelector('#mobile-menu');
const navbar=document.querySelector('.navbar ul');

menu.onclick=function()
{
    navbar.classList.toggle('active');
}

//Search icon toggle

const icon=document.querySelector('#search-icon');
const placeholder=document.querySelector('.search-input');

icon.onclick=function()
{
    placeholder.classList.toggle('active');
}



  