
const firstInfo = document.querySelector('.firstinfo');
const mainText = document.querySelector('.main-text');
const main = document.querySelector('.main'); 
const rollDivs = document.querySelectorAll('.roll');
const rollingimages = document.querySelector('.rollingimages'); 
const svg = document.querySelectorAll('.svg');

function movingThings() {
  if (window.innerWidth >= 768) {
    if (!mainText.contains(firstInfo)) {
      mainText.appendChild(firstInfo);
    }

  } else {
    if (!main.contains(firstInfo)) {
      main.appendChild(firstInfo);
    }
  }

  if (window.innerWidth <= 768) {
    rollDivs.forEach(div => {
      const svg = div.querySelector('svg');
      if (svg) {
          rollingimages.appendChild(svg); 
      }
      div.remove();
    });
  }
}

window.addEventListener('resize', movingThings);
window.addEventListener('load', movingThings);

let lastWidth = window.innerWidth;

window.addEventListener('resize', () => {
  const currentWidth = window.innerWidth;

  if ((lastWidth < 768 && currentWidth >= 768) ||
      (lastWidth >= 768 && currentWidth < 768)) {
    location.reload();
  }

  lastWidth = currentWidth;
});

document.addEventListener("DOMContentLoaded", () => {
  const svgsQueue = Array.from(document.querySelectorAll('img.mysvg'));
  let i = 0;

  /* ZOBRAZENÍ SVG*/
  const isInViewport = (elem) => {
    const rect = elem.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
  };

    /* LOADING SVG */
  const loader = (img) => {
    const src = img.getAttribute('src');
    fetch(src)
      .then(res => res.text())
      .then(svgText => {
        const div = document.createElement('div');
        div.innerHTML = svgText;
        const svg = div.querySelector('svg');
        svg.classList.add(...img.classList);
        const paths = svg.querySelectorAll("path");
        paths.forEach((path) => path.style.opacity = "1");

        img.replaceWith(svg);
        onScroll();
      
      })
  };

  const onScroll = () => {
    
    if (svgsQueue.length === 0) {
      return;
    }
    
    const nextImg = svgsQueue[i];
    if (isInViewport(nextImg)) {
      svgsQueue.shift();
      loader(nextImg);
    }

  };

  window.addEventListener("scroll", onScroll);
  onScroll();
});

