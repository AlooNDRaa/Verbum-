import { RowDataPacket } from "mysql2";
import db from "../../dtservice/db.connection";

export interface Message {
    id: number;
    content: string;
    user_id: number;
  }
  
  export const createMessage = async (content: string, userId: number): Promise<void> => {
    const sql = 'INSERT INTO messages (content, user_id) VALUES (?, ?)';
    await db.promise().execute(sql, [content, userId]);
  };
  
  export const getUserById = async (userId: number): Promise<{ username: string } | null> => {
    try {
      const sql = 'SELECT username FROM users WHERE id = ?';
      const [rows] = await db.promise().execute(sql, [userId]);
  
      const result = rows as RowDataPacket[];
  
      if (result.length > 0) {
        return { username: result[0].username as string };
      } else {
        return {
            username: 'Usuario no encontrado',
        };
      }
    } catch (err) {
      console.error('Error al obtener el usuario: ', err);
      throw new Error('Error al obtener el usuario');
    }
  };

  export const getMessages = async (): Promise<Message[]> => {
    try {
      const sql = 'SELECT id, content, user_id FROM messages';
      const [rows] = await db.promise().execute(sql);
      
      const result = rows as RowDataPacket[];
      
      return result.map(row => ({
        id: row.id,
        content: row.content,
        user_id: row.user_id
      }));
    } catch (err) {
      console.error('Error al obtener los mensajes: ', err);
      throw new Error('Error al obtener los mensajes');
    }
  };