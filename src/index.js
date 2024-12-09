import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

import router from './routes/index.js';
import {ErrorMiddleware} from './middlewares/errorMiddleware.js';   
import cors from 'cors';

const app = express();  
app.use(express.json());
app.use(cors({
    origin: 'https://lab6-backend.vercel.app/',
    methods: 'GET,POST,PUT,DELETE',
}));
app.use('/api', router);    

app.use(ErrorMiddleware);

app.listen(4001, () => {
    console.log('Server is running on port 4001');
})