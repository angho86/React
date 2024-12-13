import sequelize from "./config/sequelize.js";
import { DataTypes } from "sequelize";

const Scootermodel = sequelize.define(
    "scooter",
    {
        isBusy: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },

        registrationCode: {
            type: DataTypes.STRING,
            unique: true,
        },
        lastUseTime: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        totalRide: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
        },
        rideTariffPerKm: {
            type: DataTypes.FLOAT,
        },
        leaseTariffPerMin: {
            type: DataTypes.FLOAT,
        },

    },
    { timestamps: false }
);

export default Scootermodel;
