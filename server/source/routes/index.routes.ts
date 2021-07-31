import { Router } from 'express';
import { viewIndex } from '../controllers/index.controllers';

const router = Router();

/* GET home page. */
router.get('/', viewIndex);

export default router;