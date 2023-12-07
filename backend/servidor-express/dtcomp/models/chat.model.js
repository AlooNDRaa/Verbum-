"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const user_chat_model_1 = __importDefault(require("./user.chat.model"));
const sequelize = new sequelize_1.Sequelize('verbum', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',
});
class messages extends sequelize_1.Model {
}
messages.init({
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    message_content: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'messages',
    timestamps: false,
});
messages.belongsTo(user_chat_model_1.default, { foreignKey: 'user_id' });
exports.default = messages;
