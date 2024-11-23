import express from "express";
import { bicyclecontrollers } from "./bicycle.controller";

const router = express.Router();

router.post("/create-bicycle", bicyclecontrollers.createBicycle);
router.get("/", bicyclecontrollers.getBicycle);
router.get("/:productId", bicyclecontrollers.getSinglebicycle);
router.put("/:productId", bicyclecontrollers.Updatebicycle);
router.delete("/:productId", bicyclecontrollers.Deletebicycle);

export const bicycleroutes = router;
