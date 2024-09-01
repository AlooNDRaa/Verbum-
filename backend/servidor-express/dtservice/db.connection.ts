import mysql, { Connection } from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const db: Connection = mysql.createConnection({
  host: process.env.DB_HOST,
 user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos', err);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

export default db;

