// Context.js
import React, { createContext, useState } from 'react';

export const ResuableContext = createContext();

const Context = ({ children }) => {
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginFormData;
    const userData = { email, password };
    console.log(userData);
  };

  return (
    <ResuableContext.Provider
      value={{
        loginFormData,
        setLoginFormData,
        handleSubmit
      }}
    >
      {children}
    </ResuableContext.Provider>
  );
};

export default Context;
