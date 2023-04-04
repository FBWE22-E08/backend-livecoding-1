import express from "express";

const router = express.Router();

router.get("/symbols", (request, response) => {
  response.send("Symbols endpoint");
});

router.get("/latest", (request, response) => {
  console.log(request.query.access_key);
  console.log(request.query.symbols);

  response.send("Latest endpoint");
});

router.post("/convert", (request, response) => {
  console.log(request.body.gbp);
  console.log(request.body.usd);

  response.send("Convert endpoint");
});

router.get("/example/:date", (request, response) => {
  const timestamp = Date.parse(request.params.date);

  if (isNaN(timestamp)) {
    response.send("This is not a valid date");
  }

  response.send("This is a valid date! 👍");
});

router.delete("/delete", (request, response) => {
  response.send("Information was deleted");
});

router.patch("/patch", (request, response) => {
  response.send("Information was updated");
});

export default router;
