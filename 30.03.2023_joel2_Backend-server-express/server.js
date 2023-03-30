import express from 'express'

console.log("Server starting 🐱")

const app = express()

// Add endpoint that handles GET requests to /hello
app.get("/hello", (req, res) => {
    res.send("Hi " + Math.random())
})

// Add endpoint that handles GET requests to /fruit
app.get("/fruit", (req, res) => {
    console.log("Someone wants fruit!")
    res.send("Applez")
    // res.send("Orangez") <- Cannot send two responses for one request!
})
const fruit = []

// Add endpoint that handles GET requests to /hello/:fruitname
// Express Route parameters
app.get("/fruit/:fruitname", (req, res) => {
    console.log("REQ Params", req.params)

    if (fruit.includes(req.params.fruitname)) {
        res.send("NO MORE " + req.params.fruitname)
    } else {
        fruit.push(req.params.fruitname)
        res.send("Fruit collection: " + fruit.join())
    }
})

// Add Wildcard endpoint with the * symbol (star, asterisk)
// Should be the last one that we add
app.get("*", (req, res) => {
    res.send("NOT FOUND!!")
})

app.listen(9002, () => {
    console.log("Server listening on http://localhost:9002")
})