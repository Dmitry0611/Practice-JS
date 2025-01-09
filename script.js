
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
                  ratingFilm = prompt('На сколько оцените его?', '');

            if (lastFilm != null && ratingFilm != null && lastFilm != '' && ratingFilm != '' && lastFilm.length < 50) {
                personalMovieDB.movies[lastFilm] = ratingFilm;
            } else {
                console.log('error');
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка')
        }

    },
    showMyDB: function(obj) {
        if (obj.privat == false) {
            console.log(personalMovieDB);
        } else {
            console.log(`База данных скрыта для вас!`)
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false
        } else {
            personalMovieDB.privat = true
        }
    },
    writeYourGengers: function() {
        for (let i = 1; i < 4; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}?`,'')

            if (genre == null || genre == '') {
                i--
            } else {
                personalMovieDB.genres[i - 1] = genre
            }
        }
        personalMovieDB.genres.forEach((elem, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${elem}`)
        })
    }
};


