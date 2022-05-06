import React, { useContext, useEffect, useState } from "react";
import { auth} from "../firebase";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  getDatabase,
  onValue,
  ref,
  set,
  get,
  child,
  update,
  remove,
} from "firebase/database";

const AnimeContext = React.createContext();

const db = getDatabase() ; 

export function useAuth() {
  return useContext(AnimeContext);
}

export default AnimeContext;

export function AnimeProvider({ children }) {
  // authentication 
  const [currentUser, setCurrentUser] = useState();

  function signup(email, password) {
    const auth = getAuth()
    return createUserWithEmailAndPassword(auth, email,password)
  }

  function login(email, password) {
    const auth = getAuth()
    return signInWithEmailAndPassword(auth,email, password);
  }

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  // realtime database .

  function selectMovie(name) {
    const dbref = ref(db) ; 
    return get(child(dbref, "Movies/" + name))
  }

  getMovies = async () =>{
    const dbref = ref(db,"Movies");
    try {
      
    } catch (error) {
      console.log("error get movies")
    }
    await onValue(dbref,(snapshot) =>{
      const movies = [] ;

      snapshot.forEach(childSnapshot => {
        movies.push(childSnapshot.val()) ; 
      })
    })
  }

  const value = {
    currentUser,
    login,
    signup,
    logout,
    selectMovie
  };

  return (
    <AnimeContext.Provider value={value}>
      {children}
    </AnimeContext.Provider>
  );
}
