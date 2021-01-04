const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(4000, () => {
    console.log('Somos muy cracks ji ji ji whadafa');
});