import express from "express";
import scootersRouter from "./scootersRouter.js";
import scootersHistoryRouter from "./scootersLeaseHistoryRouter.js";
const router = express.Router();

router.use("/scooters", scootersRouter);
router.use("/scooters-lease-history", scootersHistoryRouter);

export default router;
