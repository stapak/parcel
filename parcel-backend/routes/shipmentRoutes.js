import { Router } from "express";

import { authMiddleware } from "../middlewares/authMiddleware.js";
import { getShipmentById,
         getShipmentsByHub,
         addShipment,
         updateShipment,
         markDelivery,
         deleteShipment,
         getAllShipments
 } from "../controllers/shipmentControllers.js";

const shipmentRoute = Router();

shipmentRoute.get("/get-shipment",getShipmentById);
shipmentRoute.get("/get-shipments/:hub",authMiddleware,getShipmentsByHub);

shipmentRoute.post("/add-shipment",authMiddleware,addShipment);
shipmentRoute.patch("/update-shipment",authMiddleware,updateShipment);

shipmentRoute.patch("/mark-delivery/:id",authMiddleware,markDelivery);
shipmentRoute.delete("/delete-shipment/:id",authMiddleware,deleteShipment);

// Routes for core team and sudo user
shipmentRoute.get("/get-all-shipments",authMiddleware,getAllShipments)

export default shipmentRoute;