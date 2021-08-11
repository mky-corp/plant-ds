import { Router } from 'express';
import { uploadImage, viewImage, getImage } from '../../controllers/image.controllers';

const router = Router();

/* GET images listing. */
router.get('/', viewImage);

/* POST image creating. */
router.post('/upload', uploadImage);

/* GET image listing. */
router.get('/:id', getImage);

/* POST most image create. */
// router.post('/', )

export default router;
