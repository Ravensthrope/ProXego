import Express from 'express';
import dotenv from 'dotenv';
import dbConnect from './db/db.js';

dotenv.config();
const app = Express();

const Port = process.env.PORT;

app.listen(Port, () => {
  dbConnect();
  console.log(`Server is running on port ${Port}`);
});
