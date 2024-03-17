// jobsRoutes.js
import express from 'express';
import { createNewJob, getAllJobs, getJobById } from '../controllers/jobsController.js';

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

router.post('/create-job', async (req, res) => {
    try {
        const { title, description, location, salary } = req.body;

        if (!title || !description || !location || !salary) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const newJob = await createNewJob({ title, description, location, salary });

        res.status(201).json(newJob);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
