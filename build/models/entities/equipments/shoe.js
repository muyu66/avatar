"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
exports.Shoe = {
    id: {
        type: Sequelize.INTEGER(16),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    name: {
        type: Sequelize.STRING(100),
    },
    marketDate: {
        type: Sequelize.DATEONLY,
        field: 'martet_date',
    },
    heelHeight: {
        type: Sequelize.INTEGER(2),
        field: 'heel_height',
    },
    logo: {
        type: Sequelize.STRING(100),
    },
    toeStyle: {
        type: Sequelize.STRING(100),
        field: 'toe_style',
    },
    style: {
        type: Sequelize.STRING(100),
    },
    season: {
        type: Sequelize.INTEGER(1),
    },
    colors: {
        type: Sequelize.TEXT(),
        allowNull: true,
    },
};
exports.ShoeConfig = {
    freezeTableName: true,
    tableName: 'shoe',
    timestamps: true,
    underscored: true,
    hooks: {
        afterFind: (shoes) => {
            if (Array.isArray(shoes)) {
                for (const shoe of shoes) {
                    shoe.colors = shoe.colors ? JSON.parse(shoe.colors) : undefined;
                }
            }
            else {
                const shoe = shoes;
                shoe.colors = shoe.colors ? JSON.parse(shoe.colors) : shoe.colors;
            }
        },
        beforeCreate: (shoe) => {
            shoe.colors = typeof shoe.colors === 'string' ? shoe.colors : JSON.stringify(shoe.colors);
        },
        beforeBulkCreate: (shoes) => {
            for (const shoe of shoes) {
                shoe.colors = typeof shoe.colors === 'string' ? shoe.colors : JSON.stringify(shoe.colors);
            }
        },
        beforeUpdate: (shoe) => {
            shoe.colors = typeof shoe.colors === 'string' ? shoe.colors : JSON.stringify(shoe.colors);
        },
        beforeBulkUpdate: (shoes) => {
            for (const shoe of shoes) {
                shoe.colors = typeof shoe.colors === 'string' ? shoe.colors : JSON.stringify(shoe.colors);
            }
        },
    },
};
