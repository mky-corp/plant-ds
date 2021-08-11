import { Router } from 'express';
import {
  createUser,
  deleteUser,
  getAllUsers,
  updateUser,
  viewUsers
} from '../../controllers/user.controllers';

const router = Router();

/* GET users view. */
router.get('/view', viewUsers);

/* GET all users*/
router.get('/', getAllUsers);

/* POST users creating */
router.post('/', createUser);

/* DELETE users by id */
router.delete('/:id', deleteUser);

/* UPDATE users by id */
router.put('/:id', updateUser);

export default router;
