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
exports.messageRoutes = void 0;
const express_1 = __importDefault(require("express"));
const ChatController_1 = require("../../controllers/chatController/ChatController");
const router = express_1.default.Router();
const messageRoutes = () => {
    router.post('/message', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { content, userId } = req.body;
        try {
            const message = yield (0, ChatController_1.handleChatMessage)({ content, userId });
            res.status(200).json(message);
        }
        catch (error) {
            res.status(500).json({ message: 'Error al manejar el mensaje' });
        }
    }));
    router.get('/messages', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const messages = yield (0, ChatController_1.getAllMessages)(req, res);
            res.status(200).json(messages);
        }
        catch (error) {
            res.status(500).json({ message: 'Error al obtener los mensajes' });
        }
    }));
    return router;
};
exports.messageRoutes = messageRoutes;
