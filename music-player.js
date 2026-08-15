const songImage = document.getElementById("song-image");
const songName = document.getElementById("song-name");
const songArtist = document.getElementById("song-artist");

const songSlider = document.getElementById("slider-song");

const playpauseButton = document.getElementById("playpause-song");
const prevSongButton = document.getElementById("prev-song");
const nextSongButton = document.getElementById("next-song");

const songs = [
    {
        image: "./music/images/KISS.PNG",
        name: "Kiss",
        artist: "Lil Peep",
        audio: "./music/songs/Kiss by Lil Peep.mp3"
    },
    {
        image: "./music/images/EUPHORIA.PNG",
        name: "Euphoria",
        artist: "Keshi",
        audio: "./music/songs/Euphoria by Keshi.mp3"
    },
    {
        image: "./euphoria.png",
        name: "Euphoria",
        artist: "Keshi",
        audio: "./Euphoria by Keshi.mp3"
    },
];

const audio = document.createElement("audio");
let currentSongIndex = 0;
updateSong();

prevSongButton.addEventListener("click", function() {
    if (currentSongIndex == 0) {
        return;
    }
    else{
    currentSongIndex--;
    updateSong();
    audio.play();
    }
});

nextSongButton.addEventListener("click", function() {
    if (currentSongIndex == songs.length - 1) {
        return;
    }
    else{
        currentSongIndex++;
        updateSong();
        audio.play();
    }
});

playpauseButton.addEventListener("click", function() {
    if (!audio.paused){
        audio.pause();
    }
    else {
        audio.play();
    }
});

function updateSong() {
    const song = songs[currentSongIndex];
    songImage.src = song.image;
    songName.innerText = song.name;
    songArtist.innerText = song.artist;

    audio.src = song.audio;
    audio.onloadedmetadata = function() {
        songSlider.value = 0;
        songSlider.max - audio.duration;
    }
};

songSlider.addEventListener("change", function() {
    audio.currentTime = songSlider.value;
});

function moveSlider() {
    songSlider.value = audio.currentTime;
};

setInterval(moveSlider, 1000);
