import express from 'express';

import exampleRoutes from './routes/exampleRoutes.js';

const app = express();

//middleware to parese json information from http body request to req.body.* object. 
app.use(express.json());

//registering our routes
app.use('/api/examples', exampleRoutes);

//listening for request on port 3000
app.listen(3000, ()=> {
    console.log("Listening for requests...");
})
