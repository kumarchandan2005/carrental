import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";

//Initiallize Express App
const app = express();

//Coonnect Database
await connectDB();

//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Server is running now"));
app.use("/api/user", userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Srver running on port ${PORT}`));
