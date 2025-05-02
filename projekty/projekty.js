const project = 
[
    {
        "name": "Tento Web",
        "text": "Moje portfolio, které jsem dělal na klauzurní práci 1. ročníku na střední škole Creative Hill College.",
        "languages": ["JavaScript", "Html", "CSS"],
        "img": "../pictures/code.png",
        "datum": "2025-05-02",
        "abeceda": "T",
        "dulezitost": 5
    },
    {
        "name": "Biathlon Hra",
        "text": "Biathlon hra vznikla pro přijímací zkoušky na školu Creative Hill College. Hru jsem vytvořil v Unity.",
        "languages": ["C#", "Unity", "Blender"],
        "img": "../pictures/biathlon.jpg",
        "datum": "2024-12-20",
        "abeceda": "B",
        "dulezitost": 3
    },
    {
        "name": "Scan The Result",
        "text": "Scan The Result je program určen ke sportovní střelbě. Vize je aby převzal data z PDF od Sportovního terče Sius, Seta nebo Inband a následně je vložil a seskládal do tabulky.",
        "languages": ["Python"],
        "img": "../pictures/scantheresult.jpg",
        "datum": "2025-07-01",
        "abeceda": "S",
        "dulezitost": 3
    } 
]

let length = project.length;

function printProject(project) {
    let i = 0;
    const length = project.length;
    const projects = document.getElementById("projects");
    projects.innerHTML = ""; 

    while (i < length) {
        const projecthtml = project[i];
        let langs = "";

        for (let lang of projecthtml.languages) {
            langs += `<abbr class="project-lang" title="${lang}">${lang}</abbr>`;
        }

        projects.innerHTML += `
            <div class="project hidden">
                <img src="${projecthtml.img}" alt="${projecthtml.name}" class="project-img">
                <div class="project-content">
                    <h3>${projecthtml.name}</h3>
                    <p>${projecthtml.text}</p>
                    <div class="project-content-more">
                        ${langs}
                    </div>
                    <a class="buttonblue">Zjisti víc</a>
                </div>
            </div>
        `;

        i++;
    }
}

function sortbyType(typ) {
    let projecttosort = [...project];

    if (typ === "datum") {
        projecttosort.sort((a, b) => a.datum.localeCompare(b.datum));
    } else if (typ === "datum2") {
        projecttosort.sort((a, b) => b.datum.localeCompare(a.datum));    
    } else if (typ === "abeceda") {
        projecttosort.sort((a, b) => a.abeceda.localeCompare(b.abeceda));
    } else if (typ === "abeceda2") {
        projecttosort.sort((a, b) => b.abeceda.localeCompare(a.abeceda));
    } else if (typ === "dulezitost") {
        projecttosort.sort((a, b) => b.dulezitost - a.dulezitost); 
    }

    printProject(projecttosort);
}

sortbyType(project);


const buttontoopen = document.querySelectorAll(".buttontopen");
const changebutton = document.getElementById("buttonopener");
let buttonboolopen = false;

function openbuttons() {
    if(buttonboolopen === false) { 
        buttontoopen.forEach(button => {
            button.style.display = 'flex';
        });
        changebutton.innerHTML = `Seřadit projekty podle &#x25B2;`;
        buttonboolopen = true;
    } else {
        buttontoopen.forEach(button => {
            button.style.display = 'none';
        });
        changebutton.innerHTML = `Seřadit projekty podle &#x25BC;`;
        buttonboolopen = false;
    }
}

span = document.getElementById("fisrtpagetext");
const text = ["NEJLEPŠÍ", "ÚŽASNÉ", "SKVĚLÉ", "INOVATIVNÍ"]
let length2 = text.length;
let i = 0;
span.textContent = "NOVÉ"

setInterval(() => {
    span.classList.add("hidden");
    setTimeout(() => {
        span.textContent = text[i];
        i++;
        if (i === text.length2) {
            i = 0;
        }

        span.classList.remove("hidden");
    }, 500);
}, 1000);



