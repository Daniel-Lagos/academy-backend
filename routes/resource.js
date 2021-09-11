const { Router } = require('express');
const multer = require('multer');
const upload = multer({ dest: './' });

const {
  updateResource,
  removeResource
} = require('../controllers/resource');

const router = Router();

router.post('/', upload.array('resource', 5), updateResource);

router.delete('/:id', [], removeResource);

module.exports = router;
