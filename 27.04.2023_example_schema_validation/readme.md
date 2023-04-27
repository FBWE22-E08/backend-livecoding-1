# Schema validation example 
In this example we built an API for keeping track of blog posts. 

## Get started 
1. Add a `.env` file in the root of the project and complete the missing parts. You can use `.env.example` as a template. 

2. Run the below commands in your terminal :

    Install your modules:
    > `npm i` 

    Run the server: 
    > `npm run dev`


## Information

We have two API endpoints in the `postRoutes.js`. 

- GET `'/'` which is a get endpoint to get the list of posts
- POST `'/create'` which is a post endpoint to create a new post (insert new document in the database)

Inside `/models` you can find a model called `Post.js`. We have added some validation on this schema.

We used 
  - required : field is required has to be filled in
  - type: datatype 
  - enum: A enumeration of possible values allowed
  - minLenght: minimum length of a field. 


