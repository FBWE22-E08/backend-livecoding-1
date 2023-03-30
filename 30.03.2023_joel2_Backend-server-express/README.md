# BE - Server - 04

**Yesterday**
- Review
- NVM
- Axios

**Today**
- Express
- curl

## So what is a backend server?

- The term `server` is used for two things
    - 1. Hardware: virtual or physical computer that runs the backend software
    - 2. Software: program(s) running on a computer that handles incoming connections

- A server is just a program where *usually*
    - They run in the background with no UI
        - Background programs are called services (or sometimes daemons)
    - Servers just sit there actively listening
        - When they receive a connection or request, they do stuff
    - Servers listen to one or many `ports`
        - At the end, like 3000 in `localhost:3000`
        - The default http port is 80
        - The default https port 443
        - NON-web server ports
            - 22 for SSH

- Today we will make a software server

## Express

- Express is an NPM module
    - Server framework
    - https://expressjs.com/

- We don't _technically_ need Express
    - We could make a server with pure Node

- Express simplifies the process and adds extra functionality

## The curl app

- Can be used to many _any_ kind of request from the terminal
- Common to see in API documentation
- Your backend can take in requests from practically anywhere
    - Direct from browser
    - From the terminal (curl)
    - From another backend (fetch, axios, etc)

- BUT there are some security features in browsers
    - Requests from JavaScript (fetch) need a little extra
    - More about these security things later :)
