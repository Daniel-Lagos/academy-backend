import { Router } from 'express';

import {
  getResource, removeResource, updateResource
} from '../controllers/resource.controller';

const router = Router();

router.get('/', [], getResource);

router.post('/', [], updateResource);

router.delete('/:id', [], removeResource);

export default router;
