import { Router } from "express";
import { addHub,
         modifyHub,
         deleteHub
        } from "../controllers/hubControllers.js";

const hubRoutes = Router();

hubRoutes.post("/add-hub",addHub);
hubRoutes.patch("/modify-hub", modifyHub);
hubRoutes.delete("/delete-hub/:id",deleteHub);

export default hubRoutes;