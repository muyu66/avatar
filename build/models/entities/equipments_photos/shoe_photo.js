"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
exports.ShoePhoto = {
    id: {
        type: Sequelize.INTEGER(16),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    shoeId: {
        type: Sequelize.INTEGER(16),
        field: 'shoe_id',
    },
    frontPhotoId: {
        type: Sequelize.INTEGER(16),
        field: 'front_photo_id',
    },
    backPhotoId: {
        type: Sequelize.INTEGER(16),
        field: 'back_photo_id',
    },
    leftPhotoId: {
        type: Sequelize.INTEGER(16),
        field: 'left_photo_id',
    },
    rightPhotoId: {
        type: Sequelize.INTEGER(16),
        field: 'right_photo_id',
    },
};
exports.ShoePhotoConfig = {
    freezeTableName: true,
    tableName: 'shoe_photo',
    timestamps: true,
    underscored: true,
};
