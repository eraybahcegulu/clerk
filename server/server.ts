import { app } from "./app";
import connectDB from "./utils/mongoose";

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});