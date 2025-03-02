import { consumer, KAFKA_OPERATIONS } from "../../utils/kafka";
import { createStudentService } from "./student.services";

export const startStudentConsumer = async () => {
    try {
        await consumer.run({
            eachMessage: async ({ message }) => {
                try {
                    const messageContent = JSON.parse(message.value?.toString() || '{}');
                    console.log(`Processing message: ${message.key?.toString()}`, messageContent);

                    switch (messageContent.operation) {
                        case KAFKA_OPERATIONS.CREATE:
                            await createStudentService(messageContent);
                            break;
                        default:
                            console.log(`Unknown operation: ${messageContent.operation}`);
                            break;
                    }
                } catch (error) {
                    console.error('Error processing Kafka message:', error);
                }
            },
        });

        console.log('Student consumer started successfully');
    } catch (error) {
        console.error('Error starting student consumer:', error);
        throw error;
    }
};

