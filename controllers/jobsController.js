// jobsController.js
import { ObjectId } from 'mongodb';
import { connectToDatabase } from '../db.js';

export const getAllJobs = async () => {
    const db = await connectToDatabase();
    const jobsCollection = db.collection("jobs");
    return jobsCollection.find().toArray();
};

export const getJobById = async (jobId) => {
    const db = await connectToDatabase();
    const jobsCollection = db.collection("jobs");
    return jobsCollection.findOne({ _id: new ObjectId(jobId) });
};

export const createNewJob = async (jobDetails) => {
    try {
        const db = await connectToDatabase();
        const jobsCollection = db.collection("jobs");
        const result = await jobsCollection.insertOne(jobDetails);
        return result;
    } catch (error) {
        console.error("Error creating new job:", error);
        throw error;
    }
};