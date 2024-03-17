import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { MongoClient } from 'mongodb';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connection URI
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nxhpsct.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        await client.db("HR-Recruitment-DB")
        console.log("Successfully connected to MongoDB!");
    } finally {
        await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send(`Server Started On Port ${port}`)
});

app.listen(port, () => {
    console.log(`Server Started On Port ${port}`);
});
