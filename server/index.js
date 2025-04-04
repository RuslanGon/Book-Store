import express from 'express';
import dotenv from 'dotenv';
import startServer from './db.js';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import {AdminRouter} from './routes/auth.js'

dotenv.config(); 

const app = express();
app.use(express.json())
app.use(cors({origin: ['http://localhost:5173'], credentials: true}))
app.use(cookieParser())

app.use('/auth', AdminRouter)

startServer(app);

