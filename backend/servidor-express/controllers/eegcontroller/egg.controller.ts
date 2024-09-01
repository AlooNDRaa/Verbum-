import { Request, Response } from 'express';
import { getThePassword } from '../../models/egmodel/egg.model';

export const checkPassword = async (req: Request, res: Response): Promise<void> => {
  try {
    const { password } = req.body;

    if (!password) {
      res.status(400).json({ message: 'Contraseña no proporcionada' });
      return;
    }

    const storedEgg = await getThePassword();

    if (!storedEgg) {
      res.status(404).json({ message: 'Contraseña no encontrada' });
      return;
    }

    const { password: storedPassword } = storedEgg;

    // Comparar directamente las contraseñas
    if (password === storedPassword) {
      res.status(200).json({ message: 'Contraseña correcta' });
    } else {
      res.status(401).json({ message: 'Contraseña incorrecta' });
    }

  } catch (err) {
    console.error('Error al verificar la contraseña: ', err);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

export const getSecretPassword = async (req: Request, res: Response): Promise<void> => {
  try {
    const storedEgg = await getThePassword();

    if (!storedEgg) {
      res.status(404).json({ message: 'Contraseña no encontrada' });
      return;
    }

    res.status(200).json({ password: storedEgg.password });
  } catch (err) {
    console.error('Error al obtener la contraseña: ', err);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};
