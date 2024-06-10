import Express from 'express';
import dotenv from 'dotenv';
import dbConnect from './db/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js';

dotenv.config();
const app = Express();

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
  optionsSuccessStatus: 200,
};

const Port = process.env.PORT;

app.use(Express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.use('/api/v1/auth', authRoutes);

app.listen(Port, () => {
  dbConnect();
  console.log(`Server is running on port ${Port}`);
});
