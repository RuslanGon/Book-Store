import React from 'react'
import css from './Dashboard.module.css'


const Dashboard = () => {
  return (
    <div className={css.dashboard}>
      <div className={css.dashboard_box}>
        <h2>Total books</h2> <br />
        <h2></h2>
      </div>
      <div className={css.dashboard_box}>
        <h2>Total students</h2> <br />
        <h2></h2>
      </div>
      <div className={css.dashboard_box}>
        <h2>Total Admins</h2> <br />
        <h2></h2>
      </div>

    </div>
  )
}

export default Dashboard