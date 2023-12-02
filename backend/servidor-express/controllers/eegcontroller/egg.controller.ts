import { Request, Response } from 'express';
import { DbService } from '../../dtservice/dt.service';
import * as EggModel from '../../models/egmodel/egg.model';

export const checkPassword = async (dbService: DbService, req: Request, res: Response): Promise<void> => {
  try {
    const { password } = req.body;

    const easterEgg = await EggModel.getThePassword(dbService, password);

    if (easterEgg) {
      res.status(200).json({ message: 'Contraseña correcta' });
    } else {
      res.status(401).json({ message: 'Contraseña incorrecta' });
    }
  } catch (err) {
    console.error('Error al verificar la contraseña: ', err);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

