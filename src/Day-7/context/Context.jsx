import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import auth from '../firebaseConfig/firbaseConfig';

export const AuthContext = createContext(null);

const Context = ({ children }) => {
  const [registerFormData, setRegisterFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: ''
  })

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create and save the data in firebase bd 
  function RegisterWithFirebase() {
    const { email, password } = registerFormData
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function loginWithFirebase() {
    const { email, password } = loginFormData
    return signInWithEmailAndPassword(auth, email, password);
  }

  function handleLogout() {
    return signOut(auth);
  }

  useEffect(() => {
    const checkAuthState = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    })
    return () => {
      checkAuthState();
    }
  }, []);

  console.log(user);


  return (
    <AuthContext.Provider
      value={{
        registerFormData,
        setRegisterFormData,
        RegisterWithFirebase,
        loading,
        user,
        loginFormData,
        setLoginFormData,
        loginWithFirebase,
        handleLogout
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export default Context