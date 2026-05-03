/*

Entry file of the server.

*/

// Express modules
import express from "express";
import cors from "cors"

// Middlewares
import logger from "./middlewares/logger.js";

const app = express();
const port=4000;

// Initializing middleware
app.use(logger);
app.use(cors());
app.use(express.urlencoded({ extended : true }));


app.get('/',(req,res)=>{
    res.send("API working ");
})

app.listen(port,()=>{
    console.log(`Server hosted on http://localhost:${port}/`)
})