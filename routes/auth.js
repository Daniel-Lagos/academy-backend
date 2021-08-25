const { Router } = require('express');
const { userLogin } = require('../controllers/auth');
const { createUser } = require('../controllers/user');

const router = Router();

router.post('/new', createUser);

router.post('/', userLogin);

module.exports = router;
