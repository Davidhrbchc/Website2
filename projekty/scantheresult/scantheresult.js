const images = [
    '../../pictures/biathlon1.png',
    '../../pictures/biathlon.jpg',
    '../../pictures/biathlon2.png',
    '../../pictures/biathlon3.png'
];

let i = 0; 

function showImage() {
    const imgElement = document.getElementById('imgforgalery');
    imgElement.src = images[i];
}

function nextImage() {
    i++;
    if (i >= images.length) {
        i = 0; 
    }
    showImage();
}

function previousImage() {
    i--;
    if (i < 0) {
        i = images.length - 1;
    }
    showImage();
}