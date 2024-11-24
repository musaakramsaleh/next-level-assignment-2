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
        const message = "Insufficient number";
        return message;
    }
    if (order.quantity < 1) {
        const message = "Invalid quantity. Atleast enter 1";
        return message;
    }
    bicycle.quantity -= order.quantity;
    if (bicycle.quantity === 0) {
        bicycle.inStock = false;
    }
    bicycle.save();
    const result = yield orders_model_1.OrderModel.create(order);
    return result;
});
exports.orderServices = {
    createorderintoDB,
};
