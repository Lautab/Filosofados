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
        preg: `A que rama filosófica pertenece esta pregunta: "¿Es posible el conocimiento?"`,
        resp: ["Ética", "Gnoseología", "Agnosticismo", "Ninguna opción es correcta"],
        corr: "Gnoseología"
    },
    {
        id: 1,
        preg: `¿A qué motivación para filosofar se relaciona esto: "Tomar consciencia de la inseguridad del conocimiento humano"?`,
        resp: ["Tedio", "Asombro", "Situación limite", "Duda"],
        corr: "Duda"
    },
    {
        id: 2,
        preg: "¿Cuál es el extremo opuesto al Escepticismo?,",
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
        preg: "¿Qué filósofo se relaciona principalmente con el empirismo?",
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
    {
        id: 10,
        preg: "La función principal de la filosofía es...",
        resp: ["La realidad","La razón","El pensamiento critico","El saber",],
        corr: "El pensamiento critico"
    },
    {
        id: 11,
        preg: "Dios es la garantía del conocimiento, ¿Quién creó esta teoría?",
        resp: ["Nietzsche","Foucault","Descartes","Platón",],
        corr: "Descartes"
    },
    {
        id: 12,
        preg: "¿Qué corriente filosófica asegura que una persona solo conoce lo que la rodea?",
        resp: ["El Dogmatismo","El Hedonismo","El Racionalismo","El Agnosticismo",],
        corr: "El Agnosticismo"
    },
    {
        id: 13,
        preg: "¿Quién creó la alegoría de la caverna?",
        resp: ["Pitagoras","Platón","Kant","Descartes"],
        corr: "Platón"
    },
    {
        id: 14,
        preg: "Existen 2 tipos de hedonismo, el sensible y el corporal",
        resp: ["Verdadero","Falso"],
        corr: "Verdadero"
    },
    {
        id: 15,
        preg: "Se considera empirismo a toda teoría que considere que la experiencia es el origen del conocimiento",
        resp: ["Verdadero","Falso"],
        corr: "Verdadero"
    },
    {
        id: 16,
        preg: "¿Qué es el hombre? Esta pregunta pertenece a la rama de...",
        resp: ["Gneoseología","Antropología filosófica","Estética","Metafísica"],
        corr: "Antropología filosófica"
    },
    {
        id: 17,
        preg: "¿El ... de la filosofía es atemporal?",
        resp: ["comienzo","origen"],
        corr: "origen"
    },
    {
        id: 18,
        preg: "El método de estudio de la filosofía es...",
        resp: ["La verdad","El Saber","La razón","La realidad"],
        corr: "La razón"
    },
    {
        id: 19,
        preg: "¿Que corriente significa investigar cuidadosamente?",
        resp: ["Solipsismo","Escepticismo","Existencialismo","Racionalismo",],
        corr: "Escepticismo"
    },
    {
        id: 20,
        preg:  "¿Qué características son propias del conocimiento científico?",
        resp: ["Epistemología","Agnosticismo","Racionalismo","Criticismo"],
        corr: "Epistemología"
    },
    {
        id: 21,
        preg: "Reflexionar, cuestionar y analizar algún aspecto de la realidad es",
        resp: ["Objeto","Metodo","Pensamiento Crítico","Praxis Filosófica",],
        corr: "Praxis Filosófica"
    },
    {
        id: 22,
        preg: "... nos muestran los limites q tenemos",
        resp: ["Duda","Situaciones límites","Asombro", "Tedio"],
        corr: "Situaciones límites"
    },
    {
        id: 23,
        preg: "El ... busca establecer la posibilidad y los modos en que acontece del mundo y de los otros",
        resp: ["Problema del ser","Problema del valor","Problema del conocimiento"],
        corr: "Problema del conocimiento"
    },
    {
        id: 24,
        preg: "La sabiduría de Socrates consiste en",
        resp: ["Conocer la ignorancia de los demás", "Tener Conciencia de su ignorancia", "Ignorar a los demás", "Ninguna es correcta"],
        corr: "Tener Conciencia de su ignorancia"
    },
    {
        id: 25,
        preg: `¿Qué filósofo dijo "El hombre es la medida de todas las cosas"?`,
        resp: ["Protágoras", "Newton", "Pitágoras", "Socrates"],
        corr: "Protágoras"
    }
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

