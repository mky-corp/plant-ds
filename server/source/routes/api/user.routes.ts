import { Router } from 'express';
import { createUser, getAllUsers, viewUsers } from '../../controllers/user.controllers';

const router = Router();

/* GET users view. */
router.get('/view', viewUsers);

/* GET all users*/
router.get('/', getAllUsers);

/* POST users creating. */
router.post('/', createUser);

export default router;