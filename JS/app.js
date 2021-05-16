'use strict';

let leftImageElement = document.getElementById('leftImg')
let centerImageElement = document.getElementById('centerImg')
let rightImageElement = document.getElementById('rightImg')

let leftImgIndex;
let centerImgIndex;
let rightImgIndex;

let maxChoice = 25 ;
let userChoice = 0 ;

let allProduct = [];

function BussImg(name , source){
    this.name = name;
    this.source = source; 
    this.vote = 0;
    this.show = 0; 
    allProduct.push(this);

}

new BussImg ('bag' , 'img/bag.jpg');
new BussImg ('banana' , 'img/banana.jpg');
new BussImg ('bathroom' , 'img/bathroom.jpg');
new BussImg ('boots' , 'img/boots.jpg');
new BussImg ('breakfast' , 'img/breakfast.jpg');
new BussImg ('bubblegum' , 'img/bubblegum.jpg');
new BussImg ('chair' , 'img/chair.jpg');
new BussImg ('cthulhu' , 'img/cthulhu.jpg');
new BussImg ('dog-duck' , 'img/dog-duck.jpg');
new BussImg ('dragon' , 'img/dragon.jpg');
new BussImg ('pen' , 'img/pen.jpg');
new BussImg ('pet-sweep' , 'img/pet-sweep.jpg');
new BussImg ('scissors' , 'img/scissors.jpg');
new BussImg ('shark' , 'img/shark.jpg');
new BussImg ('sweep' , 'img/sweep.png');
new BussImg ('tauntaun' , 'img/tauntaun.jpg');
new BussImg ('unicorn' , 'img/unicorn.jpg');
new BussImg ('water-can' , 'img/water-can.jpg');
new BussImg ('wine-glass' , 'img/wine-glass.jpg');

function getRandomProduct(){

    return Math.floor(Math.random() * allProduct.length);
}

function renderProductImg() {

    leftImgIndex = getRandomProduct ();
    centerImgIndex = getRandomProduct ();
    rightImgIndex = getRandomProduct ();



do {
    leftImgIndex = getRandomProduct ();
} while (leftImgIndex === centerImgIndex === rightImgIndex);

leftImageElement.src = allProduct [leftImgIndex].source ;
centerImageElement.src = allProduct [centerImgIndex].source ;
rightImageElement.src = allProduct[rightImgIndex].source ;
}
renderProductImg();

leftImageElement.addEventListener('click' , handClick);
centerImageElement.addEventListener('click' , handClick);
rightImageElement.addEventListener('click' , handClick);

function handClick(event){
    userChoice++ ;
    console.log(userChoice);

    if(userChoice <= maxChoice){
        console.log(userChoice);

        if (event.target.id === 'leftImg') {
        allProduct[leftImgIndex].vote = allProduct[leftImgIndex].vote +1 ;

    } else if (event.target.id === 'centerImg') {
        allProduct[centerImgIndex].vote = allProduct[centerImgIndex].vote +1 ;

    }  else  if (event.target.id === 'rightImg'){
        allProduct[rightImgIndex].vote = allProduct[rightImgIndex].vote +1 ;
    }


renderProductImg();

} else {
    leftImageElement.removeEventListener('click' , handClick);
    centerImageElement.removeEventListener('click' , handClick);
    rightImageElement.removeEventListener ('click' , handClick);

    let list =document.getElementById('result');
    let liElement;
    for ( let i = 0 ; i < allProduct.length; i++ ){
        liElement = document.createElement ('li');
        list.appendChild(liElement);
        liElement.textContent=`Image ${i}: ${allProduct[i].name} had ${allProduct[i].vote} vote `;
    }
}
}
console.log(allProduct);