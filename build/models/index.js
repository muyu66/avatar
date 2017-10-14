"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("config");
const Sequelize = require("sequelize");
const Entity = require("./entities");
class Model {
    constructor() {
        this.dbConfig = {
            database: config.get('sql.database'),
            username: config.get('sql.username'),
            password: config.get('sql.password'),
            option: config.get('sql'),
        };
        this.sequelize = new Sequelize(this.dbConfig.database, this.dbConfig.username, this.dbConfig.password, this.dbConfig.option);
        this.User = this.sequelize.define('user', Entity.User, Entity.UserConfig);
        this.Photo = this.sequelize.define('photo', Entity.Photo, Entity.PhotoConfig);
        this.Shoe = this.sequelize.define('shoe', Entity.Shoe, Entity.ShoeConfig);
        this.ShoePhoto = this.sequelize.define('shoe_photo', Entity.ShoePhoto, Entity.ShoePhotoConfig);
        this.UserFoot = this.sequelize.define('user_foot', Entity.UserFoot, Entity.UserFootConfig);
        this.UserFoot.belongsTo(this.Shoe);
    }
}
exports.Model = Model;
//# sourceMappingURL=index.js.map