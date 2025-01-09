import sequelize from "../config/sequelize";
import { DataTypes } from "sequelize";
import MilestoneModel from "./MilestoneModel.js";


const TaskModel = sequelize.define("Task", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    prior: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    finish: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
},
{ timestamps: false },
);

MilestoneModel.hasMany(TaskModel, {
    foreignKey: { allowNull: false, name: "milestoneId" },
    as: "milestoneTask",
});