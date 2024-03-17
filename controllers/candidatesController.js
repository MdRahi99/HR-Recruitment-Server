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

export const getCandidatesByGender = async () => {
    try {
        const db = await connectToDatabase();
        const candidatesCollection = db.collection("candidates");

        const pipeline = [
            { $group: { _id: "$gender", count: { $sum: 1 } } }
        ];

        const result = await candidatesCollection.aggregate(pipeline).toArray();

        return result.reduce((acc, { _id, count }) => {
            acc[_id.toLowerCase()] = count;
            return acc;
        }, {});
    } catch (error) {
        console.error("Error fetching candidates by gender:", error);
        throw error;
    }
};