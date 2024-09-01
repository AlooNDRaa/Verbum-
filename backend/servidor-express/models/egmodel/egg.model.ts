import { RowDataPacket } from 'mysql2';
import db from '../../dtservice/db.connection';

export interface EasterEgg {
  password: string;
}

export const getThePassword = async (): Promise<EasterEgg | null> => {
  try {
    const sql = 'SELECT easterpassword FROM easter_egg LIMIT 1';
    const [rows] = await db.promise().execute(sql);

    if (Array.isArray(rows) && rows.length > 0) {
      const row = rows[0] as RowDataPacket;
      return { password: row.easterpassword as string };
    } else {
      return null;
    }
  } catch (err) {
    console.error('Error al obtener la contraseña: ', err);
    throw new Error('Error al obtener la contraseña');
  }
};
