import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    movie_name: "Shigatsu wa Kimi no Uso",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Tình cảm" },
    starRatingMovie: 2.5,
    posters : "https://animehay.club/upload/poster/75.jpg" , 
    list_episode : [
      {
        _id: "1a1" , 
        path : "https://scontent.xx.fbcdn.net/v/t42.27313-2/10000000_134397259090217_7619294906167145046_n.mp4?_nc_cat=104&vs=9dfbd39578a6a13f&_nc_vs=HBksFQAYJEdJQ1dtQUFwQ2VQTU8zb0FBRll5Q1RGWkxMMXBickZxQUFBRhUAAsgBABUAGCRHQmxrWVJBWnF1aVNKT2NLQUp6WTh6VUxnOXhFYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmosDpy9jrbRUCKAJDMxgLdnRzX3ByZXZpZXccF0B3WU%2FfO2RaGClkYXNoX2k0bGl0ZWJhc2ljXzVzZWNnb3BfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2Q4ElZJREVPX1ZJRVdfUkVRVUVTVBsJiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMBMAxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50ATARb2VtX2lzX2V4cGVyaW1lbnQADG9lbV92aWRlb19pZA80ODU0NTk2MDk4MjM3NjESb2VtX3ZpZGVvX2Fzc2V0X2lkDzM3MTc4NTMzNDc5MDA2NxVvZW1fdmlkZW9fcmVzb3VyY2VfaWQPMjQxNTQzNjcxNTI1MzkzHG9lbV9zb3VyY2VfdmlkZW9fZW5jb2RpbmdfaWQPMzM0OTU5NDk1MjM4NTM4JQIcACXEARsHiAFzBDE1MDQCY2QKMjAyMi0wMi0yOANyY2IBMANhcHAQQnVzaW5lc3MgTWFuYWdlcgJjdBlDT05UQUlORURfUE9TVF9BVFRBQ0hNRU5UE29yaWdpbmFsX2R1cmF0aW9uX3MHMzczLjcxNQJ0cxVwcm9ncmVzc2l2ZV9lbmNvZGluZ3MA&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=qzVNqFR8ZZ8AX_XednQ&_nc_ht=video-lax3-1.xx&edm=APRAPSkEAAAA&oh=00_AT9hqzuQeVrdsGRBG7GBWfEu5Tjf0VGBq_2GGCt7PAB_Hg&oe=625E032C&_nc_rid=404396386731638" , 
      }
    ]
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    movie_name: "Ganbare Douki-chan",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Tình cảm" },
    starRatingMovie: 2.5 , 
    posters : "https://animehay.club//upload/poster/3323.jpg" , 
    
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    movie_name: "Get OutAharen-san wa Hakarenai",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Hài hước" },
    starRatingMovie: 3.5,
    posters : "https://animehay.club//upload/poster/3463.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    movie_name: "One Piece",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Hành động" },
    starRatingMovie: 3.5,
    posters : "https://animehay.club/upload/poster/34.jpg" , 
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    movie_name: "Shaman King (2021)",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Hành động" },
    starRatingMovie: 3.5 , 
    posters : "https://animehay.club/upload/poster/3207.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    movie_name: "Dragon Quest: Dai no Daibouken",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Hành động" },
    starRatingMovie: 3, 
    posters : "https://animehay.club/upload/poster/3100.jpg" , 
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    movie_name: "Shachiku-san wa Youjo Yuurei ni Iyasaretai.",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Hài hước" },
    starRatingMovie: 4.5 , 
    posters : "https://animehay.club//upload/poster/3483.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    movie_name: "Machikado Mazoku 2nd Season",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Hài hước" },
    starRatingMovie: 3.5 , 
    posters : "https://animehay.club//upload/poster/3488.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    movie_name: "Kawaii dake ja Nai Shikimori-san",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Tình cảm" },
    starRatingMovie: 3.5 , 
    posters : "https://animehay.club//upload/poster/3491.jpg"
  }
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find(m => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.title = movie.title;
  movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now().toString();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find(m => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}
