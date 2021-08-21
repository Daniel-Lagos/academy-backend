require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

//Connect to database

app.use(cors());

app.use(express.static('public'));

app.use(express.json());

//set the routes
app.use('/api/user', require('./routes/user'));
app.use('/api/resource', require('./routes/resource'));

app.listen(process.env.PORT, () => {
  console.log(`The sever is running in port ${process.env.PORT}`);
});
