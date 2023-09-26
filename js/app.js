//banner 


const bannerCuadricula = document.getElementById('banner__cuadricula');

const numberBox = 200;

for ( let i = 0; i < numberBox ; i++) {
  const colorBox = document.createElement('div');
  colorBox.classList.add('colorBox');
  bannerCuadricula.append(colorBox)
}



//items 

const plusMenu = document.querySelector('.item-plus');


let line1 = document.querySelector('.line1');
let linksPlus = document.querySelector('.links-plus')

plusMenu.addEventListener('click', () => {
  line1.classList.toggle('top');
  linksPlus.classList.toggle('links-plus-on');
  
});



