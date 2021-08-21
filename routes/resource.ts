const { Router } = require('express');
const {
  updateResource,
  getResource,
  removeResource
} = require(
  '../controllers/resource.controller');
const router = Router();

router.get('/', [], getResource);

router.post('/', [], updateResource);

router.delete('/:id', [], removeResource);

module.exports = router;
