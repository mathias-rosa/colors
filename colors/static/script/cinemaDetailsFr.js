import listMovie from './listMovie.js'

let movie_title = document.querySelector(".flaskvariable").textContent;


for(let movie of listMovie){
    if (movie.title === movie_title){
        let listeTitle = document.querySelector('.selbox h1')
        let cover = document.querySelector('.movie_img');
        let title = document.querySelector('.title h1');
        let genre = document.querySelector('.genre h1');
        let duration = document.querySelector('.duration h1');
        let description = document.querySelector('.description h1');
        let urlCover = "../../../static/img/cinema/" + movie.title + ".jpg";
        cover.setAttribute('src', urlCover );
        listeTitle.textContent = movie.titleFr;
        title.textContent = movie.titleFr;
        genre.textContent = movie.genreFr;
        duration.textContent = movie.duration;
        description.textContent = movie.descriptionFr;
        async function request(){
            let TMDB_api_key = "5d6bf29b8d5dc0dddb07efa12631141a";
            let urlR = "https://api.themoviedb.org/3/movie/" + movie.TMDB_id + "/videos?api_key=" + TMDB_api_key + "&language=fr-FR";
            return fetch(urlR)
            .then((response) => {
                return response.json();
            })
            .catch(err => {
                console.log(err);
            });
        };
        async function ytid() {
            let varytid = await request();
            let urlTrailer = "https://www.youtube.com/embed/" + varytid.results[0].key;
            let player = document.querySelector('#player');
            player.setAttribute('src', urlTrailer);
        };
        ytid();
    }
}

let div_btn_un = document.querySelector('#div_btn_un');
let trailerbox = document.querySelector('.trailerbox');

div_btn_un.addEventListener('click', () => {
    trailerbox.style.display = "flex";
});

trailerbox.addEventListener('click', () => {
    trailerbox.style.display = "none";
    let player = document.querySelector('#player');
    player.pauseVideo();
    
});