const Router = require('express');
const { check } = require('express-validator');
const fieldValidate = require('../middlewares/field-validate');

const {
  createUser, getUsers, removeUser, updateUser
} = require('../controllers/user');

const router = Router();

router.get('/', [], getUsers);

router.post('/', [
  check('name', 'name can not is empty').notEmpty(),
  check('surname', 'surname can not is empty').notEmpty(),
  check('password', 'password can not is empty').notEmpty(),
  check('role', 'role can not is empty').notEmpty(),
  check('email', 'The email is incorrect').isEmail(),
], createUser);

router.put('/:id', [
  check('id', 'ID invalid').isMongoId(),
  check('email', 'The email is incorrect').isEmail(),
  fieldValidate
], updateUser);

router.delete('/:id', [
    check('id', 'ID invalid').isMongoId(),
    check('email', 'The email is incorrect').isEmail(),
    fieldValidate],
  removeUser);

module.exports = router;
