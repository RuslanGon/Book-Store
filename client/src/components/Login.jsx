import React, { useState } from 'react'
import css from './Login.module.css'

const Login = () => {

const [userName, setUserNAme] = useState('')  
const [password, setPassword] = useState('')  
const [role, setRole] = useState('student')  

const handleSubmit = () => {
console.log(userName, password, role);
}

  return (
    <div className={css.login_page}>
      <div className={css.login_container}>
        <div className={css.form_group}>
          <label>UserName:</label>
          <input type="text" placeholder='userName'  onChange={e => setUserNAme(e.target.value)}/>
        </div>
        <div className={css.form_group}>
          <label>Password:</label>
          <input type="password" placeholder='password' onChange={e => setPassword(e.target.value)} />
        </div>
        <div className={css.form_group}>
          <label>Role:</label>
          <select name="role" id="role" onChange={e => setRole(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="student">Student</option>
          </select>
        </div>
        <button className={css.btn_login} onClick={handleSubmit}>Login</button>
      </div>
    </div>
  )
}

export default Login