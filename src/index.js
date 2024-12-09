import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

import router from './routes/index.js';
import {ErrorMiddleware} from './middlewares/errorMiddleware.js';   
import cors from 'cors';

const app = express();  
app.use(express.json());
app.use(
    cors({
        origin: "*", 
        methods: 'GET,POST,PUT,DELETE',
        credentials: true,  
        allowedHeaders: ['Content-Type', 'Authorization']
    })
);

app.use('/api', router);    

app.use(ErrorMiddleware);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});