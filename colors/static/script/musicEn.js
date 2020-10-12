
import listMusic from './listMusic.js'

function compare(a, b) {
    const authorA = a.author.toUpperCase();
    const authorB = b.author.toUpperCase();
  
    let comparison = 0;
    if (authorA > authorB) {
      comparison = 1;
    } else if (authorA < authorB) {
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
        let txtMusicAuthor = document.createElement("h1");
        let divSmallMusicInfo = document.createElement("div");
        let nofsingles = document.createElement("h2");

        appBox.appendChild(divMusic);
        divMusic.appendChild(divInfoMusic);

        divInfoMusic.appendChild(divAllMusicInfo);

        divAllMusicInfo.appendChild(txtMusicAuthor);
        divAllMusicInfo.appendChild(divSmallMusicInfo)

        divSmallMusicInfo.appendChild(nofsingles);

        divInfoMusic.appendChild(imgPlay);

        divMusic.appendChild(imgMusicCover);


        divMusic.setAttribute('class', 'music');
        divInfoMusic.setAttribute('class', 'info_music');
        divAllMusicInfo.setAttribute('class', 'all_music_info');
        txtMusicAuthor.innerHTML = "<span>" + music.author + "</span>";
        divSmallMusicInfo.setAttribute('class', 'small_music_infos');
        nofsingles.setAttribute('class', 'music_nofsingles');
        if (music.nofsingles === 1) {
          nofsingles.textContent = music.nofsingles + " title";
        }else{
          nofsingles.textContent = music.nofsingles + " titles";
        };
        txtMusicAuthor.setAttribute('class', 'music_author');
        imgMusicCover.setAttribute('class', 'music-img');
        
        let urlCover = "../../../static/img/music/" + music.author + ".jpg";
        imgMusicCover.setAttribute('src', urlCover );
        imgPlay.setAttribute('src', "../../../static/img/playwhite.png");
    };