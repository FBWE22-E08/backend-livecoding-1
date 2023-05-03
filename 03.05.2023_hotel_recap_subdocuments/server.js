import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

//import router modules into our server.
import hotelRoutes from './routes/hotelRoutes.js';

//loads .env file contents into process.env (environment variables)
dotenv.config();

const app = express();

//allows us to parse json information from http body to req.body 
app.use(express.json());

//connecting to the database
mongoose
  .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`)
  .then(() => {
    console.log("Database connected! 😃");
  })
  .catch((error) => {
    console.log(error.message);
    console.log("🤨");
  });

//reachable through localhost:3001/api/hotels
app.use('/api/hotels', hotelRoutes)

//listening for requests on port 3001
app.listen(3001, (req, res) => {
    console.log("Server is listening for HTTP requests on port 3001");
})