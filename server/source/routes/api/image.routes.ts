import { Router } from 'express';
import { uploadOneImage, viewImage } from '../../controllers/image.controllers';

const router = Router();

/* GET users listing. */
router.get('/', viewImage);

/* POST users creating. */
router.post('/uploadone', uploadOneImage);

export default router;