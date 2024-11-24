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
        res.status(500).json({
            message: "Error calculating revenue",
            status: false,
            error: error.message,
        });
    }
});
const getorder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield orders_service_1.orderServices.getorders();
        res.status(200).json({
            message: "Data retrieved successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Error calculating revenue",
            status: false,
            error: error.message,
        });
    }
});
const singleorder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const result = yield orders_service_1.orderServices.getsingleorder(id);
        res.status(200).json({
            success: true,
            message: "Order data found successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Error calculating revenue",
            status: false,
            error: error.message,
        });
    }
});
const orderdelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const result = yield orders_service_1.orderServices.deleteorder(id);
        res.status(200).json({
            success: true,
            message: "Order data Deleted successfully",
            data: {},
        });
    }
    catch (error) {
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
    getorder,
    singleorder,
    orderdelete,
};
