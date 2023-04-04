import express from "express";

const app = express();
const port = 4000;

app.get("/api/symbols", (request, response) => {
  response.send("Symbols endpoint");
});

app.get("/api/latest", (request, response) => {
  response.send("Latest endpoint");
});

app.get("/api/convert", (request, response) => {
  response.send("Convert endpoint");
});

app.get("/api/:date", (request, response) => {
  const timestamp = Date.parse(request.params.date);

  if (isNaN(timestamp)) {
    response.send("This is not a valid date");
  }

  response.send("This is a valid date! 👍");
});

app.listen(port, () => {
  console.log(`The server is listening on port ${port}...🐒`);
});
