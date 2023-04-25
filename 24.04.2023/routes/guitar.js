import express from "express";

import { Guitar } from "./models/Guitar.js";

const router = express.Router();

router.post("/create", (request, response) => {
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
  })
    .then(() => {
      console.log("Guitar created 👍");
    })
    .catch((error) => {
      console.log("Validation failed ❌");
      console.log(error.message);
    });

  response.send("OK");
});

export default router;
