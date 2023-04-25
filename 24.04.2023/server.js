import mongoose from "mongoose";
import dotenv from "dotenv";
import { Guitar } from "./models/Guitar.js";

dotenv.config();

// if we don't include the database name, "test" is the database name
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Database connection successful!");
  })
  .catch((error) => {
    console.log("Database connection failed");
    console.log(error.message);
  });

// Our first Mongoose / MongoDB Query
// generate new data in the collection
Guitar.create({
  brand: "Yamaha",
  type: "Artcore",
  price: 700,
  isElectric: true,
  manufactureDate: 1682411287408, // timestamp
  availableColors: ["Sunshine Yellow", "Black"],
});
