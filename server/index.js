import express from 'express';
import dotenv from 'dotenv';
import startServer from './db.js';

dotenv.config(); 

const app = express();

startServer(app);

