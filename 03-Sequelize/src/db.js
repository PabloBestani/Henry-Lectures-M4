const {Sequelize} = require("sequelize");
const UsersModel = require("./models/UsersModel");
const PostModel = require("./models/PostsModel");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/demo39`,
    {logging:false}
);


UsersModel(sequelize);
PostModel(sequelize);



//*CREAR RELACIONES -> ASOCIACIONES
const {User, Post} = sequelize.models;
User.hasMany(Post);
Post.belongsTo(User);



module.exports = {
    ...sequelize.models,
    sequelize,
};