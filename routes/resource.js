const { Router } = require('express');
const multer = require('multer');
const upload = multer({ dest: './' });

const {
  updateResource,
  removeResource,
  getResources,
  getUserResources
} = require('../controllers/resource');

const router = Router();

router.post('/', upload.array('resource', 5), updateResource);

router.get('/', [], getResources);

router.get('/user', [], getUserResources);

router.delete('/:id', [], removeResource);

module.exports = router;
