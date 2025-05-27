const images = [
    '../../pictures/thisweb1.jpg',
    '../../pictures/thisweb2.jpg',
    '../../pictures/thisweb3.jpg'
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