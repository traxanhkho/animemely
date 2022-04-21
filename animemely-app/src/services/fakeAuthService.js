import { getUsers } from "./fakeUserService";

export function login(email, password) {
  const users = getUsers();
  const currentUser = users.find((user) => user.email === email);
  if (currentUser) {
    if (currentUser.password === password) {
        localStorage.setItem("token", currentUser.token);
       return true ;
    } else {
        return null ; 
    }
  } 

  return null ; 
}

