import mongoose from 'mongoose';
const dbConnect = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log('MongoDB Connected');
    })
    .catch((err) => {
      console.error('Error while connecting to MongoDB', err);
    });
};

export default dbConnect;
