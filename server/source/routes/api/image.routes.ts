import { Router } from 'express';
import { uploadOneImage, viewImage } from '../../controllers/image.controllers';

const router = Router();

/* GET image view. */
router.get('/view', viewImage);

/* POST one image create . */
router.post('/', uploadOneImage);

/* POST most image create. */
// router.post('/', )

export default router;
