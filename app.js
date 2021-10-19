const currentImage = document.querySelector('#image');
const images = ['images/pilt1.png', 'images/pilt2.png', 'images/pilt3.png'];

function changeImage() {
    console.log('Whos Joe.');
    let rnd = Math.floor(Math.random() * images.length);

    console.log(images[rnd]);

    currentImage.src = images[rnd];
}