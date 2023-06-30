import {Router} from 'express';

const router: Router = Router();

import {signup, signin, profile} from '../controllers/auth.controller';

router.post('/signup', signup);

export default router;