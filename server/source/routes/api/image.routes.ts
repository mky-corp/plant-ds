import { Router } from 'express';
import { uploadImage, viewImage } from '../../controllers/image.controllers';

const router = Router();

/* GET users listing. */
router.get('/', viewImage);

/* POST users creating. */
router.post('/upload', uploadImage);

export default router;