import express from "express";
import { orderControls } from "./orders.controller";

const router = express.Router();
router.post("/", orderControls.createorder);
export const orderrouter = router;
