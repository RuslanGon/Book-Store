import express from 'express';
import dotenv from 'dotenv';
import startServer from './db.js';

dotenv.config();  // Сначала вызываем dotenv.config() для загрузки переменных окружения

const app = express();

// Передаем `app` в функцию startServer для подключения к базе данных и запуска сервера
startServer(app);

