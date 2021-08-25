const { Router } = require('express');
const { check } = require('express-validator');

const { userLogin } = require('../controllers/auth');
const { createUser } = require('../controllers/user');
const { fieldValidate } = require('../middlewares/field-validate');


const router = Router();

router.post('/new', [
    check('name', 'name can not is empty').notEmpty(),
    check('surname', 'surname can not is empty').notEmpty(),
    check('password', 'password can not is empty').notEmpty(),
    check('role', 'role can not is empty').notEmpty(),
    check('email', 'The email is incorrect').isEmail(),
    fieldValidate
  ],
  createUser);

router.post('/', userLogin);

module.exports = router;
