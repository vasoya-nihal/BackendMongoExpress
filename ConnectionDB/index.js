const express = require('express');
const app = express();
const port = 3000;
const users = require('./routes/users');
const connctDB = require('./db');

app.use(express.json());

connctDB();

app.use('/api', users);

app.get('/', (req, res) => {
    console.log('Home page accessed');
  res.send('welcome to home page');
});



app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
