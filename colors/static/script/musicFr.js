
import listMusic from './listMusic.js'

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
  
  listMusic.sort(compare);

const appBox = document.getElementsByClassName("app_box")[0];
  
    for (let music of listMusic) {
        let divMusic =  document.createElement("div");
        let divInfoMusic = document.createElement("div");
        let imgMusicCover = document.createElement("img")
        let imgPlay = document.createElement("img")
        let divAllMusicInfo = document.createElement("div");
        let divSmallMusicInfoUn = document.createElement("div");
        let txtMusicTitle = document.createElement("h1");
        let txtMusicDuration = document.createElement("h2");
        let divSmallMusicInfo = document.createElement("div");
        let txtMusicGenre = document.createElement("h2");
        let txtMusicSlash = document.createElement("h2");
        let txtMusicAuthor = document.createElement("h2");

        appBox.appendChild(divMusic);
        divMusic.appendChild(divInfoMusic);

        divInfoMusic.appendChild(divAllMusicInfo);

        divAllMusicInfo.appendChild(divSmallMusicInfoUn)
        divSmallMusicInfoUn.appendChild(txtMusicTitle);
        divSmallMusicInfoUn.appendChild(txtMusicSlash);
        divSmallMusicInfoUn.appendChild(txtMusicDuration)
        divAllMusicInfo.appendChild(divSmallMusicInfo);

        divSmallMusicInfo.appendChild(txtMusicGenre);
        divSmallMusicInfo.appendChild(txtMusicAuthor);

        txtMusicGenre.textContent = music.genreFr;
        txtMusicSlash.textContent = " | ";
        txtMusicAuthor.textContent = music.author;
        txtMusicDuration.textContent = music.duration;


        divInfoMusic.appendChild(imgPlay);

        divMusic.appendChild(imgMusicCover);


        divMusic.setAttribute('class', 'music');
        divInfoMusic.setAttribute('class', 'info_music');
        divAllMusicInfo.setAttribute('class', 'all_music_info');
        divSmallMusicInfoUn.setAttribute('class', 'small_music_info_un')
        txtMusicTitle.innerHTML = "<span>" + music.title + "</span>";
        txtMusicSlash.setAttribute('class', 'music_slash');
        txtMusicDuration.setAttribute('class', 'music_duration');
        divSmallMusicInfo.setAttribute('class', 'small_music_infos');
        txtMusicGenre.setAttribute('class', 'music_genre');
        txtMusicAuthor.setAttribute('class', 'music_author');
        imgMusicCover.setAttribute('class', 'music-img');
        
        let urlCover = "../../../static/img/music/" + music.title + ".jpg";
        imgMusicCover.setAttribute('src', urlCover );
        imgPlay.setAttribute('src', "../../../static/img/playwhite.png");
    };