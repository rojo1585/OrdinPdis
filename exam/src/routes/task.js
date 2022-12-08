import { Router } from "express";
import { getDates, saveDate } from "../controllers/task";


const router = Router()

const newLocal = '/dates';
router.get(newLocal, getDates)

router.post(newLocal, saveDate)

export default router