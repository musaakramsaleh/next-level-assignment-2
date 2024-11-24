import express from "express";
import { orderControls } from "./orders.controller";

const router = express.Router();
router.post("/", orderControls.createorder);
// router.get("/", orderControls.getorder);
// router.get("/:id", orderControls.singleorder);
// router.delete("/:id", orderControls.orderdelete);
router.get("/revenue", orderControls.calculateRevenue);
export const orderrouter = router;
