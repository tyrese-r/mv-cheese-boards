import { Model, DataTypes } from "sequelize";
import { db } from "../db/db.js";


class Board extends Model {}

Board.init({
    type: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    rating: {
        type: DataTypes.NUMBER,
        allowNull: true
    }

}, {
    sequelize: db,
    name: 'Board'
})

export default Board