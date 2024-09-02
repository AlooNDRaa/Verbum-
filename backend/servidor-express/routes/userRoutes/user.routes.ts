import express, { Router, Request, Response } from 'express';
import { createUser, getAllUsers, loginUser } from '../../controllers/usercontroller/user.controller';
import { authenticateToken } from '../../middleware/JwtMiddlewareToken';

const router: Router = express.Router();

export const setupUserRoutes = (): Router => {
    router.get('/user', async (req: Request, res: Response) => getAllUsers(req, res));
    router.post('/newuser', async (req: Request, res: Response) => createUser(req, res));
    router.post('/login', async (req: Request, res: Response) => loginUser(req, res));

    return router;
};
