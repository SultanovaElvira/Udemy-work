let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: function () {
    for (let index = 0; index < 2; index++) {
      let films1 = prompt("Один из последних просмотренных фильмов?");
      let mark1 = prompt("Hа сколько оцените его?");

      if (
        films1 === "" ||
        mark1 === "" ||
        films1.length > 50 ||
        films1 === null ||
        mark1 === null
      ) {
        console.log("err");
        index--;
      } else {
        personalMovieDB.movies[films1] = mark1;
      }
    }
  },
  personalLevel: function () {
    if (personalMovieDB.count <= 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count <= 30 && personalMovieDB.count >= 11) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 31) {
      console.log("вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: function (params) {
    if (params == false) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (let index = 0; index < 3; index++) {
      const lovelyGenre = prompt(`Ваш любимый жанр под номером ${index + 1}`);
      if (lovelyGenre === null || lovelyGenre == "") {
        index--;
      }

      personalMovieDB.genres[index] = lovelyGenre;
    }
  },
  toggleVisibleMyDB: function (bool) {
    if (bool === false) {
      personalMovieDB.privat = true;
    } else {
      personalMovieDB.privat = false;
    }
  },
};

personalMovieDB.writeYourGenres();
// console.log(personalMovieDB.genres);
personalMovieDB.genres.forEach(function (item, index) {
  console.log(`Любимый жанр  ${index + 1}-это ${item}`);
});

// **************************
/* функция rememberMyFilms с циклом while
// let i = 0;
// while (i < 2) {
//   let films1 = prompt("Один из последних просмотренных фильмов?");
//   let mark1 = prompt("Hа сколько оцените его?");
//   personalMovieDB.movies[films1] = mark1;

//   if (
//     films1 === "" &&
//     mark1 === "" &&
//     films1.length > 50 &&
//     films1 === null &&
//     mark1 === null
//   ) {
//     console.error();
//     // i--;
//   }
//   i++;
// }
*/