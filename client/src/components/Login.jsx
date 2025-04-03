import React from 'react'
import css from './Login.module.css'

const Login = () => {
  return (
    <div className={css.login_page}>
      <div className={css.login_container}>
        <h2>Login</h2> <br />
        <div className={css.form_group}>
          <label>UserName:</label>
          <input type="text" placeholder='userName' />
        </div>
        <div className={css.form_group}>
          <label>Password:</label>
          <input type="password" placeholder='password' />
        </div>
        <div className={css.form_group}>
          <label>Role:</label>
          <select name="role" id="role">
            <option value="admin">Admin</option>
            <option value="admin">Student</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Login