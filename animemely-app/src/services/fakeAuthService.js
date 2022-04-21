import { getUsers } from "./fakeUserService";

export function login(email, password) {
  const users = getUsers();
  const currentUser = users.find((user) => user[email] === email);
  if (currentUser) {
    console.log(currentUser)
    if (currentUser.password === password) {
      console.log("login successed.");
      localStorage.setItem("token", currentUser.token);
    } else {
      console.log("login error",password) ;
    }
  }
  else{
      console.log("dang nhap that bai")
  }
}
