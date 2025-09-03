const express = require('express');
const app = express();
const port = 3000;

//inbuilt middleware
app.use(express.json());

// middleware -- loging , auth and validation

// create a middleware

const loggingMidddleware = function(req,res,next){
    console.log("Logging kr raha hu");
    next();
};

const authMiddleware = function(req,res,next){
    console.log("Auth kr raha hu");
    next();
}

const validationMiddleware = function(req,res,next){
    console.log("Validation kr raha hu");
    next();
}


// use the middleware
app.use(loggingMidddleware);
app.use(authMiddleware);
app.use(validationMiddleware);





const route = require('./routes/mwroute');
app.use('/mw', route);

app.get('/',(req,res)=>{
    res.send('Hello from Middleware');
    console.log("Min route handlar hu");
    // console.log(req.body);
    // body mate  express.json middleware use karvu pade
});


app.listen(port, ()=>{
    console.log(`Server is start on this server http://localhost:${port}`);
})