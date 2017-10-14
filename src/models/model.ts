import * as Sequelize from 'sequelize';
import * as Instance from './instance';
import * as Entity from './entities';

export interface User extends Sequelize.Model<Instance.User, Entity.IUser> { }
export interface Photo extends Sequelize.Model<Instance.Photo, Entity.IPhoto> { }
export interface Shoe extends Sequelize.Model<Instance.Shoe, Entity.IShoe> { }
export interface ShoePhoto extends Sequelize.Model<Instance.ShoePhoto, Entity.IShoePhoto> { }
export interface UserFoot extends Sequelize.Model<Instance.UserFoot, Entity.IUserFoot> { }
