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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSecretPassword = exports.checkPassword = void 0;
const egg_model_1 = require("../../models/egmodel/egg.model");
const checkPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { password } = req.body;
        if (!password) {
            res.status(400).json({ message: 'Contraseña no proporcionada' });
            return;
        }
        const storedEgg = yield (0, egg_model_1.getThePassword)();
        if (!storedEgg) {
            res.status(404).json({ message: 'Contraseña no encontrada' });
            return;
        }
        const { password: storedPassword } = storedEgg;
        // Comparar directamente las contraseñas
        if (password === storedPassword) {
            res.status(200).json({ message: 'Contraseña correcta' });
        }
        else {
            res.status(401).json({ message: 'Contraseña incorrecta' });
        }
    }
    catch (err) {
        console.error('Error al verificar la contraseña: ', err);
        res.status(500).json({ message: 'Error en el servidor' });
    }
});
exports.checkPassword = checkPassword;
const getSecretPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const storedEgg = yield (0, egg_model_1.getThePassword)();
        if (!storedEgg) {
            res.status(404).json({ message: 'Contraseña no encontrada' });
            return;
        }
        res.status(200).json({ password: storedEgg.password });
    }
    catch (err) {
        console.error('Error al obtener la contraseña: ', err);
        res.status(500).json({ message: 'Error en el servidor' });
    }
});
exports.getSecretPassword = getSecretPassword;
