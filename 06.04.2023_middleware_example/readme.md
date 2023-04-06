## Middleware 

We addded middleware functions to our express application. 

You can find the middleware functions in the folder `/middleware`

We built middleware functions for:
 - Logging : `logging.js`
 - Authenticating user : `authenticateUser.js`
 - Checking valid ID of path : `validityCheck.js`. 


 Structure of middleware function: 

 ```` javascript
export const middleware = (req, res, next) => {
 //... some code 

   next(); //allows us to continue to the next function.
}
 ````

The middleware function can be applied within the route itself as follows: 

 ```` javascript
router.get('/endpoint', middleware, endpointFunction);
 ````

Or we can also apply it for the full router and all its endpoints using: 

 ```` javascript
router.use(middleware);
````

Take a look inside `logging.js`. Notice that two middleware functions can be combined using an array: 
 ```` javascript
export const logCombination = [logging,loggingtime];
````