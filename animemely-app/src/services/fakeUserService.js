import { getMovie } from "./fakeMovieService";

const tokenKey = "token";

const users = [
  {
    _id: "user1",
    email: "datdang@gmail.com",
    password: "123123",
    name: "dat dang",
    followed: [],
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
    email: "tiendang@gmail.com",
    password: "123123",
    followed: ["5b21ca3eeb7f6fbccd47181a", "5b21ca3eeb7f6fbccd47181e"],
    history: [],
    token: "tiengamaivaidai.khongbietghicaigi",
  },
];

export function getUsers() {
  return users;
}

export function getCurrentUser() {
  const token = localStorage.getItem(tokenKey);
  if (token) {
    const user = users.find((u) => u.token === token);
    return user;
  }
  return null;
}

export function getUser(email) {
  return users.find((user) => user.email === email);
}

export function getFollowed() {
  const currentUser = getCurrentUser();
  const obj = [];
  if (currentUser) {
    for (const value of currentUser.followed) {
      obj.push(getMovie(value));
    }
    return obj;
  }

  return [];
}

export function getHistory() {
  const currentUser = getCurrentUser();
  const obj = [];
  if (currentUser) {
    for (const value of currentUser.history) {
      obj.push(getMovie(value));
    }
    return obj;
  }

  return [];
}
