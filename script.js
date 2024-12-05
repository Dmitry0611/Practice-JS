
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastFilm;
let ratingFilm;

for (let i = 0; i < 2; i++) {
    lastFilm = prompt('Один из последних просмотренных фильмов','');
    ratingFilm = +prompt('На сколько оцените его?','')

    personalMovieDB.movies[lastFilm] = ratingFilm
}

console.log(personalMovieDB)
