span = document.getElementById("fisrtpagetext");
const text = ["SPORTOVNÍ STŘELEC", "STUDENT", "PROGRAMÁTOR"]
let length = text.length;
let i = 0;
span.textContent = text[2]


setInterval(() => {
    span.classList.add("hidden");
    setTimeout(() => {
        span.textContent = text[i];
        i++;
        if (i === text.length) {
            i = 0;
        }

        span.classList.remove("hidden");
    }, 500);
}, 2000);

