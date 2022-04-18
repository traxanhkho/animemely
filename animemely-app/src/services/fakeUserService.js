import { getMovie } from "./fakeMovieService";

const movies = getMovies();
const tokenKey = "token";

const users = [
  {
    _id: "user1",
    name: "dat dang",
    followed: [
      "5b21ca3eeb7f6fbccd471815",
      "5b21ca3eeb7f6fbccd471816",
      "5b21ca3eeb7f6fbccd471817",
    ],
    history: ["5b21ca3eeb7f6fbccd47181a", "5b21ca3eeb7f6fbccd47181e"],
    token: "datdeptraivaidai.okdatlanhathehe",
  },
  {
    _id: "user2",
    name: "tien dang",
    followed: ["5b21ca3eeb7f6fbccd47181a", "5b21ca3eeb7f6fbccd47181e"],
    history: [
      "5b21ca3eeb7f6fbccd471815",
      "5b21ca3eeb7f6fbccd471816",
      "5b21ca3eeb7f6fbccd471817",
    ],
    token: "tiengamaivaidai.khongbietghicaigi",
  },
];

export function getCurrentUser() {
  const token = localStorage.getItem(tokenKey);
  if (token) {
    return users.find((u) => u.token === token);
  }
  return null;
}

export function getFollowed() {
  const user = getCurrentUser();
  const obj = [];
  if (user) {
    for (key of user.followed) {
      obj.push(getMovie(key));
    }
    return obj;
  }

  return null;
}

export function getHistory() {
  const user = getCurrentUser();
  const obj = [];
  if (user) {
    for (key of user.history) {
      obj.push(getMovie(key));
    }
    return obj;
  }

  return null;
}
