import {promises as fsPromises} from 'fs';

//middleware function = 3 PARAMETERS req, res, next
export const logging = (req, res, next) => {
    console.log("I am in the middle");

    console.log("The request method this was requested with is", req.method);
    next();//continue to the next middleware function
}


export const loggingtime = (req, res, next) => {
    const logMessage = `The time of the request is ${new Date().toLocaleTimeString()} from ${req.ip} \n`;

    console.log(logMessage);

    fsPromises.appendFile('log.txt',logMessage,'utf-8');

    next();//continue to the next middleware function/ or response
}

//combine multiple middleware functions into an array
export const logCombination = [logging,loggingtime];