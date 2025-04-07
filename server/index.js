import express from 'express';
import dotenv from 'dotenv';
import startServer from './db.js';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import {AdminRouter} from './routes/auth.js'
import {StudentRouter} from './routes/student.js'

dotenv.config(); 

const app = express();
app.use(express.json())
app.use(cors({origin: ['http://localhost:5173'], credentials: true}))
app.use(cookieParser())
// login
app.use('/auth', AdminRouter)
// register
app.use('/auth', AdminRouter)
// register student
app.use('/student', StudentRouter)


startServer(app);

