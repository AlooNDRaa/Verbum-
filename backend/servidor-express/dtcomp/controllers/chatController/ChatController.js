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
exports.getAllMessages = exports.handleChatMessage = void 0;
const ChatModel_1 = require("../../models/chatModel/ChatModel");
const handleChatMessage = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { content, userId } = data;
    try {
        yield (0, ChatModel_1.createMessage)(content, userId);
        const user = yield (0, ChatModel_1.getUserById)(userId);
        return { content, userId, username: user === null || user === void 0 ? void 0 : user.username };
    }
    catch (error) {
        console.error('Error al manejar el mensaje: ', error);
        throw new Error('Error al manejar el mensaje');
    }
});
exports.handleChatMessage = handleChatMessage;
const getAllMessages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const messages = yield (0, ChatModel_1.getMessages)();
        res.status(200).json(messages);
    }
    catch (error) {
        console.error('Error al obtener los mensajes: ', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
});
exports.getAllMessages = getAllMessages;
