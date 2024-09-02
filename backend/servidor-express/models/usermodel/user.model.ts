import { RowDataPacket } from 'mysql2';
import db from '../../dtservice/db.connection';
import bcrypt from 'bcrypt';
import  jwt  from 'jsonwebtoken';

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
  
  const hashedPassword = await bcrypt.hash(password, 10);
  const values = [username, email, hashedPassword];

  try {
    await db.promise().execute(sql, values);
    console.log('Usuario creado exitosamente.');
  } catch (error) {
    console.error('Error al crear usuario:', error);
    throw error; 
  }
};


const secretKey = process.env.SECRET_KEY;

export const loginUser = async (email: string, password: string): Promise<{ token: string } | null> => {
  const sql = 'SELECT * FROM users WHERE email = ?';
  const [rows] = await db.promise().execute(sql, [email]);
  
  if (Array.isArray(rows) && rows.length > 0) {
    const user: User = rows[0] as User;
    
    const passwordMatch = await bcrypt.compare(password, user.password);
    
    if (passwordMatch && secretKey) {
      const token = jwt.sign({ userId: user.id, email: user.email }, secretKey, { expiresIn: '1h' });
      return { token };
    }
  }
  
  console.log('Usuario no encontrado o contraseña incorrecta.');
  return null; 
};