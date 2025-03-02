import { Kafka } from 'kafkajs';

export const KAFKA_TOPICS = {
    STUDENT_OPERATIONS: "student-operations",
};

export const KAFKA_OPERATIONS = {
    CREATE: "CREATE",
    UPDATE: "UPDATE",
    DELETE: "DELETE",
};

export const KAFKA_SERVICE_GROUPS = {
    STUDENT_SERVICE: "student-service-group",
}

const kafka = new Kafka({
    clientId: 'student-service',
    brokers: [process.env.KAFKA_BROKERS || "localhost:9092"],
});

export const producer = kafka.producer();

export const consumer = kafka.consumer({ groupId: KAFKA_SERVICE_GROUPS.STUDENT_SERVICE });

export const initializeKafka = async () => {
    try {
        await producer.connect();
        console.log('Kafka producer connected');

        await consumer.connect();
        console.log('Kafka consumer connected');

        await consumer.subscribe({ topic: KAFKA_TOPICS.STUDENT_OPERATIONS, fromBeginning: true });

        console.log('Kafka initialized successfully');
    } catch (error) {
        console.error('Error initializing Kafka:', error);
        throw error;
    }
};

export const createKafkaMessage = async (topic:string, operation: string, payload: object) => ({
    key: `${topic}-${operation}`,
    topic,
    value: JSON.stringify({
        operation,
        ...payload,
        timestamp: new Date().toUTCString()
    })
});

export const sendToKafka = async (message: any) => {
    console.log("Sending message to Kafka:", message);
    try {
        await producer.send({ topic: message.topic, messages: [message], },);
        return true;
    } catch (error) {
        console.error("Kafka send error:", error);
        return false;
    }
};