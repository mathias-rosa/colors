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
        listeTitle.textContent = movie.title;
        title.textContent = movie.title;
        genre.textContent = movie.genre;
        duration.textContent = movie.duration;
        description.textContent = movie.description;
    }
}
