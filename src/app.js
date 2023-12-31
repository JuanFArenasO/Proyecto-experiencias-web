import express, { json } from "express";
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(morgan('dev'));
app.use(express.json())
app.use('/api', authRoutes);

export default app;