import mongoose from "mongoose";

const dbUrl: string = process.env.MONGODB_URI || 'mongodb://localhost:27017/mern-stack';

const connectDB = async () => {
    mongoose.connect(dbUrl);
    mongoose.connection.on('connected', () => {
        console.log('Connected to MongoDB');
    });
    mongoose.connection.on('error', (err) => {
        console.error('MongoDB connection error', err);
    });
}

export default connectDB;