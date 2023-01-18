import { Router } from "express";
import { getSpending, postSpending } from "../controllers/spending.controllers.js";

const router = Router();

router.get("/spendings", getSpending)
router.post("/spendings", postSpending)

export default router;



