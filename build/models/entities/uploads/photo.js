"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
exports.Photo = {
    id: {
        type: Sequelize.INTEGER(16),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    bucket: {
        type: Sequelize.STRING(100),
    },
    hash: {
        type: Sequelize.STRING(200),
    },
};
exports.PhotoConfig = {
    freezeTableName: true,
    tableName: 'photo',
    timestamps: true,
    underscored: true,
};
