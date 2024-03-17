// db.js
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nxhpsct.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri);

export const connectToDatabase = async() => {
    try {
        await client.connect();
        console.log("Successfully connected to MongoDB!");
        return client.db(process.env.DB_NAME);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
}

export const closeDatabase = async() => {
    return client.close();
}
