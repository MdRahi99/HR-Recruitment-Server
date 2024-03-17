// candidatesController.js
import { connectToDatabase } from '../db.js';

export const getTotalCandidates = async () => {
    const db = await connectToDatabase();
    const candidatesCollection = db.collection("candidates");
    return candidatesCollection.find().toArray();
};

export const getCandidatesByStatus = async (status) => {
    const db = await connectToDatabase();
    const candidatesCollection = db.collection("candidates");
    return candidatesCollection.find({ status }).toArray();
};
