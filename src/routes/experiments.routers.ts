import express from 'express';
import { getExperimentById, getAllExperiments, addExperiment, updateExperiment } from '../controllers/experiments.controller';

const router = express.Router();

router.get('/', getAllExperiments);
router.get('/:id', getExperimentById);

router.post('/add', addExperiment);

router.put('/update/:id', updateExperiment);

export default router;