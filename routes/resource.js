const { Router } = require('express');

const {
  updateResource,
  removeResource
} = require('../controllers/resource');

const router = Router();

router.post('/', updateResource);

router.delete('/:id', [], removeResource);

module.exports = router;
