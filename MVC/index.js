const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();
const port = 3000;

const productRoutes = require('./routes/productRoutes');
const connectDB = require('./config/db');

app.use(express.json());

// Connect to database
connectDB();


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', productRoutes);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});