"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderrouter = void 0;
const express_1 = __importDefault(require("express"));
const orders_controller_1 = require("./orders.controller");
const router = express_1.default.Router();
router.post("/", orders_controller_1.orderControls.createorder);
router.get("/", orders_controller_1.orderControls.getorder);
router.get("/:id", orders_controller_1.orderControls.singleorder);
router.delete("/:id", orders_controller_1.orderControls.orderdelete);
router.get("/revenue", orders_controller_1.orderControls.calculateRevenue);
exports.orderrouter = router;
