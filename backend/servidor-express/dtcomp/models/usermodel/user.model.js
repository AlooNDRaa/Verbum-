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
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const sql = 'SELECT * FROM users';
    return db_connection_1.default.promise().execute(sql).then(([rows]) => rows);
});
exports.getAllUsers = getAllUsers;
const createUser = (username, email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    const values = [username, email, password];
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
const loginUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
    const values = [email, password];
    return db_connection_1.default.promise().execute(sql, values);
});
exports.loginUser = loginUser;
