import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import guitarRoute from "./routes/guitar.js";
import { Guitar } from "./models/Guitar.js";

const app = express();
dotenv.config();

// if we don't include the database name, "test" is the database name
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Database connection successful! 👍");
  })
  .catch((error) => {
    console.log("Database connection failed ❌");
    console.log(error.message);
  });

app.use(express.json());
app.use("/guitar", guitarRoute);

app.listen(4000, () => {
  console.log("Server is listening 🐒");
});
