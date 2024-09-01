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
exports.getThePassword = void 0;
const db_connection_1 = __importDefault(require("../../dtservice/db.connection"));
const getThePassword = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sql = 'SELECT easterpassword FROM easter_egg LIMIT 1';
        const [rows] = yield db_connection_1.default.promise().execute(sql);
        if (Array.isArray(rows) && rows.length > 0) {
            const row = rows[0];
            return { password: row.easterpassword };
        }
        else {
            return null;
        }
    }
    catch (err) {
        console.error('Error al obtener la contraseña: ', err);
        throw new Error('Error al obtener la contraseña');
    }
});
exports.getThePassword = getThePassword;
