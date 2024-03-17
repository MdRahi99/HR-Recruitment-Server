// candidatesRoutes.js
import express from 'express';
import { getTotalCandidates, getCandidatesByStatus } from '../controllers/candidatesController.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const candidates = await getTotalCandidates();
        res.json(candidates);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/:status', async (req, res) => {
    const { status } = req.params;
    try {
        const candidates = await getCandidatesByStatus(status);
        res.json(candidates);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
