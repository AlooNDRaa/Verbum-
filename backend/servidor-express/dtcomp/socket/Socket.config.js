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
exports.setupSocketIO = void 0;
const socket_io_1 = require("socket.io");
const ChatController_1 = require("../controllers/chatController/ChatController");
const setupSocketIO = (server) => {
    const io = new socket_io_1.Server(server, {
        cors: {
            origin: process.env.FRONTEND_URL,
        },
    });
    io.on('connection', (socket) => {
        console.log('Un cliente se ha conectado');
        socket.on('chat message', (data) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const message = yield (0, ChatController_1.handleChatMessage)(data);
                io.emit('chat message', message);
            }
            catch (error) {
                console.error('Error al manejar el mensaje: ', error);
            }
        }));
        socket.on('disconnect', () => {
            console.log('Un cliente se ha desconectado');
        });
    });
    return io;
};
exports.setupSocketIO = setupSocketIO;
