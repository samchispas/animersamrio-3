// Captura de botones
const btnSi = document.getElementById('btn-si');
const btnNo = document.getElementById('btn-no');
const btnEmpezar = document.getElementById('btn-empezar');
const btnSiguiente = document.getElementById('btn-siguiente');
const btnFinalizar = document.getElementById('btn-finalizar');
const btnReiniciar = document.getElementById('btn-reiniciar');

// Función para cambiar de pantalla
function switchScreen(hideId, showId) {
    document.getElementById(hideId).classList.remove('active');
    document.getElementById(hideId).classList.add('hidden');
    
    document.getElementById(showId).classList.remove('hidden');
    document.getElementById(showId).classList.add('active');
}

// Navegación
btnSi.addEventListener('click', () => switchScreen('pantalla-1', 'pantalla-2'));
btnEmpezar.addEventListener('click', () => switchScreen('pantalla-2', 'pantalla-3'));
// Lista de tus recuerdos. Puedes copiar esta estructura para llegar a los 100.
const recuerdos = [
    { foto: "resources/foto1.jpeg", texto: "Empecemos con una de tus favoritas ñejeje" },
    { foto: "resources/foto2.jpeg", texto: "Joda y joda en la universidad, como si no tuvieramos que estudiar (los más felimces jiji)" },
    { foto: "resources/foto3.jpeg", texto: "Estas fotos no corresponden a nuestra realción 'oficial', pero quise ponerlas porque me recuerda nuestro procemso de enamoramienmto jeje" },
    { foto: "resources/foto4.jpeg", texto: "Nico siendo un consentido desde siemprem 🥰" },
    { foto: "resources/foto5.jpeg", texto: "Me encanta hacerte femliz (es mi deber como hipopótamo hacerlo siemprem)" },
    { foto: "resources/foto6.jpeg", texto: "Más enamorado pa dónde jajaja" },
    { foto: "resources/foto7.jpeg", texto: "Otra de tus favoritas" },
    { foto: "resources/foto8.jpeg", texto: "Me gustaba mucho irme contigo, y tu feliz tomándome fotos (más enamorado pa dónde x2 jajaja)" },
    { foto: "resources/foto9.jpeg", texto: "xd)" },
    { foto: "resources/foto10.jpeg", texto: "Mi segunda friendzoneada 😔" },
    { foto: "resources/foto11.jpeg", texto: "Enamoradoooos" },
    { foto: "resources/foto12.jpeg", texto: "Súper enamoradooooss (de mis favoritas)" },
    { foto: "resources/foto13.jpeg", texto: "Paseítos en buus, para molestarte con que me da calor y luego que me da frío 😂" },
    { foto: "resources/foto14.jpeg", texto: "Simplemente jajaja" },
    { foto: "resources/foto15.jpeg", texto: "Cómo olvidar cuándo nos arrunchábamos con Aria 🥰" },
    { foto: "resources/foto16.jpeg", texto: "Pim y Jam (Somos esos)" },
    /*{ foto: "resources/foto17.jpeg", texto: "Tercera foto, me encanta cómo nos vemos aquí." },*/
    { foto: "resources/foto18.jpeg", texto: "Súper felimces y súper enamorados (te amom tantísimom sss)" },
    { foto: "resources/foto19.jpeg", texto: "¡Primer viajecito juntos a Ibaguém! y mi primera friendzoneada 😔" },
    { foto: "resources/foto20.jpeg", texto: "Primer 'Con vos es 4 de Noviembre cada media hora' 🥰" },
    { foto: "resources/foto21.jpeg", texto: "Fuimos juntos por primera vez a Ambalemaa (pasear contigo es lo mejor del mundo 🌟)" },
    { foto: "resources/foto22.jpeg", texto: "sssss jajajaja" },
    { foto: "resources/foto23.jpeg", texto: "No encontré la foto de los gatitos en París, pero somos esos jeje" },
    { foto: "resources/foto24.jpeg", texto: "Como siempre, los más linmdoos y enamoramdooos" },
    { foto: "resources/foto25.jpeg", texto: "Cimta en el GHL Style Bogotá Occidente" },
    { foto: "resources/foto26.jpeg", texto: "Nos vemos taan lindos juntos. No podemos terminar nunca porque nos volvemos feos y do querebos ebso" },
    { foto: "resources/foto27.jpeg", texto: "Nico consentimdoo (as usual) 🥰" },
    { foto: "resources/foto28.jpeg", texto: "Hice una representación tuya para tu librito de JavaScript 😂" },
    { foto: "resources/foto29.jpeg", texto: "Salitre mágico con nuestros amiguitos 🥳" },
    { foto: "resources/foto30.jpeg", texto: "COMBORGUER 🤣" },
    { foto: "resources/foto31.jpeg", texto: "Mención honorífica a Malu que nació :)" },
    { foto: "resources/foto32.jpeg", texto: "Todos tonotos jajaja" },
    { foto: "resources/foto33.jpeg", texto: "Me gusta tanto molestarte jajaja, es mi manera de demostrate mi amor" },
    /*{ foto: "resources/foto34.jpeg", texto: "Tercera foto, me encanta cómo nos vemos aquí." },*/
    { foto: "resources/foto35.jpeg", texto: "Fuimos a ver a la selección (y perdieron xd)" },
    { foto: "resources/foto36.jpeg", texto: "Te partí la mano... pero hey, fuimos al cordillera jeje (perdóname)" },
    { foto: "resources/foto38.jpeg", texto: "¡Nos graduamoos! 🥳" },
    { foto: "resources/foto37.jpeg", texto: "¡Cumpliste 25 añoos! 🥳" },
    { foto: "resources/foto39.jpeg", texto: "Segunda mención honorífica a Malu Estrella de Mar" },
    { foto: "resources/foto40.jpeg", texto: "Vimos Interés-telar como en 8D" },
    { foto: "resources/foto41.jpeg", texto: "Fuimos a Girardott con tus papiiis (hay que volver)" },
    { foto: "resources/foto42.jpeg", texto: "Jajajaja simplemente" },
    { foto: "resources/foto43.jpeg", texto: "Simplemente x2 (Me hiciste reír tanto jajaja)" },
    { foto: "resources/foto44.jpeg", texto: "Vimos Barbie y Oppenheimer y nos divertimos mucho, y me echaste agua, y me mimí, y, y soy barbie y eres ken" },
    { foto: "resources/foto45.jpeg", texto: "Siempre de tragoncitos porque barriguita llemna, coramzón contenmto jeje" },
    { foto: "resources/foto46.jpeg", texto: "Vimos a minus division (super duper feli)" },
    { foto: "resources/foto47.jpeg", texto: "Vimos a Shakiraaaaa (i can't)" },
    { foto: "resources/foto48.jpeg", texto: "Vimos attack on titan en cine 😭" },
    { foto: "resources/foto49.jpeg", texto: "GOD cumpleaños god, cimtas god, i love damtes, que me ames para siemprem" },
    { foto: "resources/foto50.jpeg", texto: "grasias dios" },
    { foto: "resources/foto51.jpeg", texto: "jajajajajaja" },
    { foto: "resources/foto52.jpeg", texto: "Eres taan linmdo, cómo no voy a estar enamorada de ese preciomso" },
    { foto: "resources/foto53.jpeg", texto: "Cómo olvidar cuando casi nos vamos de farra con Javier Santaolaya 😔 (y no lo etiquetamos en la historia porque somos re tontos jajajaja)" },
    { foto: "resources/foto54.jpeg", texto: "Fotos rándom porque simplemente somos muy felimces <3" },
    { foto: "resources/foto55.jpeg", texto: "Vimos a Miranda por segunda vez 😭, soy tan feliz" },
    { foto: "resources/foto56.jpeg", texto: "jeje" },
    { foto: "resources/foto57.jpeg", texto: "OMG las hebillas de Bocci en el Rock al parque 😮" },
    { foto: "resources/foto58.jpeg", texto: "😂" },
    { foto: "resources/foto59.jpeg", texto: "🤣." },
    { foto: "resources/foto60.jpeg", texto: "Esa noche nos divertimos mucho con malu, y fue god mimir con ella (amo esa foto) 🥰" },
    { foto: "resources/foto61.jpeg", texto: "Fuimos a Santa María de no sé quién" },
    { foto: "resources/foto62.jpeg", texto: "Malu cumplió un año 😭" },
    { foto: "resources/foto63.jpeg", texto: "Encontré la foto del sticker jajaja" },
    { foto: "resources/foto64.jpeg", texto: "El mejor tío del mundo 🥰" },
    { foto: "resources/foto65.jpeg", texto: "El comienzo de nuestro nuevo hogar" },
    { foto: "resources/foto66.jpeg", texto: "Compramos lavadora y nevera (y casi llegamos sin nevera jajaja)" },
    { foto: "resources/foto67.jpeg", texto: "Armamos el mueble (quedó mal)" },
    { foto: "resources/foto68.jpeg", texto: "¡Vimos a My Chemical Romance! can u?" },
    { foto: "resources/foto69.jpeg", texto: "La pareja chiquitita se mojó en la moto" },
    { foto: "resources/foto70.jpeg", texto: "Malu se disfrazó de la calabaza más linda y naranja del mundo 🎃" },
    { foto: "resources/foto71.jpeg", texto: "Bananico y Fresami" },
    { foto: "resources/foto72.jpeg", texto: "Nuestro primer aniversamrio viviendo junmtoos 🥰" },
    { foto: "resources/foto73.jpeg", texto: "meriiii crismasuuuuu (nuestra primera navidad vivienmdo junmtoooos) meriiii crismasuuuuu" },
    { foto: "resources/foto74.jpeg", texto: "Me gusta mucho pasear contimgo x2, me encanmtaaa(sss)" },
    { foto: "resources/foto75.jpeg", texto: "Le dimos una ruanita a malu de pumpeaños" },
    { foto: "resources/foto76.jpeg", texto: "jajajaja lo odio con todas mis fuerzas" },
    { foto: "resources/foto77.jpeg", texto: "Alto ahí (se viene un momento muy importante en nuestras vidas)" },
    { foto: "resources/foto78.jpeg", texto: "13 de abril de 2026 llegó oddisito a nuestras vidas" },
    { foto: "resources/foto79.jpeg", texto: "Conoddie, pobre conoddie" },
    { foto: "resources/foto80.jpeg", texto: "Vimos el partido de la selección como familia tradiconal (perdieron otra vez)" },
    { foto: "resources/foto81.jpeg", texto: "Malu y oddie se conocieron" },
    { foto: "resources/foto82.jpeg", texto: "Le hicimos empanada a Duque jajajaja" },
    { foto: "resources/foto83.jpeg", texto: "jajajaja howla" },
    { foto: "resources/foto84.jpeg", texto: "Oddie y tú se volvieron inseparables, se aman (te quitó la depresión)" },
    { foto: "resources/foto85.jpeg", texto: "nos convertimos en la famosísima priti litol famimli" },
    { foto: "resources/foto86.jpeg", texto: "Nuestro hijito adorado" },
    { foto: "resources/foto87.jpeg", texto: "¡Vimos a Tan Biónica! estuvo increíble y como siempre, nos divertimos muchísimom" },
    { foto: "resources/foto88.jpeg", texto: "¡Creaste una nueva banda con tus amiguitoos! me gusta(sss)" },
    { foto: "resources/foto89.jpeg", texto: "OMG Pepe Madero 😱" },
    { foto: "resources/foto90.jpeg", texto: "Somos tan famili que combinamos ropa para los eventos familiares" },
    { foto: "resources/foto91.jpeg", texto: "Me quitaron una muela 😭" },
    { foto: "resources/foto92.jpeg", texto: "Pamdre e himjo felimces" },
    { foto: "resources/foto93.jpeg", texto: "Howlaaa" },
    { foto: "resources/foto94.jpeg", texto: "Te amom, o sea, te omdio, o sea, que seamos felices para siemprem" }
    
    // ... agrega las demás líneas separadas por comas, tantas como necesites.
];

let indiceActual = 0; // Empezamos en la primera foto (la posición 0)

const imgDinamica = document.getElementById('foto-dinamica');
const textoDinamico = document.getElementById('texto-dinamico');

document.getElementById('btn-siguiente').addEventListener('click', () => {
    indiceActual++; // Sumamos 1 para avanzar en la lista
    
    if (indiceActual < recuerdos.length) {
        // Si todavía quedan fotos en la lista, actualizamos la ventana
        imgDinamica.src = recuerdos[indiceActual].foto;
        textoDinamico.innerText = recuerdos[indiceActual].texto;
    } else {
        // Si ya pasamos por todas las fotos, avanzamos a la carta
        switchScreen('pantalla-3', 'pantalla-4');
    }
});
btnFinalizar.addEventListener('click', () => switchScreen('pantalla-4', 'pantalla-5'));
btnReiniciar.addEventListener('click', () => switchScreen('pantalla-5', 'pantalla-1'));

// Lógica para que el botón "No" se mueva
btnNo.addEventListener('mouseover', function() {
    // Calculamos los límites de la ventana actual para no salirnos
    const windowContent = document.querySelector('.screen.active .window-content');
    const maxX = windowContent.clientWidth - btnNo.clientWidth;
    const maxY = windowContent.clientHeight - btnNo.clientHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    btnNo.style.position = 'absolute';
    btnNo.style.left = `${randomX}px`;
    btnNo.style.top = `${randomY}px`;
});

// --- 1. Generador de Partículas Flotantes ---
const particlesContainer = document.getElementById('particles-container');
// Puedes cambiar estos emojis por los que prefieras
const particleIcons = ['✨', '💖', '🌸', '☁️']; 
const numParticles = 25; // Cantidad de elementos en pantalla

for (let i = 0; i < numParticles; i++) {
    let particle = document.createElement('div');
    particle.classList.add('particle');
    particle.innerText = particleIcons[Math.floor(Math.random() * particleIcons.length)];
    
    // Posición horizontal, duración y retraso aleatorios para que se vea natural
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.animationDuration = `${Math.random() * 10 + 8}s`; // Tardan entre 8 y 18 segundos en subir
    particle.style.animationDelay = `${Math.random() * 5}s`; 
    
    particlesContainer.appendChild(particle);
}

// --- 2. Efecto Parallax con el cursor ---
document.addEventListener('mousemove', (e) => {
    // Calculamos el desplazamiento. El número 80 controla la intensidad (menor = más movimiento)
    const moveX = (window.innerWidth - e.pageX * 2) / 80;
    const moveY = (window.innerHeight - e.pageY * 2) / 80;
    
    // Movemos las partículas sutilmente
    particlesContainer.style.transform = `translate(${moveX}px, ${moveY}px)`;
    
    // (Opcional) Movemos la ventana activa en dirección contraria para mayor profundidad
    const activeWindow = document.querySelector('.screen.active .window');
    if (activeWindow) {
        activeWindow.style.transform = `translate(${-moveX / 2}px, ${-moveY / 2}px)`;
    }
});

document.getElementById('volver-2').addEventListener('click', () => switchScreen('pantalla-2', 'pantalla-1'));
document.getElementById('volver-4').addEventListener('click', () => switchScreen('pantalla-4', 'pantalla-3'));
document.getElementById('volver-5').addEventListener('click', () => switchScreen('pantalla-5', 'pantalla-4'));

document.getElementById('volver-3').addEventListener('click', () => {
    if (indiceActual > 0) {
        // Retrocede a la foto anterior
        indiceActual--;
        imgDinamica.src = recuerdos[indiceActual].foto;
        textoDinamico.innerText = recuerdos[indiceActual].texto;
    } else {
        // Si es la primera foto, devuelve a la ventana de feliz aniversario
        switchScreen('pantalla-3', 'pantalla-2');
    }
});