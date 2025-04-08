import React, { useState } from 'react';
import css from './Login.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin');
  const [errorMessage, setErrorMessage] = useState(''); 
  const navigate = useNavigate()

axios.defaults.withCredentials = true

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setErrorMessage("Username and password are required");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
        role,
      });
      console.log(res);
      if (res.data.login && res.data.role === "admin") {
        navigate("/dashboard");
      } 
      else if (res.data.role === "student") {
        navigate("/");
      }
      setErrorMessage("");
    } catch (error) {
      console.error(error);
      setErrorMessage("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className={css.login_page}>
      <div className={css.login_container}>
        <form onSubmit={handleSubmit}>
          <div className={css.form_group}>
            <label>UserName:</label>
            <input
              type="text"
              placeholder="userName"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={css.form_group}>
            <label>Password:</label>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={css.form_group}>
            <label>Role:</label>
            <select name="role" id="role" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="admin">Admin</option>
              <option value="student">Student</option>
            </select>
          </div>
          <button type="submit" className={css.btn_login}>
            Login
          </button>
        </form>

        {errorMessage && <p className={css.error_message}>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Login;
