
import listMovie from './listMovie.js'

function compare(a, b) {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
  
    let comparison = 0;
    if (titleA > titleB) {
      comparison = 1;
    } else if (titleA < titleB) {
      comparison = -1;
    }
    return comparison;
  }
  
  listMovie.sort(compare);

const appBox = document.getElementsByClassName("app_box")[0];
  
function renderMovieList(){
  for (let movie of listMovie) {
    let divMovie =  document.createElement("a");
    let divInfoMovie = document.createElement("div");
    let imgMovieCover = document.createElement("img")
    let imgPlay = document.createElement("img")
    let divAllMovieInfo = document.createElement("div");
    let divSmallMovieInfo = document.createElement("div");
    let txtMovieTitle = document.createElement("h1");
    let txtMovieGenre = document.createElement("h2");
    let txtMovieSlash = document.createElement("h2");
    let txtMovieDuration = document.createElement("h2");

    appBox.appendChild(divMovie);
    divMovie.appendChild(divInfoMovie);

    divInfoMovie.appendChild(divAllMovieInfo);

    divAllMovieInfo.appendChild(txtMovieTitle);
    txtMovieTitle.innerHTML = "<span>" + movie.titleEs + "</span>";
    divAllMovieInfo.appendChild(divSmallMovieInfo);

    divSmallMovieInfo.appendChild(txtMovieGenre);
    divSmallMovieInfo.appendChild(txtMovieSlash);
    divSmallMovieInfo.appendChild(txtMovieDuration);

    txtMovieGenre.textContent = movie.genreEs;
    txtMovieSlash.textContent = " | ";
    txtMovieDuration.textContent = movie.duration;


    divInfoMovie.appendChild(imgPlay);

    divMovie.appendChild(imgMovieCover);


    divMovie.setAttribute('class', 'movie');
    let detailsUrl = '/es/cinema/details/' + movie.title;
    divMovie.setAttribute('href', detailsUrl);
    divInfoMovie.setAttribute('class', 'info_movie');
    divAllMovieInfo.setAttribute('class', 'all_movies_info');
    divSmallMovieInfo.setAttribute('class', 'small_movie_infos');
    txtMovieGenre.setAttribute('class', 'movie_genre');
    txtMovieSlash.setAttribute('class', 'movie_slash');
    txtMovieDuration.setAttribute('class', 'movie_duration');

    imgMovieCover.setAttribute('class', 'movie-img');

    let urlCover = "../../../static/img/cinema/" + movie.title + ".jpg";
    imgMovieCover.setAttribute('src', urlCover );
    imgPlay.setAttribute('src', "../../../static/img/playwhite.png");
  };
}

renderMovieList();