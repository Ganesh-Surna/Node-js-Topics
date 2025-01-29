It is all about Middleware

Request -> 
    middleware : (req, res, next) => {...}  ->
        next() ->
            middleware : (req, res, next) => {...}  ->
                next() ->
                    res.send() ->
                          Response
  
      
