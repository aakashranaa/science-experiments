import express from 'express';
import { getAdminCred, valdiateAdmin } from '../controllers/user.controller';

const router = express.Router();

router.get('/getadmin', getAdminCred);

router.post('/validateadmin', valdiateAdmin);

export default router;