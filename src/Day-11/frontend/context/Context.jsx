import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AppContext = createContext();

const Context = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiUrl = 'http://localhost:8000/api/user'; // Backend API base URL

  // Register user function
  const registerUser = async (username, email, password) => {
    try {
      setLoading(true);
      setError(null); // Clear previous errors
      const response = await axios.post(`${apiUrl}/register`, {
        username,
        email,
        password,
      });

      const { token, ...userData } = response.data;
      console.log(userData, response.data)
      if (token) {
        setUser(userData);
        localStorage.setItem('token', token); // Save token to localStorage
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Server Error');
    } finally {
      setLoading(false);
    }
  };

  // Login user function
  const loginUser = async (email, password) => {
    try {
      setLoading(true);
      setError(null); // Clear previous errors
      const response = await axios.post(`${apiUrl}/login`, {
        email,
        password,
      });

      const { token, ...userData } = response.data;
      if (token) {
        setUser(userData);
        localStorage.setItem('token', token); // Save token to localStorage
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Server Error');
    } finally {
      setLoading(false);
    }
  };

  // Logout user function
  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AppContext.Provider value={{ user, setUser, error, loading, registerUser, loginUser, logoutUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default Context;