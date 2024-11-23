"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    email: { type: String, required: [true, "Please enter the email"] },
    product: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "bicycle",
        required: true,
    },
    quantity: { type: Number, required: [true, "Enter the quantity"] },
    totalPrice: { type: Number, required: true },
}, { timestamps: true });
exports.OrderModel = (0, mongoose_1.model)("Order", orderSchema);
