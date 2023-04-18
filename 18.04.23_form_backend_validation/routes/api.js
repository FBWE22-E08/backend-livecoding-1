import express from "express";
import { body, validationResult } from "express-validator";

const router = express.Router();

router.post(
  "/register",
  [body("streetName").exists().withMessage("Missing streetname")],
  (request, response) => {
    console.log(request.body);

    const valid = validationResult(request);

    console.log(valid);

    if (valid.errors.length) {
      return response.status(500).send("There were errors in your data");
    }

    response.send("ok");
  }
);

router.post("/confirm", () => {});

export default router;
