import express from 'express';
import dotenv from 'dotenv';
import startServer from './db.js';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import {AdminRouter} from './routes/auth.js'
import {StudentRouter} from './routes/student.js'
import {BookRouter} from './routes/book.js'
import BookModel from './models/Book.js';
import StudentModel from './models/Student.js';
import AdminModel from './models/Admin.js';

dotenv.config(); 

const app = express();
app.use(express.json())
app.use(cors({origin: ['http://localhost:5173', 'https://book-store-gih2.onrender.com'], credentials: true}))
app.use(cookieParser())
// login
app.use('/auth', AdminRouter)
// register
app.use('/auth', AdminRouter)
// register student
app.use('/student', StudentRouter)
// add book
app.use('/book', BookRouter)
// dashboard
app.get("/dashboard", async (req, res) => {
    try {
      const student = await StudentModel.countDocuments();
      const admin = await AdminModel.countDocuments();
      const book = await BookModel.countDocuments();
  
      res.status(200).json({ ok: true, student, admin, book });
    } catch (error) {
      console.error("Error fetching dashboard data:", error.message);
      res.status(500).json({ ok: false, message: "Failed to fetch dashboard data." });
    }
  });


startServer(app);

