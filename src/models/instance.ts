import * as Sequelize from 'sequelize';
import * as Entity from './entities';

export interface User extends Sequelize.Instance<Entity.IUser>, Entity.IUser { }
export interface Photo extends Sequelize.Instance<Entity.IPhoto>, Entity.IPhoto { }
export interface Shoe extends Sequelize.Instance<Entity.IShoe>, Entity.IShoe { }
export interface ShoePhoto extends Sequelize.Instance<Entity.IShoePhoto>, Entity.IShoePhoto { }
export interface UserFoot extends Sequelize.Instance<Entity.IUserFoot>, Entity.IUserFoot { }
