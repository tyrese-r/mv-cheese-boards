import { Model, DataTypes } from "sequelize";
import { db } from "../db/db.js";


class User extends Model {}

User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    sequelize: db,
    name: 'User'
})

export default User