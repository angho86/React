import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
	res.send("Paspirtukų nuomos istorija");
});

export default router;
