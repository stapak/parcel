import { Router } from "express";
import { getUser,
         registerCoreTeam, 
         registerHubOwner, 
         registerHubWoker,
         deleteUser, 
         modifyUser, 
        } from "../controllers/userControllers.js";
import { authMiddleware } from '../middlewares/authMiddleware.js';
const userRouter = Router();

userRouter.post('/get-user',authMiddleware,getUser);

// Routes to register users.
userRouter.post('/register/core-team',authMiddleware,registerCoreTeam);
userRouter.post('/register/hub-owner',authMiddleware,registerHubOwner);
userRouter.post('/register/hub-worker',authMiddleware,registerHubWoker);

// Routes to update users.
userRouter.patch('/modify-user',authMiddleware,modifyUser);

// Routes to delete users.
userRouter.delete('/delete-user',authMiddleware,deleteUser)


export default userRouter;