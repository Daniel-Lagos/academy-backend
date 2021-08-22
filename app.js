import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user';
import resourceRoutes from './routes/resource';

// const dbConnection = require('./database/config');

const app = express();

/* dbConnection()
  .then()
  .catch();*/

app.use(cors());

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set the routes
app.use('/api/user', userRoutes);
app.use('/api/resource', resourceRoutes);

app.listen(process.env.PORT, () => {
  console.log(`The sever is running in port ${process.env.PORT}`);
});
