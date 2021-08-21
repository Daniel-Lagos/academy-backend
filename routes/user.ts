const { Router } = require('express');
const {
  createUser,
  getUsers,
  updateUser,
  removeUser
} = require('../controllers/user.controller');

const router = Router();

router.post('/', [], createUser);

router.get('/', [], getUsers);

router.put('/:id', [], updateUser);

router.delete('/:id', [], removeUser);

module.exports = router;
