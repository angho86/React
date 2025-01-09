import sequelize from "../config/sequelize";
import { DataTypes, DATE } from "sequelize";
import ProjectModel from "./ProjectModel.js";

const MilestoneModel = sequelize.define("Milestone",{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    finish: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },

    prior: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
},
{ timestamps: false },
);

ProjectModel.hasMany(MilestoneModel, {
    foreignKey: { allowNull: false, name: "projectId" },
    as: "projectMilestone",
});

export default MilestoneModel;