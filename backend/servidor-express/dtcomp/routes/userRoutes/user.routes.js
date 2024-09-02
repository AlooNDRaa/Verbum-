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
exports.setupUserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../../controllers/usercontroller/user.controller");
const router = express_1.default.Router();
const setupUserRoutes = () => {
    router.get('/user', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, user_controller_1.getAllUsers)(req, res); }));
    router.post('/newuser', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, user_controller_1.createUser)(req, res); }));
    router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, user_controller_1.loginUser)(req, res); }));
    return router;
};
exports.setupUserRoutes = setupUserRoutes;
