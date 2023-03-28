import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env);

try {
  const data = await axios(
    `https://somewebsite.com/getData?secret_api_key=${process.env.SECRET_KEY}`
  );
} catch (error) {
  console.log("Error connecting to URL");
}
