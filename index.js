// including express module and intializing the app
const express = require('express');
const app = express();

// defining the port number
const port = 3000;

// app.get('/', (req, res)=>{
//     res.send('Get request for homepage');
// });

// request -> get/post/put/delete
//path -> /, /about, /contact



// // all the request
// app.get('/', (req, res)=>{
//     // res.send('Get request for homepage');
//     res.sendFile(__dirname + '/dummy.html');
// });

// app.post('/items', (req, res)=>{
//     // res.send('Post request for homepage');
//     res.json({
//         name: 'John',
//         age: 30,
//         city: 'New York'
//     })
// });

// app.put('/items/:id', (req, res)=>{
//     res.send('Put request for homepage');
// });

// app.delete('/items/:id', (req, res)=>{
//     res.send('Delete request for homepage');
// });


// import the routes
const item = require('./routes/items');
const birds = require('./routes/birds');


// use the routes
app.use('/api', item);
app.use('/birds', birds);



// start the server
app.listen(port, ()=>{
    console.log(`Server is start on this server http://localhost:${port}`);
})

 
