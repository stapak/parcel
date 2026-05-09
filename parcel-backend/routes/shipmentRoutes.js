import { Router } from "express";

import { authMiddleware } from "../middlewares/authMiddleware.js";
import { getShipmentById,
         getShipments,
         addShipment,
         updateShipment,
         markDelivery,
         deleteShipment

 } from "../controllers/shipmentControllers.js";

const shipmentRoute = Router();

shipmentRoute.get("/get-shipment",getShipmentById);
shipmentRoute.get("/get-shipments/:hub",authMiddleware,getShipments);

shipmentRoute.post("/add-shipment",authMiddleware,addShipment);
shipmentRoute.patch("/update-shipment",authMiddleware,updateShipment);

shipmentRoute.patch("/mark-delivery/:id",authMiddleware,markDelivery);
shipmentRoute.delete("/delete-shipment/:id",authMiddleware,deleteShipment);

export default shipmentRoute;