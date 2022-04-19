import { getMovie, getMovies } from "./fakeMovieService";

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
    history: [
      "5b21ca3eeb7f6fbccd47181a",
      "5b21ca3eeb7f6fbccd47181e",
      "5b21ca3eeb7f6fbccd471817",
      "5b21ca3eeb7f6fbccd471816",
    ],
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

function getUser(id) {
  return users.find((u) => u._id === id);
}

export function getFollowed() {
  // const user = getCurrentUser();
  const user = "user1";
  const obj = [];
  if (user) {
    const currentUser = getUser(user);
    for (const value of currentUser.followed) {
      obj.push(getMovie(value));
    }
    return obj;
  }

  return [];
}

export function getHistory() {
  // const user = getCurrentUser();
  const user = "user1";
  const obj = [];
  if (user) {
    const currentUser = getUser(user);
    for (const value of currentUser.history) {
      obj.push(getMovie(value));
    }
    return obj;
  }

  return null;
}
