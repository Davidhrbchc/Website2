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

  const loaderPaths = (svg) => {
    const paths = svg.querySelectorAll("path");
    paths.forEach((path, index) => {
      setTimeout(() => {
        path.style.transition = "opacity 0.2s";
        path.style.opacity = "1";
      }, index * 1);  
    });
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
        paths.forEach((path) => path.style.opacity = "0");

        img.replaceWith(svg);
        loaderPaths(svg);
      
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

  //najíždění od začátku, aby se loadli svg, pokud někdo dal odkaz
  const hash = window.location.hash;

  if (hash) {
    history.replaceState(null, null, window.location.pathname); 

    setTimeout(() => {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
});



