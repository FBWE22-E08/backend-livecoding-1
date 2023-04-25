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

// validation:
// - Mongoose is trying to cast values into the datatypes set in the schema
// - fieldnames which are not in the schema are ignored

// Our first Mongoose / MongoDB Query
// generate new data in the collection
Guitar.create({
  brand: "Yamaha",
  type: "Artcore",
  price: 700,
  isElectric: true,
  manufactureDate: 1682411287408, // timestamp
  availableColors: ["Sunshine Yellow", "Black"],
  discount: true,
})
  .then(() => {
    console.log("Guitar created 👍");
  })
  .catch((error) => {
    console.log("Validation failed ❌");
    console.log(error.message);
  });
