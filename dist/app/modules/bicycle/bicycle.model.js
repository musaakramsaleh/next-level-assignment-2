"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bicyclemodel = void 0;
const mongoose_1 = require("mongoose");
const bicycleSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        maxlength: [20, "Name cannot be more than 20 characters"],
    },
    brand: {
        type: String,
        required: [true, "Brand is required"],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price must be a positive number"],
    },
    type: {
        type: String,
        required: [true, "Type is required"],
        enum: {
            values: ["Mountain", "Road", "Hybrid", "BMX", "Electric"],
            message: "Type must be one of: Mountain, Road, Hybrid, BMX, Electric",
        },
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        trim: true,
        maxlength: [200, "Description cannot be more than 200 characters"],
    },
    quantity: {
        type: Number,
        required: [true, "Quantity is required"],
        min: [0, "Quantity cannot be negative"],
    },
    inStock: {
        type: Boolean,
        required: [true, "InStock field is required"],
        default: true,
    },
}, {
    timestamps: true, // Automatically add createdAt and updatedAt fields
});
exports.Bicyclemodel = (0, mongoose_1.model)("Bicycle", bicycleSchema);
