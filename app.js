require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const dbConnection = require('./database/config');

const app = express();

dbConnection()
  .then()
  .catch();

app.use(cors());

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//File upload

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));

//set the routes
app.use('/api/user', require('./routes/user'));
app.use('/api/resource', require('./routes/resource'));
app.use('/api/auth', require('./routes/auth'));


app.listen(process.env.PORT, () => {
  console.log(`The sever is running in port ${process.env.PORT}`);
});
