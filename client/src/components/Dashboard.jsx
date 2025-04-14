import React, { useEffect, useState } from 'react'
import css from './Dashboard.module.css'
import axios from 'axios'

const Dashboard = () => {

const [students, setStudents] = useState(0)
const [admin, setAdmin] = useState(0) 
const [books, setBooks] = useState(0)  

useEffect(() => {
  const fetchDashboard = async () => {
    try {
      const res = await axios.get("https://book-store-gih2.onrender.com/dashboard");
      // http://localhost:3001/dashboard
      if (res.data.ok) {
        setStudents(res.data.student);
        setAdmin(res.data.admin);
        setBooks(res.data.book);
      }
    } catch (error) {
      console.error(error);
    }
  };
  fetchDashboard();
}, []); 

  return (
    <div className={css.dashboard}>
      <div className={css.dashboard_box}>
        <h2>Total books</h2> <br />
        <h2>{books}</h2>
      </div>
      <div className={css.dashboard_box}>
        <h2>Total students</h2> <br />
        <h2>{students}</h2>
      </div>
      <div className={css.dashboard_box}>
        <h2>Total Admins</h2> <br />
        <h2>{admin}</h2>
      </div>

    </div>
  )
}

export default Dashboard