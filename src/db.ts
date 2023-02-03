import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
    "itemsdb", // database
    "root", // user
    "root", // password
    {
        host: "localhost", // host
        dialect: "mysql"
    }
);