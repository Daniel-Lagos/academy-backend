const {Router} = require('express');
const {createUser} = require('../controllers/auth');


const router = Router();

router.get('/', createUser);

module.exports = router