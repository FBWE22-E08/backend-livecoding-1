import express from "express";

const router = express.Router();

router.post("/register", (request, response) => {
  response.send("ok");
});

export default router;
