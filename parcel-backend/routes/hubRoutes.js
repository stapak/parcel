import { Router } from "express";
import { addHub, modifyHub, deleteHub, getAllHubs } from "../controllers/hubControllers.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const hubRoutes = Router();

hubRoutes.post("/add-hub",authMiddleware, addHub);
hubRoutes.patch("/modify-hub",authMiddleware, modifyHub);
hubRoutes.delete("/delete-hub/:id",authMiddleware, deleteHub);

hubRoutes.get("/get-all-hubs",authMiddleware,getAllHubs);

export default hubRoutes;