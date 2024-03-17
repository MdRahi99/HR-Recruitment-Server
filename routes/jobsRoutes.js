// jobsRoutes.js
import express from 'express';
import { getAllJobs, getJobById } from '../controllers/jobsController.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const jobs = await getAllJobs();
        res.json(jobs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/:jobId', async (req, res) => {
    const { jobId } = req.params;
    try {
        const job = await getJobById(jobId);
        res.json(job);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
