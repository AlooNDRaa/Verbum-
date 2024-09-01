"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_routes_1 = require("../routes/userRoutes/user.routes");
const egg_route_1 = require("../routes/eggroutes/egg.route");
const Socket_config_1 = require("../socket/Socket.config");
const message_routes_1 = require("../routes/chatRoutes/message.routes");
dotenv_1.default.config();
const PORT = process.env.PORT;
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const corsOptions = {
    origin: process.env.FRONTEND_URL,
};
(0, Socket_config_1.setupSocketIO)(server);
app.use((0, express_1.urlencoded)({ extended: true }));
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.send('puerto funcionando');
});
app.use('/api', (0, user_routes_1.setupUserRoutes)());
app.use('/api', (0, egg_route_1.setupEggRoutesWithDb)());
app.use('/api', (0, message_routes_1.messageRoutes)());
server.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto http://localhost:${PORT}`);
});
