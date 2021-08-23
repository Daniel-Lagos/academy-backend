const Router = require('express');

const {
  createUser, getUsers, removeUser, updateUser
} = require('../controllers/user');

const router = Router();

router.post('/', [], createUser);

router.get('/', [], getUsers);

router.put('/:id', [], updateUser);

router.delete('/:id', [], removeUser);

module.exports = router;
