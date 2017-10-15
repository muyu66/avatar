import * as config from 'config';
import * as Sequelize from 'sequelize';
import * as Instance from './instance';
import * as Entity from './entities';
import * as Models from './model';

interface DbConfig {
    database: string;
    username: string;
    password: string;
    option: any;
}

export class Model {

    public sequelize: Sequelize.Sequelize;
    private dbConfig: DbConfig;

    public User: Models.User;
    public Photo: Models.Photo;
    public Shoe: Models.Shoe;
    public ShoePhoto: Models.ShoePhoto;

    public UserFoot: Models.UserFoot;

    constructor() {
        this.dbConfig = {
            database: config.get('sql.database') as string,
            username: config.get('sql.username') as string,
            password: config.get('sql.password') as string,
            option: config.get('sql') as any,
        };

        this.sequelize = new Sequelize(this.dbConfig.database, this.dbConfig.username, this.dbConfig.password, this.dbConfig.option);

        this.sequelize.sync();

        this.User = this.sequelize.define<Instance.User, Entity.IUser>('user', Entity.User, Entity.UserConfig);
        this.Photo = this.sequelize.define<Instance.Photo, Entity.IPhoto>('photo', Entity.Photo, Entity.PhotoConfig);
        this.Shoe = this.sequelize.define<Instance.Shoe, Entity.IShoe>('shoe', Entity.Shoe, Entity.ShoeConfig);
        this.ShoePhoto = this.sequelize.define<Instance.ShoePhoto, Entity.IShoePhoto>('shoe_photo', Entity.ShoePhoto, Entity.ShoePhotoConfig);
        this.UserFoot = this.sequelize.define<Instance.UserFoot, Entity.IUserFoot>('user_foot', Entity.UserFoot, Entity.UserFootConfig);

        this.UserFoot.belongsTo(this.Shoe);
    }

}
