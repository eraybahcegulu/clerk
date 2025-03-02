import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import classRouter from "./routes/class.route";
import studentRouter from "./routes/student.route";
import { initializeKafka } from "./utils/kafka";
import { startStudentConsumer } from "./services/student/student.consumer";


export const app = express();

app.use(express.json());

app.use(cors({origin: true, credentials: true}));

const initKafkaServices = async () => {
    try {
        await initializeKafka();

        await startStudentConsumer();

        console.log("Kafka services initialized successfully");
    } catch (error) {
        console.error("Failed to initialize Kafka services:", error);
    }
};

initKafkaServices();

const routes = [
    classRouter,
    studentRouter
];

routes.forEach(route => app.use(route));