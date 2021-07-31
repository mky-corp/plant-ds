import { Router } from 'express';
import { createUser, viewUser } from '../../controllers/user.controllers';

const router = Router();

/* GET users listing. */
router.get('/', viewUser);

/* POST users creating. */
router.post('/', createUser);

export default router;