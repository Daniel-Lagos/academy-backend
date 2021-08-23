const { Router } = require('express');

const {
  getResource, removeResource, updateResource
} = require('../controllers/resource');

const router = Router();

router.get('/', [], getResource);

router.post('/', [], updateResource);

router.delete('/:id', [], removeResource);

module.exports = router;
