import express from "express";

const router = express.Router();

router.post("/create", (request, response) => {
  response.send("OK");
});

export default router;
