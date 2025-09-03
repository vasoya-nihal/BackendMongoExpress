const   express = require('express');
const router = express.Router();
const User = require('../models/userModel');



router.get('/users',async(req,res)=>{
    try{
        const users =  await User.find();
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).json({success:false,
            message: err.message});
    }

})


router.post('/users', async (req,res)=>{
        console.log("Post request received with body:", req.body);

    try{
        const {name, age, weight} = req.body;
        const newUser = new User({name,age,weight});
        await newUser.save();
        res.status(200).json({success:true,
            message: 'User created successfully',
            user: newUser
        });
        
    }
    catch(err){
        res.status(500).json({success:false,
            message: err.message});
    }
});





router.put('/users/:id', async (req,res)=>{
const {id} = req.params;
const {name,age,weight} = req.body;
console.log("put request received for user id:", id);

try{
    const updatedUser = await User.findByIdAndUpdate(id,{name,age,weight});
    if(!updatedUser){
        return res.status(404).json({success:false,
            message: 'User not found'});
    }
    res.status(200).json({success:true,
        message: 'User updated successfully' ,
        user: updatedUser
    });
}


catch(err){
    res.status(500).json({success:false,
        message: err.message}); 
    }
});


router.delete('/users/:id', async (req,res)=>{
    const {id} = req.params;
    console.log("Delete request received for user id:", id);
  try{
    const deletedUser = await User.findByIdAndDelete(id);
    if(!deletedUser){
     res.status(404).json({success:false,
            message: 'User not found'});
    }
    res.status(200).json({success:true,
        message: 'User deleted successfully' ,
        user: deletedUser
    })
  }
  catch(err){
    res.status(500).json({success:false,
        message: err.message}); 
    }
}
);

module.exports = router;