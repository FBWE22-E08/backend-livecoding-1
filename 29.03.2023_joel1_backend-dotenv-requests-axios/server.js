import axios from 'axios'
import dotenv from 'dotenv'

//! Environment variables and .env
// This reads the .env file and places the variables from there to process.env
dotenv.config()

// process.env includes my computer "environment variables" AND the variables that dotenv read from .env
// Environment variables describe the computer where the program is running
// Such as the current username and system language
console.log(process.env)
console.log("ENV LANGUAGE", process.env.LANGUAGE) // normal environment variable from ubuntu
console.log("ENV DB_USERNAME", process.env.DB_USERNAME) // our custom "environment variable" from .env


//!  Promises (recap)

/*
Promises in JavaScript
    - used when you are requesting data and server promises to give you that data
    - asynchronous programming
        - start an operation
        - result not ready yet, need to wait for the result
        - wait for it to be complete/wait for the result

Promises have three states
    - pending
    - resolved
    - rejected

With async/await you can "wait" for a promise to be resolved
    - In modern JS you can do "top level await"
*/

const url = 'https://jsonplaceholder.typicode.com/users'

// Using async/await
// const response = await fetch(url)
// const result = await response.json()
// console.log(result)

// Use .then()
// fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
// console.log("This runs first, the console.log above runs at some point in the future")

// GET request with axios
// const something = await axios.get(url)
// console.log(something)

// POST request with fetch
// POST are often used to create data
// const newUser = { name: "Veera" }
// const config = {
//     method: "POST",
//     body: JSON.stringify(newUser),
//     headers: {
//         contentType: "application/json",
//         authorization: "APIKEY ut42hg2h2gh2g"
//     }
// }
// const response = await fetch(url, config)
// const result = await response.json()
// console.log(result)