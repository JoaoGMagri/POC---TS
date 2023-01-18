import { Router } from "express";
import { getSpending } from "../controllers/spending.controllers.js";

const router = Router();

router.get("/spendings", getSpending)

export default router;



