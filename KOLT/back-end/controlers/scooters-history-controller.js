import ScooterHistoryModel from "../models/ScooterLeaseHistoryModel.js";
import ScooterModel from "../models/ScooterModel.js";
import { ScooterLeaseHistoryCreateValidation } from "../utils/validations/ScooterLeaseHistorySchema.js";

export async function getAllScootersHistory(req, res) {
	const allScotersHistory = await ScooterHistoryModel.findAll();
	res.status(200).json(allScotersHistory);
}
export async function getScooterHistoryById(req, res) {
	const { id } = req.params;
	if (!id || isNaN(id))
		return res
			.status(400)
			.json({ message: "Scooter ID was not provided or was in wrong format" });

	const foundScooterHistory = await ScooterHistoryModel.findAll({
		where: { scooterId: id },
	});
	res.status(200).json(foundScooterHistory);
}
export async function createScooterHistoryRecord(req, res) {
	const newScooterHistoryData = {
		startingRideKm: updatedScooter.totalRide,
		city: req.body,
	};
	const validationResult = ScooterLeaseHistoryCreateValidation.safeParse(
		newScooterHistoryData
	);
	if (!validationResult.success)
		return res.status(400).json({ errors: validationResult.error.issues });
	const updatedData = await sequelize.transaction(async (t) => {
		const updatedScooter = await ScooterModel.update(
			{
				isBusy: true,
				lastUseTime: new Date(),
			},
			{ transaction: t }
		);
		const newScooterHistory = await ScooterHistoryModel.create(
			newScooterHistoryData,
			{ transaction: t }
		);
		return { updatedScooter, newScooterHistory };
	});
	res.status(201).json(updatedData);
}