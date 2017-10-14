"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
exports.User = {
    id: {
        type: Sequelize.INTEGER(16),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    gender: {
        type: Sequelize.INTEGER(1),
        defaultValue: 1,
        allowNull: false,
    },
};
exports.UserConfig = {
    freezeTableName: true,
    tableName: 'user',
    timestamps: true,
    underscored: true,
};
//# sourceMappingURL=user.js.map