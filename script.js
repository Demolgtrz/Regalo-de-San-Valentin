/* =========================================
   1. MUSIC PLAYER LOGIC (With Synced Lyrics)
   ========================================= */

// REPLACE: Tus canciones aquí. Copia el contenido del LRC.
const songs = [
    {
        title: "M.A.I (En Vivo)",
        artist: "Milo J",
        cover: "image/mai_milo j.jpg",
        src: "playlist/M.A.I (En Vivo).mp3",
        // AJUSTE DE TIEMPO: Cambia este número si la letra va adelantada o atrasada.
        // Ejemplo: 2.5 (atrasa la letra 2.5 segundos), -1.0 (adelanta 1 segundo)
        lyricsOffset: 2.5,
        lyrics: `
[00:00.00] (Intro Instrumental)
[00:01.61]No me imaginé que funcionaba así
[00:04.71]No buscaba amor y un día te encontré
[00:07.61]Estaba vivo, pero con vos comencé a vivir
[00:10.42]Fuiste una bendición, me queda agradecer
[00:13.07]Sos ese cuento del que no quiero saber el final
[00:16.22]Ese cometa que tuve suerte de presenciar
[00:19.11]El mundo es feo y su pasado provocó ansiedad
[00:22.01]Me iré al infierno, pero en tierra
[00:24.96]
[00:24.96]Si algún día de estos se hace gris tu cielo
[00:28.46]Lo pintarás mirando un río
[00:30.91]Las lágrimas y el frío te hicieron de hielo
[00:33.91]Y daré la piel pa' servir de abrigo
[00:36.82]Y aunque el orgullo a veces ocultó mis miedo'
[00:39.72]Temo a caer y que no estés conmigo
[00:42.51]Te ofrezco amor real de un corazón sincero
[00:45.27]Y quemar la llave que abrió el laberinto
[00:48.42]Si algún día de estos se hace gris tu cielo
[00:51.81]Lo pintarás mirando un río
[00:54.13]Las lágrimas y el frío te hicieron de hielo
[00:57.07]Y daré la piel pa' servir de abrigo
[01:00.01]Y aunque el orgullo a veces ocultó mis miedo'
[01:03.21]Temo a caer y que no estés conmigo
[01:05.81]Te ofrezco amor real de un corazón sincero
[01:08.62]Y quemar la llave que abrió el laberinto
[01:13.00]
[01:13.00](-ai, Mai)
[01:17.61]Mai, Mai
[01:23.62]
[01:23.62]Hoy el tiempo no perdona y el ambiente es raro
[01:29.42]Pero solo esa persona me dio su mano
[01:35.12]Tu alma era viajera y sola, sé que es un descaro
[01:41.05]Y la mía se desmorona, pero combinamos
[01:47.19]Lograste comprender lo que ni yo entendí
[01:50.05]Tus palabras hoy, fueron mirada' ayer
[01:52.91]Preferiste escuchar antes que verme sonreír
[01:55.89]Me hiciste ser mejor, me queda agradecer
[01:58.89]
[01:58.89]Si algún día de estos se hace gris tu cielo
[02:01.99]Lo pintarás mirando un río
[02:04.45]Las lágrimas y el frío te hicieron de hielo
[02:07.30]Y daré la piel pa' servir de abrigo
[02:10.30]Y aunque el orgullo a veces ocultó mis miedo'
[02:13.30]Temo a caer y que no estés conmigo
[02:15.99]Te ofrezco amor real de un corazón sincero
[02:19.00]Y quemar la llave que abrió el laberinto
[02:21.86]
[02:21.86]Mai (Mai)
[02:24.99]Mai (Que abrió el laberinto)
[02:27.83]Mai (Mai)
[02:30.40]Mai (Que abrió el laberinto)
[02:33.39]Mai (Mai)
[02:36.55]Mai (Que abrió el laberinto)
[02:39.37]Mai (Mai)
[02:42.40]Mai
[02:42.72]Quemar la llave que abrió el laberinto
[02:45.92]
`
    },
    {
        title: "DIE FOR YOU",
        artist: "The Weeknd",
        cover: "image/die_for_you.jpg",
        src: "playlist/Die For You.mp3",
        lyricsOffset: 1.0,
        lyrics: `
[00:00.00]The Weeknd - Moriría por ti
[00:28.90]Buscando las formas de expresar lo que estoy sintiendo
[00:33.50]No puedo simplemente decir que no te amo
[00:37.60]Porque te amo, sí
[00:42.60]Es difícil para mí comunicar los pensamientos que guardo
[00:47.20]Pero esta noche voy a contártelos
[00:49.90]Déjame decirte la verdad
[00:52.40]Mi vida, déjame decirte la verdad, sí
[00:56.80]Sabes lo que estoy pensando, lo veo en tus ojos
[01:00.50]Odias quererme, odio cuando lloras
[01:04.10]Tienes miedo de estar sola, especialmente de noche
[01:07.60]Tengo miedo de extrañarte, me pasa todo el tiempo
[01:11.20]No quiero sentir esto, no puedo soportar el amor
[01:14.80]Trato de encontrar una razón que nos separe
[01:18.40]No está funcionando, pues eres perfecta
[01:20.20]Y sé que vales la pena
[01:21.90]No puedo alejarme, oh!
[01:26.00]A pesar de que estemos pasando por esto y te sientas sola
[01:31.90]Ten presente que moriría por ti
[01:35.50]Mi vida, moriría por ti, sí
[01:39.40]La distancia y el tiempo entre nosotros
[01:43.60]Nunca me harán cambiar de idea, porque, mi vida
[01:46.90]Moriría por ti
[01:50.20]Mi vida, moriría por ti, sí
[01:54.30]Buscando una manera de cambiar lo que estás sintiendo
[01:59.50]Pero, nena, no te estoy culpando
[02:03.80]Solo no me culpes tampoco, sí
[02:09.00]Porque no puedo soportar este dolor para siempre
[02:12.50]Y no encontrarás a nadie mejor
[02:15.80]Porque soy el indicado para ti, mi vida
[02:18.70]Creo que soy el indicado para ti, mi vida
[02:22.60]Sabes lo que estoy pensando, lo veo en tus ojos
[02:26.50]Odias quererme, odio cuando lloras
[02:30.00]No está funcionando, pues eres perfecta
[02:31.80]Y sé que vales la pena
[02:33.90]No puedo alejarme, oh!
[02:37.60]A pesar de que estemos pasando por esto
[02:41.00]Y que esto te hace sentir sola
[02:43.30]Ten presente que moriría por ti
[02:47.60]Mi vida, moriría por ti, sí
[02:51.80]La distancia y el tiempo entre nosotros
[02:55.00]Nunca me harán cambiar de idea, porque, mi vida
[02:58.70]Moriría por ti
[03:01.60]Mi vida, moriría por ti, sí
[03:05.60]Moriría por ti, mentiría por ti
[03:09.40]Siendo honesto contigo, mataría por ti, mi vida
[03:16.00]Solo digo, sí
[03:19.90]Moriría por ti, mentiría por ti
[03:23.80]Siendo honesto contigo, mataría por ti, mi vida
[03:34.60]A pesar de que estemos pasando por esto
[03:38.30]Y que esto te hace sentir sola
[03:40.80]Ten presente que moriría por ti
[03:44.50]Mi vida, moriría por ti, sí
[03:48.80]La distancia y el tiempo entre nosotros
[03:52.50]Nunca me harán cambiar de idea, porque, mi vida
[03:56.00]Moriría por ti
[03:58.40]Mi vida, moriría por ti, sí, mi vida
`
    },
    {
        title: "My Blood",
        artist: "twenty one pilots",
        cover: "image/my_blood.jpg",
        src: "playlist/twenty one pilots - My Blood.mp3 ",
        lyricsOffset: 3.4,
        lyrics: `
[00:09.20]Cuando todos a los que creías conocer
[00:13.85]Abandonen tu batalla, yo iré contigo
[00:18.10]Estás enfrentando un pasillo oscuro
[00:22.55]Tomaré mi linterna e iré contigo
[00:26.21]
[00:27.17]Iré contigo, iré contigo
[00:31.64]Iré contigo, iré contigo
[00:35.89]Iré contigo, iré contigo
[00:40.43]Iré contigo
[00:42.05]
[00:43.39]Rodeado y contra una pared
[00:48.95]Los destrozaré a todos e iré contigo
[00:53.28]Cuando las opciones se acaben, debes defenderte
[00:57.88]Tomaré mi bate e iré contigo
[01:01.62]
[01:02.17]Iré contigo, iré contigo
[01:06.94]Iré contigo, sí
[01:09.63]
[01:10.14]Quédate conmigo
[01:11.85]No, no necesitas correr
[01:14.83]Quédate conmigo, mi sangre
[01:17.31]No necesitas correr
[01:19.17]Quédate conmigo
[01:20.74]No, no necesitas correr
[01:23.55]Quédate conmigo, mi sangre
[01:26.04]No necesitas correr
[01:27.86]
[01:27.99]Si llega el día en que
[01:30.28]Haya gente apostada al final de tu entrada
[01:32.34]Pidiendo tu cabeza y gritando tu nombre
[01:34.57]Me lanzaré sobre ellos, estoy llegando
[01:37.00]¿Acaso no saben que crecí contigo?
[01:38.90]Si vienen a buscar problemas, iré contigo
[01:41.22]Manténganlo afuera, manténganlo afuera, sí
[01:43.97]
[01:45.36]Quédate conmigo
[01:47.20]No, no necesitas correr
[01:49.99]Quédate conmigo, mi sangre
[01:52.58]No necesitas correr
[01:54.45]Quédate conmigo
[01:56.27]No, no necesitas correr
[01:58.79]Quédate conmigo, mi sangre
[02:01.44]No necesitas correr
[02:03.55]
[02:05.75]No necesitas correr
[02:10.19]No necesitas correr
[02:14.76]No necesitas correr
[02:18.98]No necesitas correr
[02:21.00]
[02:28.20]Si te encuentras en una guarida de leones
[02:32.49]Saltaré directo y quitaré el seguro de mi granada
[02:36.82]E iré contigo
[02:39.17]Iré contigo, iré contigo
[02:43.63]Iré contigo, iré contigo (No necesitas correr)
[02:48.12]Iré contigo, iré contigo (No necesitas correr)
[02:52.10]Mi sangre, iré contigo, sí
[02:55.03]
[02:55.53]Quédate conmigo
[02:57.79]No, no necesitas correr
[03:00.45]Quédate conmigo, mi sangre
[03:03.16]No necesitas correr
[03:04.98]Quédate conmigo
[03:06.27]No, no necesitas correr
[03:09.29]Quédate conmigo, mi sangre
[03:11.88]No necesitas correr
[03:13.67]
[03:16.01]No necesitas correr
[03:20.56]No necesitas correr
[03:24.92]No necesitas correr
[03:29.42]No necesitas correr
[03:31.36]
[03:31.37]Quédate conmigo
[03:32.76]No, no necesitas correr
[03:35.64]Quédate conmigo, mi sangre
`
    },
    {
        title: "Count on me",
        artist: "Bruno Mars",
        cover: "image/count_on_me.jpg",
        src: "playlist/Count on me.mp3",
        lyricsOffset: 0,
        lyrics: `
[00:00.00]Bruno Mars - Cuenta conmigo
[00:02.40](Intro)
[00:02.41]Oh-oh-oh
[00:05.01]Si alguna vez te encuentras atrapada en medio del mar
[00:10.45]Navegaré por el mundo para encontrarte
[00:15.82]Si alguna vez te encuentras perdida en la oscuridad y no puedes ver
[00:21.07]Yo seré la luz que te guíe
[00:28.33]Descubrimos de qué estamos hechos
[00:32.03]Cuando somos llamados a ayudar a amigos en necesidad
[00:37.06]Puedes contar conmigo como 1, 2, 3
[00:42.49]Ahí estaré
[00:45.46]Y sé que cuando lo necesite
[00:47.98]Puedo contar contigo como 4, 3, 2
[00:53.32]Y ahí estarás
[00:56.27]Porque eso es lo que los amigos deben hacer, oh sí
[01:00.62]Ooh-ooh-ooh-ooh-ooh
[01:03.33]Ooh-ooh-ooh-ooh-ooh
[01:06.45]Ooh, sí, sí
[01:09.89]Si estás dando vueltas en la cama
[01:11.33]Y simplemente no puedes conciliar el sueño
[01:15.12]Cantaré una canción a tu lado
[01:20.49]Y si alguna vez olvidas lo mucho que significas para mí
[01:25.90]Cada día te lo recordaré, oh
[01:33.01]Descubrimos de qué estamos hechos
[01:36.68]Cuando somos llamados a ayudar a amigos en necesidad
[01:41.72]Puedes contar conmigo como 1, 2, 3
[01:47.32]Ahí estaré
[01:50.24]Y sé que cuando lo necesite
[01:52.68]Puedo contar contigo como 4, 3, 2
[01:58.07]And you'll be there
[02:00.93]Porque eso es lo que los amigos deben hacer, oh sí
[02:05.28]Ooh-ooh-ooh-ooh-ooh
[02:08.15]Ooh-ooh-ooh-ooh-ooh
[02:10.71]Ooh, sí, sí
[02:14.59]Siempre tendrás mi hombro cuando llores
[02:25.41]Nunca te soltaré
[02:28.45]Nunca te diré adiós
[02:33.85]Ya sabes...
[02:35.49]Puedes contar conmigo como 1, 2, 3
[02:41.21]Ahí estaré
[02:44.13]Y sé que cuando lo necesite
[02:46.69]Puedo contar contigo como 4, 3, 2
[02:51.94]Y ahí estarás
[02:54.90]Porque eso es lo que los amigos deben hacer, oh sí
[02:59.27]Ooh-ooh-ooh-ooh-ooh
[03:02.03]Ooh-ooh-ooh-ooh-ooh
[03:04.76]Ooh
[03:05.75]Puedes contar conmigo, porque yo puedo contar contigo
`
    },
    {
        title: "Cómplices",
        artist: "Sebastián Romero",
        cover: "image/complices.jpg",
        src: "playlist/Cómplices - Sebastián Romero.mp3",
        lyricsOffset: 7,
        lyrics: `
[00:00.00]Sebastián Romero - Cómplices
[00:02.40](Intro Instrumental)
[00:10.00]Eres un curita para el alma
[00:14.00]Estás tan loca como yo
[00:17.80]Puedo contarte lo que sea, en resumen
[00:21.80]Contigo yo puedo ser yo
[00:25.80]Me has visto muy ilusionado
[00:29.80]También llorando por amor
[00:33.80]Y aunque a veces no estemos de acuerdo
[00:37.00]No hay secretos entre tú y yo
[00:41.00]Eres mi cómplice en el crimen
[00:45.00]Mi mano derecha, mi compinche
[00:49.00]Eres mi otra mitad y también mi alma gemela
[00:57.00]Tú eres café y yo el azúcar
[01:01.00]Tú eres la letra y yo la música
[01:05.00]Eres mi otra mitad, el ying y el yang
[01:10.00]Tú eres la pieza que me faltaba encontrar
[01:16.00](Puente Instrumental)
[01:30.00]Y a veces los polos opuestos
[01:36.50]Son el mejor complemento
[01:39.50]Y ni la luna y el sol
[01:44.00]Van tan bien como vamos tú y yo
[01:48.00]Eres quien escucha mis problemas
[01:52.50]A las tres de la mañana
[01:56.50]En las buenas y en las malas
[02:00.50]Si me necesitas solo llama
[02:04.50]Tú eres cómplice en el crimen
[02:08.00]Mi mano derecha, mi compinche
[02:12.00]Eres mi otra mitad y también mi alma gemela
[02:18.00]Yo soy café y tú el azúcar
[02:22.00]Tú eres la letra y yo la música
[02:27.00]Eres mi otra mitad, el ying y el yang
[02:31.00]Tú eres la pieza que me faltaba encontrar
[02:40.00]Tú eres la pieza que me faltaba encontrar
[02:47.00]Tú eres la pieza que me faltaba encontrar
[02:52.00](Fin)
`
    }
];

let currentSongIndex = 0;
let isPlaying = false;
let currentLyrics = []; // Array of {time: seconds, text: string}

// Elementos del DOM
const audio = new Audio();
const coverImg = document.getElementById('album-cover');
const titleEl = document.getElementById('track-title');
const artistEl = document.getElementById('track-artist');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const albumArtContainer = document.querySelector('.album-art');
const lyricsContainer = document.getElementById('lyrics-container');
// const toggleLyricsBtn = document.getElementById('toggle-lyrics'); // Optional toggle

// Cargar primera canción
loadSong(songs[currentSongIndex]);

function loadSong(song) {
    titleEl.innerText = song.title;
    artistEl.innerText = song.artist;
    coverImg.src = song.cover;
    audio.src = song.src;

    // Parse Lyrics with Offset
    currentLyrics = parseLRC(song.lyrics, song.lyricsOffset || 0);
    renderLyrics();
}


function parseLRC(lrcString, offset = 0) {
    if (!lrcString) return [];
    const lines = lrcString.split('\n');
    const lyrics = [];
    // Regex para tiempo [mm:ss.xx] o [mm:ss.xxx]
    const timeReg = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;

    lines.forEach(line => {
        const match = timeReg.exec(line);
        if (match) {
            const minutes = parseInt(match[1]);
            const seconds = parseInt(match[2]);
            const milliseconds = parseInt(match[3]);
            // Convertir a segundos y sumar el offset
            let time = minutes * 60 + seconds + milliseconds / 1000;
            time += offset;

            const text = line.replace(timeReg, '').trim();
            // Solo agregar si la línea tiene texto o queremos mostrar espacios instrumentales
            if (text) {
                lyrics.push({ time, text });
            }
        }
    });
    return lyrics;
}

function renderLyrics() {
    lyricsContainer.innerHTML = '';
    if (currentLyrics.length === 0) {
        lyricsContainer.innerHTML = '<p class="lyric-line">Sin letra disponible</p>';
        return;
    }

    currentLyrics.forEach((line, index) => {
        const p = document.createElement('p');
        p.classList.add('lyric-line');
        p.innerText = line.text;
        p.dataset.time = line.time;
        p.dataset.index = index;
        lyricsContainer.appendChild(p);
    });
}

function updateLyrics(currentTime) {
    if (currentLyrics.length === 0) return;

    // Find active line
    let activeIndex = -1;
    for (let i = 0; i < currentLyrics.length; i++) {
        if (currentTime >= currentLyrics[i].time) {
            activeIndex = i;
        } else {
            break;
        }
    }

    // Update UI if changed
    const lines = document.querySelectorAll('.lyric-line');
    lines.forEach((line, index) => {
        if (index === activeIndex) {
            line.classList.add('active');

            // Calculate scroll position using getBoundingClientRect for accuracy
            const containerRect = lyricsContainer.getBoundingClientRect();
            const lineRect = line.getBoundingClientRect();
            const relativeTop = lineRect.top - containerRect.top;

            // Current scroll + relative position - half container + half line
            const scrollTarget = lyricsContainer.scrollTop + relativeTop - (lyricsContainer.clientHeight / 2) + (line.clientHeight / 2);

            lyricsContainer.scrollTo({
                top: scrollTarget,
                behavior: 'smooth'
            });

        } else {
            line.classList.remove('active');
        }
    });
}

function togglePlay() {
    isPlaying = !isPlaying;
    const icon = playBtn.querySelector('i');

    if (isPlaying) {
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
        albumArtContainer.classList.add('playing');
        audio.play().catch(error => {
            console.error("Error al reproducir:", error);
            alert("No se pudo iniciar la canción.");
            isPlaying = false;
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
        });
    } else {
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
        albumArtContainer.classList.remove('playing');
        audio.pause();
    }
}

// Update Listeners
audio.addEventListener('timeupdate', (e) => {
    const { duration, currentTime } = e.srcElement;

    // Progress Bar
    if (duration) {
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;
    }

    // Sync Lyrics
    updateLyrics(currentTime);
});

progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    if (duration) {
        audio.currentTime = (clickX / width) * duration;
    }
});

audio.addEventListener('ended', () => {
    nextBtn.click();
});

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => {
    const wasPlaying = isPlaying;
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    if (wasPlaying) {
        setTimeout(() => audio.play(), 100);
        albumArtContainer.classList.add('playing');
    }
});

nextBtn.addEventListener('click', () => {
    const wasPlaying = isPlaying;
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    if (wasPlaying) {
        setTimeout(() => audio.play(), 100);
        albumArtContainer.classList.add('playing');
    }
});


/* =========================================
   2. "THE QUESTION" LOGIC
   ========================================= */
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const memeImage = document.getElementById('meme-image');

const noMemes = [
    "image/cat1.gif",
    "image/cat2.gif",
    "image/cat3.gif",
    "image/cat-pringles4.gif",
    "image/sad-cat-sad-cat-meme5.gif"
];

const noTexts = [
    "¿En serio no?",
    "¿Estás segura?",
    "Piénsalo bien ...",
    "¡TE VOY METER TU COÑAZO!",
    "¡No seas así!",
    "¿Vas a seguir?",
    "MIRA CARAEMONDA DALE EN SÍ",
    "💔💔💔",
    "TE VOY A PEGAR",
    "Se te quedo el dedo pegado en el no?",
    "Dale en si coño"
];

let yesScale = 1;
let noClickCount = 0;

noBtn.addEventListener('click', () => {
    yesScale += 0.10;
    yesBtn.style.transform = `scale(${yesScale})`;

    // Cambiar texto en orden
    noBtn.innerText = noTexts[noClickCount % noTexts.length];
    noClickCount++;

    // Cambiar imagen aleatoria (o secuencial si lo prefieres, por ahora aleatoria)
    const randomMeme = noMemes[Math.floor(Math.random() * noMemes.length)];
    memeImage.src = randomMeme;
});

/* =========================================
   3. CELEBRATION LOGIC
   ========================================= */
const overlay = document.getElementById('celebration-overlay');
const closeOverlayBtn = document.getElementById('close-celebration');

yesBtn.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    launchConfetti();
});

closeOverlayBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    yesScale = 1;
    yesBtn.style.transform = `scale(1)`;
    noBtn.innerText = "No 😢";
    memeImage.src = "image/yippee-cat-kitty.gif";
});

function launchConfetti() {
    var duration = 5 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 2000 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function () {
        var timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);
        var particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}
