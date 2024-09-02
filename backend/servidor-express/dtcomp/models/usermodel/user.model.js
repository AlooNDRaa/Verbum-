"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.createUser = exports.getAllUsers = void 0;
const db_connection_1 = __importDefault(require("../../dtservice/db.connection"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const sql = 'SELECT * FROM users';
    return db_connection_1.default.promise().execute(sql).then(([rows]) => rows);
});
exports.getAllUsers = getAllUsers;
const createUser = (username, email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    const values = [username, email, hashedPassword];
    try {
        yield db_connection_1.default.promise().execute(sql, values);
        console.log('Usuario creado exitosamente.');
    }
    catch (error) {
        console.error('Error al crear usuario:', error);
        throw error;
    }
});
exports.createUser = createUser;
const secretKey = process.env.SECRET_KEY;
const loginUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = 'SELECT * FROM users WHERE email = ?';
    const [rows] = yield db_connection_1.default.promise().execute(sql, [email]);
    if (Array.isArray(rows) && rows.length > 0) {
        const user = rows[0];
        const passwordMatch = yield bcrypt_1.default.compare(password, user.password);
        if (passwordMatch && secretKey) {
            const token = jsonwebtoken_1.default.sign({ userId: user.id, email: user.email }, secretKey, { expiresIn: '1h' });
            return { token };
        }
    }
    console.log('Usuario no encontrado o contraseña incorrecta.');
    return null;
});
exports.loginUser = loginUser;
