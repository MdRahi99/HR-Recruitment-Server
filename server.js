// index.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import candidatesRoutes from './routes/candidatesRoutes.js';
import jobsRoutes from './routes/jobsRoutes.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send(`Server Started On Port ${port}`);
});

// Candidate Endpoints
app.use('/candidates', candidatesRoutes);

// Job Endpoints
app.use('/jobs', jobsRoutes);


app.listen(port, () => {
    console.log(`Server Started On Port ${port}`);
});
