document.addEventListener("DOMContentLoaded", () => {
  const svgsToLoad = document.querySelectorAll('img.mysvg');

  const isInViewport = (elem) => {
    const rect = elem.getBoundingClientRect();
    return (
      rect.top < window.innerHeight &&
      rect.bottom > 0 &&
      rect.left < window.innerWidth &&
      rect.right > 0
    );
  };

  const revealPaths = (svg) => {
    const paths = svg.querySelectorAll("path");
    paths.forEach((path, index) => {
      setTimeout(() => {
        path.style.transition = "opacity 0.5s";
        path.style.opacity = "1";
      }, index * 1);
    });
  };

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

        const onScroll = () => {
          if (isInViewport(svg)) {
            revealPaths(svg);
            window.removeEventListener("scroll", onScroll);
          }
        };

        window.addEventListener("scroll", onScroll);
        onScroll();
      });
  };

  svgsToLoad.forEach(img => loader(img));
});