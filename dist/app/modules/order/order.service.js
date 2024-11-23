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
exports.createOrderService = void 0;
const bicycle_model_1 = require("../bicycle/bicycle.model");
const order_model_1 = require("./order.model");
const createOrderService = (email, product, quantity, totalPrice) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if the product exists
    const bicycle = yield bicycle_model_1.Bicyclemodel.findById(product);
    if (!bicycle) {
        throw new Error("Bicycle not found");
    }
    // Check if sufficient stock is available
    if (bicycle.quantity < quantity) {
        throw new Error("Insufficient stock");
    }
    // Create the order
    const order = yield order_model_1.OrderModel.create({
        email,
        product,
        quantity,
        totalPrice,
    });
    // Update the inventory
    bicycle.quantity -= quantity;
    if (bicycle.quantity === 0) {
        bicycle.inStock = false;
    }
    yield bicycle.save();
    return order;
});
exports.createOrderService = createOrderService;
