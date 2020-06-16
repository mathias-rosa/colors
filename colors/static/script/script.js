function lighton() {
    var light = document.getElementById('light');
    var src = light.getAttribute('src');
    if(src === "../../static/img/lightoff.png"){
        light.setAttribute('src', '../../static/img/lighton.png');
        }
    else{
        light.setAttribute('src', '../../static/img/lightoff.png');
        }
    }
function sound() {
    var volumeslider = document.getElementById('volumeslider');
    displayvol = getComputedStyle(volumeslider).display;
    var switchoff = document.getElementById('switchoff');
    displayoff = getComputedStyle(switchoff).display;
    var popupcontainer = document.getElementById('popupcontainer');
    displaypop = getComputedStyle(popupcontainer).display;
    if(displayvol === "none"){
        volumeslider.style.display = 'flex';
        off();
        volumeslider.style.display = 'flex';
        }
    else{
        volumeslider.style.display = 'none';
        }
    }
function switchoff() {
    var switchoff = document.getElementById('switchoff');
    displayoff = getComputedStyle(switchoff).display;
    if(displayoff === "none"){
        switchoff.style.display = 'flex';
        off();
        switchoff.style.display = 'flex';
        }
    else{
        switchoff.style.display = 'none';
        }
    }
function off(){
    var switchoff = document.getElementById('switchoff');
    var volumeslider = document.getElementById('volumeslider');
    var slt = "slt";
    displayvol = getComputedStyle(volumeslider).display;
    displayoff = getComputedStyle(switchoff).display;
    if(displayvol === "flex"){
        switchoff.style.display = 'none';
    }
    if(displayoff === "flex"){
        volumeslider.style.display = 'none';
    }
    else{
        slt === "bye";
    }
}

function playmusic (){
    var play = document.getElementById('play');
    var src = play.getAttribute('src');
    play.setAttribute('src', '../../static/img/pause.png');
    
}

function playpause() {
    var play = document.getElementById('play');
var src = play.getAttribute('src');
    if(src === "../../static/img/play.png"){
        
        play.setAttribute('src', '../../static/img/pause.png');
        myMedia.play();
        setVolume(0.5)
        }
    else{
        play.setAttribute('src', '../../static/img/play.png');
        myMedia.pause();
        }
    }
$("#barslide").slider({
    min: 0,
    max: 100,
    value: 50,
        range: "min",
    slide: function(event, ui) {
        setVolume(ui.value / 100);
        playmusic ()
        myMedia.play();
    }
    });
    
    var myMedia = document.createElement('audio');
    $('#play').append(myMedia);
    myMedia.id = "myMedia";
    playAudio('../../static/img/immusic.mp3', 0);
    
    function playAudio(fileName, myVolume) {
            myMedia.src = fileName;
            myMedia.setAttribute('loop', 'loop');
        setVolume(myVolume);
        myMedia.play();
    }
    
    function setVolume(myVolume) {
    var myMedia = document.getElementById('myMedia');
    myMedia.volume = myVolume;
    }

function screenturnedoff(){
    var screenturnedoff = document.getElementById('screenturnedoff');
    var switchoff = document.getElementById('switchoff');
    display = getComputedStyle(screenturnedoff).display;
    if(display === "none"){
        screenturnedoff.style.display = 'flex';
        switchoff.style.display = 'none';
        myMedia.pause();
    }
    else{
        screenturnedoff.style.display = 'none';
        switchoff.style.display = 'none';
    }
}
function dispnonepopup(){
    var popupcontainer = document.getElementById('popupcontainer');
    displaypop = getComputedStyle(popupcontainer).display;
    var switchoff = document.getElementById('switchoff');
    var volumeslider = document.getElementById('volumeslider');
    displayvol = getComputedStyle(volumeslider).display;
    console.log(displayvol)
    displayoff = getComputedStyle(switchoff).display;
    console.log(displayoff)
    if(displaypop === "none"){
        popupcontainer.style.display = 'flex';
    }
    else{
        popupcontainer.style.display = 'none';
        volumeslider.style.display = 'none';
        switchoff.style.display = 'none';
    }
}
function forcepopup(){
    var popupcontainer = document.getElementById('popupcontainer'); 
    popupcontainer.style.display = 'none';
}

//-------------------------------------------------------------------------------

function triselect(){
    var tri_buton = document.getElementsByClassName("tri")[0][0].textContent;
    color = getComputedStyle(tri_buton).backgroundColor;
    if (backgroundColor === "rgba(253, 250, 250, 0)"){
        tri_buton.style.backgroundColor = "#003669";
        tri_buton.style.color = "white";
    }
    else{
        tri_buton.style.backgroundColor = "rgba(253, 250, 250, 0)";
        tri_buton.style.color = "#404040";
    }
}


//Cinema-&-Music-----------------------------------------------------------------

const champDeRecherche = document.getElementsByClassName('champ_de_recherche')[0];
let userSearch = ""
champDeRecherche.addEventListener('input', function(event) {
    console.log(event.target.value);
});



//---- ---- ----

const TMDB_API_TOKEN = "5d6bf29b8d5dc0dddb07efa12631141a";

function getFilmsFromApiWithSearchedText(text, page){
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + TMDB_API_TOKEN + '&language=fr&query=' + text + "&page=" + page;
    return fetch(url)
        .then((reponse) => reponse.json())
        .catch((error) => console.log(error))
};

function getImageFromApi(name) {
    return 'https://image.tmdb.org/t/p/w300' + name
}