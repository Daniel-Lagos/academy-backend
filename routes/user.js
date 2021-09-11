const { Router } = require('express');
const { check } = require('express-validator');
const { fieldValidate } = require('../middlewares/field-validate');

const {
  getUser,
  removeUser,
  updateUser
} = require('../controllers/user');

const router = Router();

router.get('/',
  [],
  getUser);

router.put('/:id', [
    check('id', 'ID invalid').isMongoId(),
  fieldValidate
  ],
  updateUser);

router.delete('/:id', [
    check('id', 'ID invalid').isMongoId(),
    fieldValidate
  ],
  removeUser);

module.exports = router;
