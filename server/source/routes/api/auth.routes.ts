import { Router } from 'express';
import { loginUser, validateToken } from '../../controllers/auth.controllers';
import { extractJWT } from '../../middlewares/extract.jwt';

const router = Router();

/* GET validate Token */
router.get('/', extractJWT, validateToken);

/* POST login users */
router.post('/', loginUser);

export default router;
