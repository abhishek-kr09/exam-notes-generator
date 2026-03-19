import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDB from "./utils/connectDB.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors"
import userRouter from "./routes/user.route.js";
import notesRouter from "./routes/generate.route.js";
import pdfRouter from "./routes/pdf.route.js";
import creditRouter from "./routes/credits.route.js";
import { stripeWebhook } from "./controllers/credits.controller.js";


const app = express()

app.post(
"/api/credits/webhook",
express.raw({ type: "application/json" }),
stripeWebhook
);


app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
    }
))




app.use(express.json())
app.use(cookieParser())

const PORT = process.env.PORT || 8000;
app.get("/", (req, res) => {
    res.json({ message: "Exam notes AI Backend Running" })
})

app.use("/api/auth", authRouter) //authentication
app.use("/api/user", userRouter) //user route
app.use("/api/notes", notesRouter) //notes route
app.use("/api/pdf", pdfRouter) //pdf route
app.use("/api/credit", creditRouter) //credit route



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    connectDB()
})