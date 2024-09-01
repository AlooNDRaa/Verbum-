import express, { Router, Request, Response } from 'express';
import { checkPassword, getSecretPassword } from '../../controllers/eegcontroller/egg.controller';

const router: Router = express.Router();

export const setupEggRoutesWithDb = () => {
  router.use(express.json());

  router.post('/password', async (req: Request, res: Response) => {
    try {
      await checkPassword(req, res); 
    } catch (err) {
      console.error('Error en la ruta /password: ', err);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  });

  router.get('/secret-password', (req: Request, res: Response) => getSecretPassword(req, res));

  return router;
};
