

let listMovie = [
    {
        title: "Frozen",
        titleFr: "La Reine Des neiges",
        titleEs: "Frozen: el reino del hielo",
        genre: "Animation, Adventure, Family ",
        genreFr: "Film d'animation, Aventure, Famille",
        genreEs: "Animación, Aventura, Familia",
        duration: "102 min",
    },
    {
        title: "Frozen II",
        titleFr: "La Reine Des neiges II",
        titleEs: "Frozen II",
        genre: "Animation, Adventure, Family",
        genreFr: "Aanimation, Aventure, Famille",
        genreEs: "Animación, Familia, Aventura",
        duration: "104 min",
    },
    {
        title: "La Grande Vadrouille",
        titleFr: "La Grande Vadrouille",
        titleEs: "La gran juerga",
        genre: "Comedy, French Movie",
        genreFr: "Comédie, Film Français",
        genreEs: "Película, Comedia, Bélica",
        duration: "132 min",
    },
    {
        title: "Star Wars",
        titleFr: "Star Wars",
        titleEs: "Star Wars",
        genre: "Adventure, Action, Science Fiction",
        genreFr: "Film, Aventure, Action, Science Fiction",
        genreEs: "Película, Aventura, Acción, Ciencia Ficción",
        duration: "121 min"
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        titleFr: "Harry Potter à l'école des sorciers",
        titleEs: "Harry Potter y la piedra filosofal",
        genre: "Movie, Adventure, Fantasy",
        genreFr: "Film, Fantastique, Aventure",
        genreEs: "Película, Aventura, Fantasía, Familia",
        duration: "153 min"
    },
    {
        title: "Harry Potter and the Chamber of Secrets",
        titleFr: "Harry Potter et la Chambre des secrets",
        titleEs: "Harry Potter y la cámara secreta",
        genre: "Movie, Adventure, Fantasy",
        genreFr: "Film, Aventure, Fantastique",
        genreEs: "Película, Aventura, Fantasía",
        duration: "161 min"
    },
    {
        title: "Harry Potter and the Prisoner of Azkaban",
        titleFr: "Harry Potter et le Prisonnier d'Azkaban",
        titleEs: "Harry Potter y el prisionero de Azkaban",
        genre: "Movie, Adventure, Fantasy",
        genreFr: "Film, Aventure, Fantastique",
        genreEs: "Película, Aventura, Fantasía",
        duration: "140 min"
    },
    {
        title: "Harry Potter and the Goblet of Fire",
        titleFr: "Harry Potter et la Coupe de feu",
        titleEs: "Harry Potter y el cáliz de fuego",
        genre: "Movie, Adventure, Fantasy",
        genreFr: "Film, Aventure, Fantastique, Familial",
        genreEs: "Película, Aventura, Fantasía, Familia",
        duration: "155 min"
    },
    {
        title: "Harry Potter and the Half-Blood Prince",
        titleFr: "Harry Potter et le Prince de sang-mêlé",
        titleEs: "Harry Potter y el misterio del príncipe",
        genre: "Film, Adventure, Fantasy",
        genreFr: "Film, Aventure, Fantastique ",
        genreEs: "Película, Fantasía, Aventura",
        duration: "153 min"
    },
    {
        title: "Harry Potter and the Order of the Phoenix",
        titleFr: "Harry Potter et l'Ordre du Phénix",
        titleEs: "Harry Potter y la Orden del Fénix",
        genre: "Movie, Adventure, Fantasy",
        genreFr: "Film, Aventure, Fantastique",
        genreEs: "Película, Fantasía, Aventura",
        duration: "145 min"
    },
    {
        title: "Harry Potter and the Deathly Hallows Part 1",
        titleFr: "Harry Potter et les Reliques de la mort : 1ère partie",
        titleEs: "Harry Potter y las Reliquias de la Muerte - Parte 1",
        genre: "Movie, Adventure, Fantasy",
        genreFr: "Film, Aventure, Fantastique",
        genreEs: "Película, Fantasía, Aventura",
        duration: "145 min"
    },
    {
        title: "Harry Potter and the Deathly Hallows Part 2",
        titleFr: "Harry Potter et les Reliques de la mort : 2ème partie",
        titleEs: "Harry Potter y las Reliquias de la Muerte - Parte 2",
        genre: "Movie, Adventure, Fantasy",
        genreFr: "Film,  Aventure, Fantastique",
        genreEs: "Película, Fantasía, Aventura",
        duration: "130 min"
    },
    {
        title: "Sully",
        titleFr: "Sully",
        titleEs: "Sully",
        genre: "Movie, Drama, History ",
        genreFr: "Film, Drame, Histoire",
        genreEs: "Película, Drama, Historia",
        duration: "106 min"
    },
    {
        title: "Mary Poppins",
        titleFr: "Mary Poppins",
        titleEs: "Mary Poppins",
        genre: "Movie, Comedy, Family, Fantasy",
        genreFr: "Film, Comédie, Familial, Fantastique",
        genreEs: "Película, Comedia, Familia, Fantasí",
        duration: "131 min"
    },
    {
        title: "Pride & Prejudice",
        titleFr: "Orgueil et Préjugés",
        titleEs: "Orgullo y prejuicio",
        genre: "Movie, Drama, Romance",
        genreFr: "Film, Drame, Romance",
        genreEs: "Película, Drama, Romance",
        duration: "127 min"
    },
    {
        title: "A Star Is Born",
        titleFr: "A Star Is Born",
        titleEs: "Ha nacido una estrella",
        genre: "Movie, Drama, Romance, Music",
        genreFr: "Film, Drame, Romance, Musique",
        genreEs: "Película, Drama, Romance, Música",
        duration: "135 min"
    },
    {
        title: "GoodFellas",
        titleFr: "Les Affranchis",
        titleEs: "Uno de los nuestros",
        genre: "Movie, Drama, Crime",
        genreFr: "Film, Drame, Crime",
        genreEs: "Drama, Crimen",
        duration: "141 min"
    },
    {
        title: "2001 A Space Odyssey",
        titleFr: "2001 : l'odyssée de l'espace",
        titleEs: "2001: Una odisea del espacio",
        genre: "Movie, Science Fiction, Mystery, Adventure",
        genreFr: "Film, Science-Fiction, Mystère, Aventure",
        genreEs: "Película, Ciencia ficción, Misterio, Aventura",
        duration: "158 min"
    },
    {
        title: "Fight Club",
        titleFr: "Fight Club",
        titleEs: "El club de la lucha",
        genre: "Movie, Drama",
        genreFr: "Film, Drame",
        genreEs: "Película, Drama",
        duration: "139 min"
    },
    {
        title: "The Incredibles",
        titleFr: "Les Indestructibles",
        titleEs: "Los Increíbles",
        genre: "Animation, Action, Adventure, Family",
        genreFr: "Animation, Action, Aventure, Familial",
        genreEs: "Animación, Acción, Aventura, Familia",
        duration: "123 min"
    },
    {
        title: "Incredibles 2",
        titleFr: "Les Indestructibles 2",
        titleEs: "Los Increíbles 2",
        genre: "Animation, Action, Adventure, Family",
        genreFr: "Animation, Action, Aventure, Familial",
        genreEs: "Animación, Acción, Aventura, Familia",
        duration: "118 min"
    },
    {
        title: "Ponyo",
        titleFr: "Ponyo sur la falaise",
        titleEs: "Ponyo en el acantilado",
        genre: "Animation, Family",
        genreFr: "Animation, Familial",
        genreEs: "Animación, Familia",
        duration: "100 min"
    },
    {
        title: "Porco Rosso",
        titleFr: "Porco Rosso",
        titleEs: "Porco Rosso",
        genre: "Animation, Comedy, Adventure",
        genreFr: "Animation, Comédie, Aventure",
        genreEs: "Animación, Comedia, Aventura,",
        duration: "93 min"
    },
    {
        title: "Interstellar",
        titleFr: "Interstellar",
        titleEs: "Interstellar",
        genre: "Movie, Adventure, Drama, Science Fiction",
        genreFr: "Film, Aventure, Drame, Science-Fiction",
        genreEs: "Película, Aventura, Drama, Ciencia ficción",
        duration: "169 min"
    },
    {
        title: "The Graduate",
        titleFr: "Le Lauréat",
        titleEs: "El graduado",
        genre: "Movie, Comedy, Drama",
        genreFr: "Film, Comédie, Drame",
        genreEs: "Película, Comedia, Drama",
        duration: "106 min"
    },
    {
        title: "A Clockwork Orange",
        titleFr: "Orange mécanique",
        titleEs: "La naranja mecánica",
        genre: "Movie, Science Fiction, Drama",
        genreFr: "Film, Science-Fiction, Drame",
        genreEs: "Película, Ciencia ficción, Drama",
        duration: "136 min"
    },
    {
        title: "Colors",
        titleFr: "Colors",
        titleEs: "Colors",
        genre: "Documentary",
        genreFr: "Documentaire",
        genreEs: "Documental",
        duration: "120 min"
    },
    {
        title: "Colors",
        titleFr: "Colors",
        titleEs: "Colors",
        genre: "Documentary",
        genreFr: "Documentaire",
        genreEs: "Documental",
        duration: "120 min"
    },
]

export default listMovie