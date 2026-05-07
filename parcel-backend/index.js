/*

Entry file of the server.

*/

// Express modules
import express from "express";
import cors from "cors"

// Middlewares
import logger from "./middlewares/logger.js";

// Services
import ConnectDatabase from "./services/Database.js"

// Routers
import authRoutes from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import shipmentRoute from "./routes/shipmentRoutes.js"
import hubRoutes from "./routes/hubRoutes.js";

const app = express();
const port = 4000;

// Initializing middleware
app.use(cors());
app.use(express.urlencoded({ extended : true }));
app.use(express.json());

app.use(logger);

// Initailizing services
ConnectDatabase();

// Routers
app.use("/api/auth",authRoutes);
app.use("/api/user",userRouter);
app.use("/api/shipment",shipmentRoute);
app.use("/api/hub",hubRoutes)

app.get('/',(req,res)=>{
    res.send("API working ");
})

app.listen(port,()=>{
    console.log(`Server hosted on http://localhost:${port}/`)
})