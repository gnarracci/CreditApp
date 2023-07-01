import {Router} from 'express';

const router: Router = Router();

import {signup, signin, profile} from '../controllers/auth.controller';

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/profile', profile);

export default router;