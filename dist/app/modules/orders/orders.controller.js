"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderControls = void 0;
const orders_service_1 = require("./orders.service");
const createorder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield orders_service_1.orderServices.createorderintoDB(data);
        res.send(result);
    }
    catch (error) {
        res.status(500).json({
            status: false,
            error,
        });
    }
});
const calculateRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const totalRevenue = yield orders_service_1.orderServices.calculateRevenuwService();
        res.status(200).json({
            message: "Revenue calculated successfully",
            status: true,
            data: totalRevenue, // Return the totalRevenue object directly
        });
    }
    catch (error) {
        console.error("Error calculating revenue:", error);
        res.status(500).json({
            message: "Error calculating revenue",
            status: false,
            error: error.message,
        });
    }
});
exports.orderControls = {
    createorder,
    calculateRevenue,
};
