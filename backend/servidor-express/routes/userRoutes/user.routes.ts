import express, { Router, Request, Response } from 'express';
import { Connection } from 'mysql2';
import { createUser, getAllUsers, loginUser } from '../../controllers/usercontroller/user.controller';

const router: Router = express.Router();

declare global {
  namespace Express {
    interface Request {
      db: Connection;
    }
  }
}

export const setupUserRoutes = (db: Connection): Router => {
    router.use(express.json());

    router.get('/user', (req: Request, res: Response) => getAllUsers(db, req, res));
    router.post('/', (req: Request, res: Response) => createUser(db, req, res));
    router.post('/login', (req: Request, res: Response) => loginUser(db, req, res));

    return router;
};
