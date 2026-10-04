import {Sequelize} from "sequelize"; 
export const sequelize = new Sequelize('postgres','preBite','123',{
    host: 'localhost',
    dialect: 'postgres'
});

const connectToDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        }catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
 connectToDatabase();