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
    const message: string = "Insufficient number";
    return message;
  }
  if (order.quantity < 1) {
    const message: string = "Invalid quantity. Atleast enter 1";
    return message;
  }
  bicycle.quantity -= order.quantity;
  if (bicycle.quantity === 0) {
    bicycle.inStock = false;
  }
  bicycle.save();
  const result = await OrderModel.create(order);
  return result;
};
export const orderServices = {
  createorderintoDB,
};
