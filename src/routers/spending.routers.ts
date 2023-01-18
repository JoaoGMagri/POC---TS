import { Router } from "express";
import { spendingFunc } from "../controllers/spending.controllers.js";

const router = Router();

router.get("/spendings", spendingFunc.getSpending)
router.post("/spendings", spendingFunc.postSpending)
router.put("/spendings/:id", spendingFunc.putSpending)
router.delete("/spendings/:id", spendingFunc.deleteSpending)

export default router;



