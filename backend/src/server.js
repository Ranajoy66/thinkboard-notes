import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import noteRoutes from "./routes/noteRoutes.js"
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";


dotenv.config()

const app = express();

const PORT = process.env.PORT || 5000;

// middleware
app.use(cors())
app.use(express.json()) //this middle layer will parse the JSON bodies
app.use(rateLimiter)


// // simple custom middleware
// app.use((req,res,next)=>{
//     console.log(`Req method is ${req.method} & Req URL is ${req.url}`)
//     next()
// })

app.use("/api/notes", noteRoutes)

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("server started on PORT", PORT)
    });
})

