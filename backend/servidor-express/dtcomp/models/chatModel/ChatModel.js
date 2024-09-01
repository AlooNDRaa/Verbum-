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
exports.getMessages = exports.getUserById = exports.createMessage = void 0;
const db_connection_1 = __importDefault(require("../../dtservice/db.connection"));
const createMessage = (content, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = 'INSERT INTO messages (content, user_id) VALUES (?, ?)';
    yield db_connection_1.default.promise().execute(sql, [content, userId]);
});
exports.createMessage = createMessage;
const getUserById = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sql = 'SELECT username FROM users WHERE id = ?';
        const [rows] = yield db_connection_1.default.promise().execute(sql, [userId]);
        const result = rows;
        if (result.length > 0) {
            return { username: result[0].username };
        }
        else {
            return {
                username: 'Usuario no encontrado',
            };
        }
    }
    catch (err) {
        console.error('Error al obtener el usuario: ', err);
        throw new Error('Error al obtener el usuario');
    }
});
exports.getUserById = getUserById;
const getMessages = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sql = 'SELECT id, content, user_id FROM messages';
        const [rows] = yield db_connection_1.default.promise().execute(sql);
        const result = rows;
        return result.map(row => ({
            id: row.id,
            content: row.content,
            user_id: row.user_id
        }));
    }
    catch (err) {
        console.error('Error al obtener los mensajes: ', err);
        throw new Error('Error al obtener los mensajes');
    }
});
exports.getMessages = getMessages;
