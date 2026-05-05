import { Router } from "express";
import { login } from "../controllers/authControllers.js";

const authRoute = Router();

authRoute.post("/login",login);

export default authRoute;