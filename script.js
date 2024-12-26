
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
};

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
              ratingFilm = prompt('На сколько оцените его?', '');

        if (lastFilm != null && ratingFilm != null && lastFilm != '' && ratingFilm != '' && lastFilm.length < 50) {
            personalMovieDB.movies[lastFilm] = ratingFilm;
        } else {
            console.log('error');
        }
    }
};

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка')
    }

};

detectPersonalLevel();

function writeYourGengers() {
    for (let i = 1; i < 4; i++) {
        let questionGenger = prompt(`Ваш любимый жанр под номером ${i}?`,'')

        personalMovieDB.genres.push(questionGenger)
    }
};

writeYourGengers();

function showMyDB(obj) {
    if (obj.privat == false) {
        console.log(personalMovieDB);
    } else {
        console.log(`База данных скрыта для вас!`)
    }
};

showMyDB(personalMovieDB);


