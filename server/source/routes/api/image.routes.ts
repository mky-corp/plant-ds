import { Router } from 'express';
import { uploadImage, viewImage, getImage } from '../../controllers/image.controllers';

const router = Router();

/* GET images listing. */
router.get('/', viewImage);

/* POST image creating. */
router.post('/upload', uploadImage);

/* GET image listing. */
router.get('/one', getImage);

export default router;