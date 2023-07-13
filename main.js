// M E N U 

const menuButton = document.getElementById("MenuButton")
const menu = document.getElementById("Menu")
const juego = document.getElementById("Juego")

menuButton.addEventListener("click", () => {
    menu.classList.add("nomostrado")
    menu.classList.remove("menu-container")
    juego.classList.add("juego-contenedor")
    juego.classList.remove("nomostrado")
    comprobarScore()
})


const preguntas = [
    {
        id: 0,
        preg: `A que rama filosofica pertenece esta pregunta: "¿Es posible el conocimiento?"`,
        resp: ["Ética", "Gnoseología", "Agnosticismo", "Ninguna opción es correcta"],
        corr: "Gnoseología"
    },
    {
        id: 1,
        preg: `A que motivación para filosofar se relaciona esto: "Tomar consciencia de la inseguridad del conocimiento humano".`,
        resp: ["Tedio", "Asombro", "Situación limite", "Duda"],
        corr: "Duda"
    },
    {
        id: 2,
        preg: "¿Cual es el extremo opuesto al Excepticismo(Cuestionar)?,",
        resp: ["Dogmatismo", "Hedonismo", "Relativismo", "Solipsismo"],
        corr: "Dogmatismo"
    },
    {
        id: 3,
        preg: "¿Cual de estas no es un problema del conocimiento?",
        resp: ["Problema del origen", "Problema del alcance", "Problema del saber", "Problema de la posibilidad"],
        corr: "Problema del saber"
    },
    {
        id: 4,
        preg: "¿Qué filosofo se relaciona principalmente con el empirismo?",
        resp: ["Descartes", "Hume", "Aristóteles", "Platón",],
        corr: "Hume"
    },
    {   
        id: 5,
        preg: "¿Qué son las sombras para los prisioneros en la alegoría de la caverna de Platón?",
        resp: ["Su mundo", "Imágenes", "Dibujos", "Lo imaginario",],
        corr: "Su mundo"
    },
    {
        id: 6,
        preg: "¿Cuales de las siguientes ramas de la filosofía hace referencia a las cosas que van mas allá de nuestros sentidos?",
        resp: ["Antropología filosófica", "Gnoseología", "Estética", "Ninguna de las anteriores",],
        corr: "Ninguna de las anteriores"
    },
    {
        id: 7,
        preg: "¿Cuál de las siguientes opciones NO es una rama de la filosofía?",
        resp: ["Ética","Gnoseología","Relativismo","Antropología filosófica",],
        corr: "Relativismo"
    },
    {
        id: 8,
        preg: "¿Quién creo la teoría de los dos mundos?",
        resp: ["Socrates","Platón","Descartes","Aristóteles",],
        corr: "Platón"
    },
    {
        id: 9,
        preg: "¿A qué rama filosófica pertenece la siguiente pregunta: Existe un Dios?",
        resp: ["Estética","Filosofía política","Metafísica","Ética",],
        corr: "Metafísica"
    },
    // {
    //     id: ,
    //     preg: ,
    //     resp: ,
    //     corr: 
    // },
    // {
    //     preg: ,
    //     resp: ,
    //     corr: 
    // },
    // {
    //     preg: ,
    //     resp: ,
    //     corr: 
    // },
    // {
    //     preg: ,
    //     resp: ,
    //     corr: 
    // },
    // {
    //     preg: ,
    //     resp: ,
    //     corr: 
    // },
    // {
    //     preg: ,
    //     resp: ,
    //     corr: 
    // },
    // {
    //     preg: ,
    //     resp: ,
    //     corr: 
    // },
    // {
    //     preg: ,
    //     resp: ,
    //     corr: 
    // },
    // {
    //     preg: ,
    //     resp: ,
    //     corr: 
    // },

]

const corazon = [
    "🖤🖤🖤", "❤️🖤🖤", "❤️❤️🖤", "❤️❤️❤️"
]

// Evitar Trampas

let vidas = 3
let pregHechas = []
let pregNoHechas
let score = 0

if (!document.cookie.includes("usado")) {
    document.cookie = "antitrampas=usado"
    document.cookie = "vidas=3;"
    document.cookie = "preguntas="
    document.cookie = "score=0"
} else {
    let cooki = document.cookie
    cooki = cooki.split(";");
    vidas = cooki[cooki.indexOf(cooki.find((value) => {
        return value.includes("vidas")
    }))].split("=")[1];
    pregHechas = cooki[cooki.indexOf(cooki.find((value) => {
        return value.includes("preguntas")
    }))].split("=")[1].split(",");
    score = parseInt(cooki[cooki.indexOf(cooki.find((value) => {
        return value.includes("score")
    }))].split("=")[1])
}
function renovarPreguntas() {
    preguntas.forEach((pregunta) => {
        pregHechas.forEach((num) => {
            if (pregunta.id == num) {
                preguntas.splice(preguntas.indexOf(pregunta), 1)
            }
        })
    })
    console.log(preguntas);
    console.log(document.cookie);
}


const contPreguntas = document.getElementById("contenedorPreguntas")
const displayPreg = document.getElementById("displayPreg")
const corazones = document.getElementById("corazones")
let respuestaCorrecta;

function logica() {
    if (preguntas.length == 0) {

    } else {
        renovarPreguntas()
        corazones.innerHTML = corazon[vidas]
        let preguntaRandom = Math.floor(Math.random() * preguntas.length)
        respuestaCorrecta = preguntas[preguntaRandom].corr
        displayPreg.innerText = preguntas[preguntaRandom].preg
        renderPreguntas(preguntaRandom)
    }

}


function renderPreguntas(numero) {
    let pElegida = preguntas[numero]
    pElegida.resp.forEach((respuesta) => {
        let opcion = document.createElement("div")
        opcion.classList.add("opcion")
        opcion.innerText = respuesta
        opcion.id = pElegida.id
        opcion.addEventListener("click", (event) => { comprobarRespuesta(event.target,) })
        contPreguntas.appendChild(opcion)
    })
}

function comprobarRespuesta(opcion) {
    if (opcion.innerText == respuestaCorrecta) {
        pregHechas.push(opcion.id)
        score += 1;
        console.log(score);
        document.cookie = `score=${score}`
        let devolver = pregHechas.join(",");
        document.cookie = `preguntas=${devolver}`
        opcion.classList.add("respuesta-correcta")
        setTimeout(() => {
            opcion.classList.remove("respuesta-correcta")
            contPreguntas.innerHTML = "";
            comprobarScore()
        }, 500);
    } else {
        pregHechas.push(opcion.id)
        let devolver = pregHechas.join(",");
        document.cookie = `preguntas=${devolver}`
        vidas = vidas - 1
        document.cookie = `vidas=${vidas}`
        opcion.classList.add("respuesta-incorrecta")
        corazones.innerHTML = corazon[vidas]
        setTimeout(() => {
            opcion.classList.remove("respuesta-incorrecta")
            contPreguntas.innerHTML = "";
            if (vidas != 0) {
                renovarPreguntas()
                logica()
            } else {
                comprobarScore()
            }
        }, 500);
    }
}

function comprobarScore() {
    renovarPreguntas()
    if (preguntas.length == 0) {
        corazones.innerHTML = corazon[vidas]
        displayPreg.innerHTML = `Ya no quedan más preguntas. </br>
        Tu puntuación fue de ${score}, espera a que todos terminen.`
    } else if (vidas == 0) {
        corazones.innerHTML = corazon[vidas]
        displayPreg.innerHTML = `Ya no te quedan más vidas. </br>
        Tu puntuación fue de ${score}, espera a que todos terminen.`
    } else {
        logica()
    }
}
renovarPreguntas()

