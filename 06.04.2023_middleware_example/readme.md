## Routing + usage of controller methods
In this example we are building an application that exposes teas and users. 

Notice the folder structure: 

### Routes
This is where all our routes are located (teaRoutes & userRoutes).
In routes we write our route declarations.

### Controllers
This is where all our controllers are located (teaController, userController)
In controllers we write our process logic. 

Notice the naming of both types of files.

### Server.js
Inside server.js we place our server configuration. We register our two router modules: 

```` javascript
//configure routes
app.use('/api/teas',teaRoutes);
app.use('/api/users', userRoutes);
````

In the above code sample you can see the first router module can be accessed through `http://localhost:3000/api/teas`. The other router module can be accessed through `http://localhost:3000/api/users`.