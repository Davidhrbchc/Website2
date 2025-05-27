const project = 
[
    {
        "name": "Tento Web",
        "text": "Moje portfolio, které jsem dělal na klauzurní práci 1. ročníku na střední škole Creative Hill College.",
        "languages": ["JavaScript", "Html", "CSS"],
        "langinfo": [
            "JavaScript je skriptovací jazyk používaný především na straně klienta pro tvorbu interaktivních webových stránek. Umožňuje dynamicky manipulovat s obsahem, reagovat na události a komunikovat se servery.",
            "HyperText Markup Language (HTML) je základní značkovací jazyk pro strukturování obsahu webových stránek. Definuje prvky jako nadpisy, odstavce, odkazy či formuláře.",
            "Cascading Style Sheets (CSS) slouží k popisu vzhledu a rozvržení HTML prvků na stránce. Odděluje vizuální styl od samotného obsahu a umožňuje responzivní design."
        ],
        "img": "../pictures/code.png",
        "odkaz": "./thisweb/thisweb.html",
        "datum": "2025-05-02",
        "abeceda": "T",
        "dulezitost": 5
    },
    {
        "name": "Biathlon Hra",
        "text": "Biathlon hra vznikla pro přijímací zkoušky na školu Creative Hill College. Hru jsem vytvořil v Unity.",
        "languages": ["C#", "Unity", "Blender"],
        "langinfo": [
            "C# je moderní objektově orientovaný programovací jazyk vyvinutý firmou Microsoft. Používá se pro vývoj desktopových aplikací, webových služeb a zejména her v enginu Unity.",
            "Unity je výkonný multiplatformní herní engine pro vývoj 2D a 3D her a interaktivních aplikací. Umožňuje nasazení na různé platformy a využívá jazyk C#.",
            "Blender je open-source nástroj pro 3D modelování, animaci, simulaci, rendering a úpravu videa. Je využíván v herním průmyslu, filmu i architektonické vizualizaci."
        ],
        "img": "../pictures/biathlon.jpg",
        "odkaz": "./biathlon/biathlon.html",
        "datum": "2024-12-20",
        "abeceda": "B",
        "dulezitost": 3
    },
    {
        "name": "Scan The Result",
        "text": "Scan The Result je program určen ke sportovní střelbě. Vize je aby převzal data z PDF od Sportovního terče Sius, Seta nebo Inband a následně je vložil a seskládal do tabulky.",
        "languages": ["Python"],
        "langinfo": [
            "Python je univerzální, vysokoúrovňový programovací jazyk známý pro svou čitelnost a jednoduchost. Využívá se v oblasti webového vývoje, vědy o datech, automatizace a umělé inteligence."
        ],
        "img": "../pictures/scantheresult.jpg",
        "odkaz": "./scantheresult/scantheresult.html",
        "datum": "2025-07-01",
        "abeceda": "S",
        "dulezitost": 3
    } 
]

function printProject(project) {
    let i = 0;
    const length = project.length;
    const projects = document.getElementById("projects");
    projects.innerHTML = ""; 

    while (i < length) {
        const projecthtml = project[i];
        let langs = "";

        for (let i = 0; i < projecthtml.languages.length; i++) {
            langs += `<abbr class="project-lang lang-tooltip" data-tooltip="${projecthtml.langinfo[i]}">${projecthtml.languages[i]}</abbr>\n`;
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
                    <a href="${projecthtml.odkaz}" class="buttonblue">Zjisti víc</a>
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

