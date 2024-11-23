import { Request, Response } from "express";
import { createOrderService } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const { email, product, quantity, totalPrice } = req.body;

    const order = await createOrderService(
      email,
      product,
      quantity,
      totalPrice
    );

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: order,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

export const orderControllers = {
  createOrder,
};
