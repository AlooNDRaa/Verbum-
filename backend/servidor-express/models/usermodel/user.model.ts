import { RowDataPacket } from 'mysql2';
import db from '../../dtservice/db.connection';

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

export const getAllUsers = async (): Promise<RowDataPacket[]> => {
  const sql: string = 'SELECT * FROM users';
  return db.promise().execute(sql).then(([rows]) => rows as RowDataPacket[]);
};

export const createUser = async (username: string, email: string, password: string): Promise<void> => {
  const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  const values = [username, email, password];

  try {
    await db.promise().execute(sql, values);
    console.log('Usuario creado exitosamente.');
  } catch (error) {
    console.error('Error al crear usuario:', error);
    throw error; 
  }
};

export const loginUser = async (email: string, password: string): Promise<any> => {
  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  const values = [email, password];
  return db.promise().execute(sql, values);
};
