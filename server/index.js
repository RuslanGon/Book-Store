import express from 'express'
import dotenv from 'dotenv'
import startServer from './db.js';


const app = express()
startServer();
dotenv.config()

app.listen(process.env.PORT, () => {
    console.log('Server is Running');
})