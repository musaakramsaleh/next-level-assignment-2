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
exports.orderServices = void 0;
const bicycle_model_1 = require("../bicycle/bicycle.model");
const orders_model_1 = require("./orders.model");
const createorderintoDB = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const bicycle = yield bicycle_model_1.Bicyclemodel.findById(order.product);
    if (!bicycle) {
        const message = "This product is not in the list";
        return message;
    }
    if (order.quantity > bicycle.quantity) {
        const message = {
            message: "Insufficient number",
            status: false,
        };
        return message;
    }
    if (order.quantity < 1) {
        const message = {
            message: "Please atleast enter 1",
            status: false,
        };
        return message;
    }
    bicycle.quantity -= order.quantity;
    if (bicycle.quantity === 0) {
        bicycle.inStock = false;
    }
    bicycle.save();
    order.totalPrice = bicycle.price * order.quantity;
    const result = yield orders_model_1.OrderModel.create(order);
    const message = {
        message: "Order created successfully",
        status: true,
        data: result,
    };
    return message;
});
const getorders = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield orders_model_1.OrderModel.find();
    return result;
});
const getsingleorder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield orders_model_1.OrderModel.find({ _id: id });
    if (result.length === 0) {
        const message = "No data found";
        return message;
    }
    return result;
});
const deleteorder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield orders_model_1.OrderModel.findByIdAndDelete(id);
    return result;
});
const calculateRevenuwService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield orders_model_1.OrderModel.aggregate([
        {
            $group: {
                _id: null,
                totalRevenue: { $sum: "$totalPrice" }, // Summing up all totalPrice fields
            },
        },
        {
            $project: {
                _id: 0,
                totalRevenue: 1, // Include totalRevenue in the result
            },
        },
    ]);
    // If no orders are present, set totalRevenue to 0
    return result.length > 0 ? result[0] : { totalRevenue: 0 };
});
exports.orderServices = {
    createorderintoDB,
    calculateRevenuwService,
    getorders,
    getsingleorder,
    deleteorder,
};
