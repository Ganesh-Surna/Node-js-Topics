It is all about Middleware

Request -> 
    middleware : (req, res, next) => {...}  ->
        next() ->
            middleware : (req, res, next) => {...}  ->
                next() ->
                    res.send() ->
                          Response


    const express = require('express');
    const app = express();
    app.use((req, res, next) => {
        console.log('Middleware-1')
        next(); // Allows the request to continue to the next middleware in line
    })
    app.use((req, res, next) => {
        console.log('Middleware-2 executes only if next() is called in Middleware-1')
        res.send()
    })
    app.listen(3000, () => console.log('Server running on port 3000'));


res.send() -> Automatically detects the content type and sets the Content-Type in response Headers.
      
