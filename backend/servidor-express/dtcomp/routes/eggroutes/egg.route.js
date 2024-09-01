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
exports.setupEggRoutesWithDb = void 0;
const express_1 = __importDefault(require("express"));
const egg_controller_1 = require("../../controllers/eegcontroller/egg.controller");
const router = express_1.default.Router();
const setupEggRoutesWithDb = () => {
    router.use(express_1.default.json());
    router.post('/password', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield (0, egg_controller_1.checkPassword)(req, res);
        }
        catch (err) {
            console.error('Error en la ruta /password: ', err);
            res.status(500).json({ message: 'Error en el servidor' });
        }
    }));
    router.get('/secret-password', (req, res) => (0, egg_controller_1.getSecretPassword)(req, res));
    return router;
};
exports.setupEggRoutesWithDb = setupEggRoutesWithDb;
