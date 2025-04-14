import React, { useState } from 'react';
import css from './Register.module.css'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setErrorMessage("Username and password are required");
      return;
    }

    try {
      const res = await axios.post("https://book-store-gih2.onrender.com/auth/register", {
        // http://localhost:3001/auth/register 
        username,
        password,
      });

      console.log(res);

      if (res.data.registered) {
        setErrorMessage('');
        navigate('/login');
      } else {
        setErrorMessage('Registration failed. Try again.');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Registration failed. User may already exist.");
    }
  };

  return (
    <div className={css.login_page}>
      <div className={css.login_container}>
        <form onSubmit={handleSubmit}>
          <h2 className={css.form_title}>Register</h2>
          <div className={css.form_group}>
            <label>Username:</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={css.form_group}>
            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className={css.btn_login}>
            Register
          </button>
        </form>

        {errorMessage && <p className={css.error_message}>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Register;
