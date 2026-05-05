import { Router } from "express";
import { registerCoreTeam, registerHubOwner, registerHubWroker } from "../controllers/userControllers.js";

const userRouter = Router();

// Routes to register users.
userRouter.post('/register/core-team',registerCoreTeam)
userRouter.post('/register/hub-owner',registerHubOwner);
userRouter.post('/register/hub-worker',registerHubWroker);


export default userRouter;