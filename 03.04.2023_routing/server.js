import express from "express";

const app = express();

// this line of code will handle GET requests to /
app.get("/", (request, response) => {
  console.log("Request received");

  response.send("Thankyou for your request");
});

app.get("/account", (request, response) => {
  response.send("Your account details are PIN: 23492843294234");
});

// here username is a route parameters
app.post("/login/:username/:password", (request, response) => {
  console.log(request.params.username);

  response.send(`Your username is: ${request.params.username}`);
});

app.listen(3002, () => {
  console.log("The server is listening...🐒");
});
