import { Router } from 'express';

import {
  createUser, getUsers, removeUser, updateUser
} from '../controllers/user.controller';

const router: Router = Router();

router.post('/', [], createUser);

router.get('/', [], getUsers);

router.put('/:id', [], updateUser);

router.delete('/:id', [], removeUser);

export default router;
