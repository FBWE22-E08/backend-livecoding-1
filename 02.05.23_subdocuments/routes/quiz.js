import express from "express";
import { StatusCodes } from "http-status-codes";

import Quiz from "../models/quiz-array-nested-subdocument.js";

const router = express.Router();

// find()
// findById()

router.get("/searchById/:id", async (request, response) => {
  // we search for a quiz by id
  // queries are like questions
  // asking the database "can you give me the record for this id?"

  try {
    // find() ALWAYS returns an array
    // const results = await Quiz.find({ _id: request.params.id });

    // if (!results.length) {
    //   return response.status(StatusCodes.NOT_FOUND).send("No results");
    // }

    // findById does not return an array
    // it returns {} or null
    const results = await Quiz.findById(request.params.id);
    // no results? []

    if (!results) {
      return response.status(StatusCodes.NOT_FOUND).send("No results");
    }

    // response.send() <== generic function for handling all sort of responses
    response.json(results);
  } catch (error) {
    response.status(StatusCodes.BAD_REQUEST).send("Sorry, invalid query");
  }
});

export default router;
