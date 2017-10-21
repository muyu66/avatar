import { Type } from '../../../interfaces';
import * as Sequelize from 'sequelize';
import { IBase } from '../base';

export interface IPhoto extends IBase {
    id?: number;
    bucket?: string;
    hash?: string;
}

export const Photo = {
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
export const PhotoConfig: Type.ModelConfig = {
    freezeTableName: true,
    tableName: 'photo',
    timestamps: true,
    underscored: true,
};