import sequelize from "../config/sequelize";
import { DataTypes, DATE } from "sequelize";

const ProjectModel = sequelize.define("Project", {
    projectName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
},
{
    timestamps: false,
},
);

export default ProjectModel;