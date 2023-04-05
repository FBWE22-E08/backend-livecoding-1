import express from 'express'; //import express library to build webservers
//older way, you might see in tutorials and resources
//--------------------------------------
// const express = require('express');

//import the router module
import teaRoutes from './routes/teaRoutes.js';
import userRoutes from './routes/userRoutes.js';

//declare app which allows us to use the web app functionalities
const app = express();

//allows us to send json information to the server
app.use(express.json());

//configure routes
app.use('/api/teas',teaRoutes);
app.use('/api/users', userRoutes);

//listening for requests on port 3001
app.listen(3001, () => {
   console.log("The server is listening for requests....");
});
