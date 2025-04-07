import React, { useState } from 'react';
import css from './AddStudent.module.css';

const AddStudent = () => {
  const [roll, setRoll] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [grade, setGrade] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log({ roll, username, password, grade});
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
            onChange={(e) => setRoll(e.target.value)}/>
        </div>
        <div className={css.student_group}>
          <label htmlFor="username">User Name:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className={css.student_group}>
          <label htmlFor="grade">Grade:</label>
          <input
            type="text"
            id="grade"
            name="grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)} />
        </div>
        <div className={css.student_group}>
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default AddStudent;
