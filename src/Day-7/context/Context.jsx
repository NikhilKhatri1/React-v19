import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import auth from '../firebaseConfig/firbaseConfig';

export const AuthContext = createContext(null);

const Context = ({ children }) => {
  const [registerFormData, setRegisterFormData] = useState({
    name: '',
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
    <AuthContext.Provider value={{ registerFormData, setRegisterFormData, RegisterWithFirebase, loading, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export default Context