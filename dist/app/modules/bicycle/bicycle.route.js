"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bicycleroutes = void 0;
const express_1 = __importDefault(require("express"));
const bicycle_controller_1 = require("./bicycle.controller");
const router = express_1.default.Router();
router.post("/", bicycle_controller_1.bicyclecontrollers.createBicycle);
router.get("/", bicycle_controller_1.bicyclecontrollers.getBicycle);
router.get("/:productId", bicycle_controller_1.bicyclecontrollers.getSinglebicycle);
router.put("/:productId", bicycle_controller_1.bicyclecontrollers.Updatebicycle);
router.delete("/:productId", bicycle_controller_1.bicyclecontrollers.Deletebicycle);
exports.bicycleroutes = router;
