import { model, Schema } from "mongoose";
import { Iorder } from "./orders.interface";

const OrderSchema: Schema = new Schema<Iorder>(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email address",
      ],
    },
    product: {
      type: String,
      required: [true, "Product is required"],
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
      min: [1, "Minimum quantity cannot be less than 1"],
    },
    totalPrice: {
      type: Number,
      required: [true, "Total price is required"],
      min: [0, "Total price must be a positive number"],
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Create and export the Mongoose model
export const OrderModel = model<Iorder>("Order", OrderSchema);
