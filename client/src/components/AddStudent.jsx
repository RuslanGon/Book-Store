import React from 'react'
import css from './AddStudent.module.css';


const AddStudent = () => {
  return (
    <div className={css.student_form_container}>
        <form className={css.student_form}>
            <h2>Add Student</h2>
            <div className={css.student_group}>
                <label htmlFor="roll">Roll No:</label>
                <input type="text" id='roll' name='roll' />
            </div>
            <div className={css.student_group}>
                <label htmlFor="username">User NAme:</label>
                <input type="text" id='username' name='username' />
            </div>
            <div className={css.student_group}>
                <label htmlFor="grade">Grade:</label>
                <input type="text" id='grade' name='grade' />
            </div>
        </form>

    </div>
  )
}

export default AddStudent