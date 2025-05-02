
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const firstInfo = document.querySelector('.firstinfo');
const mainText = document.querySelector('.main-text');
const main = document.querySelector('.main'); 
const rollDivs = document.querySelectorAll('.roll');
const rollingimages = document.querySelector('.rollingimages'); 
const svg = document.querySelectorAll('.svg');
const jazyky = document.getElementById("jazyky")

function moveFirstInfo() {
  if (window.innerWidth >= 1024) {
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
    if (jazyky) {
      jazyky.remove();
    }
  }
}

window.addEventListener('resize', moveFirstInfo);
window.addEventListener('load', moveFirstInfo);

let lastWidth = window.innerWidth;

window.addEventListener('resize', () => {
  const currentWidth = window.innerWidth;

  if ((lastWidth < 1024 && currentWidth >= 1024) ||
      (lastWidth >= 1024 && currentWidth < 1024) ||
      (lastWidth < 768 && currentWidth >= 768) ||
      (lastWidth >= 768 && currentWidth < 768)) {
    location.reload();
  }

  lastWidth = currentWidth;
});


