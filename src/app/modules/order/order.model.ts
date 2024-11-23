import mongoose, { model, Schema, SchemaType } from "mongoose";
import { IOrder } from "./order.interface";

const orderSchema = new Schema<IOrder>(
  {
    email: { type: String, required: [true, "Please enter the email"] },
    product: {
      type: Schema.Types.ObjectId,
      ref: "bicycle",
      required: true,
    },
    quantity: { type: Number, required: [true, "Enter the quantity"] },
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true }
);
export const OrderModel = model<IOrder>("Order", orderSchema);
