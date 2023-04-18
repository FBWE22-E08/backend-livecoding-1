import cors from "cors";
import express from "express";
import apiRouter from "./routes/api.js";

const app = express();
const port = 4000;

// middleware
app.use(cors());
app.use(express.json());
app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`The server is listening on port ${port}...🐒`);
});
