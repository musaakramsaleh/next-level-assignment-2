import { Bicyclemodel } from "../bicycle/bicycle.model";
import { OrderModel } from "./order.model";

export const createOrderService = async (
  email: string,
  product: string,
  quantity: number,
  totalPrice: number
) => {
  // Check if the product exists
  const bicycle = await Bicyclemodel.findById(product);

  if (!bicycle) {
    throw new Error("Bicycle not found");
  }

  // Check if sufficient stock is available
  if (bicycle.quantity < quantity) {
    throw new Error("Insufficient stock");
  }

  // Create the order
  const order = await OrderModel.create({
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
  await bicycle.save();

  return order;
};
