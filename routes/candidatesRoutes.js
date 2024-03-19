// candidatesRoutes.js
import express from 'express';
import { getTotalCandidates, getCandidatesByStatus, getCandidatesByGender } from '../controllers/candidatesController.js';

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

router.get('/all', async (req, res) => {
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

router.get('/gender/compare', async (req, res) => {
    try {
        const candidatesByGender = await getCandidatesByGender();
        
        const totalCandidates = candidatesByGender.female + candidatesByGender.male;

        const femalePercentage = (candidatesByGender.female / totalCandidates) * 100;

        const malePercentage = (candidatesByGender.male / totalCandidates) * 100;

        const percentages = {
            "female": femalePercentage,
            "male": malePercentage
        };

        res.json(percentages);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


export default router;
