// store all speciic routes in this file
const express = require('express'); 
const router = express.Router();

// all the request



// all the request
router.get('/', (req, res)=>{
    res.send('Get request for homepage');
    // res.sendFile(__dirname + '/dummy.html');
});

router.post('/items', (req, res)=>{
    // res.send('Post request for homepage');
    res.json({
        name: 'John',
        age: 30,
        city: 'New York'
    })
});

router.put('/items/:id', (req, res)=>{
    res.send('Put request for homepage');
});

router.delete('/items/:id', (req, res)=>{
    res.send('Delete request for homepage');
});

module.exports = router;