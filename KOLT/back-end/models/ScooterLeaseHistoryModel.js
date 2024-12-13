import sequelize from "./config/sequelize.js";
import { DataTypes } from "sequelize";
import Scootermodel from "./ScooterModel.js";
import { FOREIGNKEYS } from "sequelize/lib/query-types";

const ScooterLeaseHistoryModel = sequelize.define(
    "scooter_lease_history",
    {
        startingRideKm: {
            type: DataTypes.FLOAT,
        },
        endingRideKm: {
            type: DataTypes.FLOAT,
        },
        startingLeaseDate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        endingLeaseDate: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null,
        },
        leasingPrice: {
            type: DataTypes.FLOAT,
            allowNull: true,
            defaultValue: null,
        },
        city: {
            type: DataTypes.STRING,
        },

    },
    { timestamps: false }
);

Scootermodel.hasMany(ScooterLeaseHistoryModel, {
    foreignKey: {allowNull: false, name: "scooterId" },
});

export default ScooterLeaseHistoryModel;