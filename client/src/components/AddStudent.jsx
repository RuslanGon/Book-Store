import React, { useState } from 'react';
import css from './AddStudent.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

axios.defaults.withCredentials = true; // Для работы с сессиями (если используешь cookie)

const AddStudent = () => {
  const [roll, setRoll] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [grade, setGrade] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!roll || !username || !grade || !password) {
      setErrorMessage("All fields are required.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3001/student/register", {
        username,
        password,
        roll,
        grade
      });

      console.log("Response from backend:", res.data);

      if (res.data.registered) {
        // Очищаем форму
        setRoll('');
        setUsername('');
        setGrade('');
        setPassword('');
        setErrorMessage('');


        navigate("/dashboard");
      } else {
        setErrorMessage("You are authorized.");
      }

    } catch (error) {
      console.error("Registration error:", error);
      setErrorMessage("Registration failed. Please check your credentials.");
    }
  };
  return (
    <div className={css.student_form_container}>
      <form className={css.student_form} onSubmit={handleSubmit}>
        <h2>Add Student</h2>
        <div className={css.student_group}>
          <label htmlFor="roll">Roll No:</label>
          <input
            type="text"
            id="roll"
            name="roll"
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
          />
        </div>
        <div className={css.student_group}>
          <label htmlFor="username">User Name:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={css.student_group}>
          <label htmlFor="grade">Grade:</label>
          <input
            type="text"
            id="grade"
            name="grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          />
        </div>
        <div className={css.student_group}>
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
        {errorMessage && <p className={css.error}>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default AddStudent;
