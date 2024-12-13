import ScooterModel from "../models/ScooterModel.js";
import { ScooterCreateSchema } from "../utils/validations/ScooterSchema.js";

export async function getAllScooters(req, res) {
	const allScooters = await ScooterModel.findAll();
	res.status(200).json(allScooters);
}
export async function getScooterById(req, res) {
	// /api/data/7
	const { id } = req.params;
	if (!id || isNaN(id))
		return res
			.status(400)
			.json({ message: "Scooter ID was not provided or was in wrong format" });
	const foundScooter = await ScooterModel.findByPk(id);
	if (!foundScooter)
		return res.status(404).json({ message: "Scooter was not found" });
	res.status(200).json(foundScooter);
}
export async function createScooter(req, res) {
	const validationResult = ScooterCreateSchema.safeParse(req.body);
	if (!validationResult.success)
		return res.status(400).json({ error: validationResult.error.issues });

	const newScooter = await ScooterModel.create(req.body);
	res.status(201).json(newScooter);
}
export async function deleteScooterById(req, res) {
	const { id } = req.params;
	if (!id || isNaN(id))
		return res
			.status(400)
			.json({ message: "Scooter ID was not provided or was in wrong format" });
	const deletedScooter = await ScooterModel.destroy({ where: { id } });
	if (!deletedScooter)
		return res
			.status(404)
			.json({ message: "Scooter with provided ID was not found" });

	res.status(204).json();
}
export async function updateScooterById(req, res) {
	const { id } = req.params;
	if (!id || isNaN(id))
		return res
			.status(400)
			.json({ message: "Scooter ID was not provided or was in wrong format" });
	const validationResult = ScooterCreateSchema.safeParse(req.body);
	if (!validationResult.success)
		return res.status(400).json({ error: validationResult.error.issues });
	const updatedScooter = await ScooterModel.update(req.body, { where: { id } });
	if (!updatedScooter)
		return res
			.status(404)
			.json({ message: "Scooter with provided ID was not found" });
	res.status(201).json(updatedScooter);
}