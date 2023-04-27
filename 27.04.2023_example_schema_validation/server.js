import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import postRoutes from './routes/postRoutes.js';

//reading our environment variables
dotenv.config();
//constructing our app using express() 
const app = express();
//add parse json middleware
app.use(express.json());

mongoose
  .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`)
  .then(() => {
    console.log("Database connected! 😃");
  })
  .catch((error) => {
    console.log(error.message);
    console.log("🤨");
  });


app.use('/api/posts', postRoutes);  

app.listen(3001, ()=> {
    console.log("The server is listening for requests....")
})


