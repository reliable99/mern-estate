import express from "express";
import mongoose from "mongoose";
import dotevn from "dotenv"
import userRouter from './routes/user.route.js';

dotevn.config()

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
app.use('/api/user', userRouter);

app.listen(3000,  () => {
    console.log("app running on port 3000")
})

