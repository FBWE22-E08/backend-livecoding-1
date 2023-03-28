import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

// environment variables
// console.log(process.env);

// cli arguments
// cli arguments are all strings
// node app.js 4989rw8948509
const [, , secretKey] = process.argv;

console.log(`This is secret key: ${secretKey}`);

try {
  const data = await axios(
    `https://somewebsite.com/getData?secret_api_key=${process.env.SECRET_KEY}`
  );
} catch (error) {
  console.log("Error connecting to URL");
}
