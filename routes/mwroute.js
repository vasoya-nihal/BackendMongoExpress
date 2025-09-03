const express = require('express');
const router = express.Router();

// middleware 

const auth = function(req,res,next){
    console.log("i am auth middleware");
    
    // add dummy user
    req.user = {id:1, role:'admin'};

    if(req.user){
        // user is present
        next();
    }
    else{
        res.json({
            success: false,
            message: 'User not authenticated'
        })
    }
}



const isStudent = function(req,res,next){
    console.log("i am isStudent middleware");
    if(req.user.role === 'student'){
        next();
    }
    else{
        res.json({
            success: false,
            message: 'User is not student'
        });
    }
}


const isAdmin = function(req,res,next){
    console.log("i am inside isAdmin middleware");

    if (req.user.role === 'admin'){
        next();
    }   else{
        res.json({
            success: false,
            message: 'User is not admin'
        });
    }
}


// routes
router.get('/student',auth,isStudent,(req,res)=>{
    console.log("i am student route handler");
    res.send("Welcome Student");
})

router.get('/admin',auth,isAdmin,(req,res)=>{
    console.log("i am admin route handler");
    res.send("Welcome Admin");
})


module.exports = router;
