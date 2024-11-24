import { Bicyclemodel } from "../bicycle/bicycle.model";
import { Iorder } from "./orders.interface";
import { OrderModel } from "./orders.model";

const createorderintoDB = async (order: Iorder) => {
  const bicycle = await Bicyclemodel.findById(order.product);
  if (!bicycle) {
    const message: string = "This product is not in the list";
    return message;
  }
  if (order.quantity > bicycle.quantity) {
    const message: object = {
      message: "Insufficient number",
      status: false,
    };
    return message;
  }
  if (order.quantity < 1) {
    const message: object = {
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
  const result = await OrderModel.create(order);
  const message: object = {
    message: "Order created successfully",
    status: true,
    data: result,
  };
  return message;
};
const getorders = async () => {
  const result = await OrderModel.find();
  return result;
};
const getsingleorder = async (id: string) => {
  const result = await OrderModel.find({ _id: id });
  if (result.length === 0) {
    const message = "No data found";
    return message;
  }
  return result;
};
const deleteorder = async (id: string) => {
  const result = await OrderModel.findByIdAndDelete(id);
  return result;
};
const calculateRevenuwService = async () => {
  const result = await OrderModel.aggregate([
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
};
export const orderServices = {
  createorderintoDB,
  calculateRevenuwService,
  getorders,
  getsingleorder,
  deleteorder,
};
