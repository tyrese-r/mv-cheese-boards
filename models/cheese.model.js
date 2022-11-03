import { Model, DataTypes } from "sequelize";
import { db } from "../db/db.js";


class Cheese extends Model {}

Cheese.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    sequelize: db,
    name: 'Cheese'
})

export default Cheese