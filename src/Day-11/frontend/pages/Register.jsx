import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const { user, registerUser, error, loading } = useContext(AppContext);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    // Basic client-side validation
    if (!username || !email || !password) {
      alert('Please fill in all fields');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    if (password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }

    registerUser(username, email, password);
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className="flex justify-center items-center py-20">
      <form
        onSubmit={handleSubmit}
        className="border border-gray-300 w-full max-w-md rounded-lg shadow-sm bg-gray-50 px-10 py-6"
      >
        <div>
          <h1 className="text-2xl text-center mt-4 font-bold mb-8">Register</h1>
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label className="text-lg font-bold">Username:</label>
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="border w-full rounded-lg p-2"
            type="text"
            required
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label className="text-lg font-bold">Email:</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border w-full rounded-lg p-2"
            type="email"
            required
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label className="text-lg font-bold">Password:</label>
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border w-full rounded-lg p-2"
            type="password"
            required
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div>
          <button
            type="submit"
            className="my-5 p-3 w-full text-center bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;