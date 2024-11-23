import mongoose from "mongoose";

export type IOrder = {
  email: string;
  product: mongoose.Schema.Types.ObjectId;
  quantity: number;
  totalPrice: number;
};
