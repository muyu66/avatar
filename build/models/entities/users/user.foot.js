"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
exports.UserFoot = {
    id: {
        type: Sequelize.INTEGER(16),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    userId: {
        type: Sequelize.INTEGER(16),
        field: 'user_id',
    },
    shoeId: {
        type: Sequelize.INTEGER(16),
        field: 'shoe_id',
    },
    shoeSize: {
        type: Sequelize.TEXT(),
        field: 'shoe_size',
    },
    useState: {
        type: Sequelize.INTEGER(1),
        field: 'use_state',
    },
};
exports.UserFootConfig = {
    freezeTableName: true,
    tableName: 'user_foot',
    timestamps: true,
    underscored: true,
    hooks: {
        afterFind: (user_foots) => {
            if (Array.isArray(user_foots)) {
                for (const user_foot of user_foots) {
                    user_foot.shoeSize = user_foot.shoeSize ? JSON.parse(user_foot.shoeSize) : undefined;
                }
            }
            else {
                const user_foot = user_foots;
                user_foot.shoeSize = user_foot.shoeSize ? JSON.parse(user_foot.shoeSize) : user_foot.shoeSize;
            }
        },
        beforeCreate: (user_foot) => {
            user_foot.shoeSize = typeof user_foot.shoeSize === 'string' ? user_foot.shoeSize : JSON.stringify(user_foot.shoeSize);
        },
        beforeBulkCreate: (user_foots) => {
            for (const user_foot of user_foots) {
                user_foot.shoeSize = typeof user_foot.shoeSize === 'string' ? user_foot.shoeSize : JSON.stringify(user_foot.shoeSize);
            }
        },
        beforeUpdate: (user_foot) => {
            user_foot.shoeSize = typeof user_foot.shoeSize === 'string' ? user_foot.shoeSize : JSON.stringify(user_foot.shoeSize);
        },
        beforeBulkUpdate: (user_foots) => {
            for (const user_foot of user_foots) {
                user_foot.shoeSize = typeof user_foot.shoeSize === 'string' ? user_foot.shoeSize : JSON.stringify(user_foot.shoeSize);
            }
        },
    },
};
//# sourceMappingURL=user.foot.js.map