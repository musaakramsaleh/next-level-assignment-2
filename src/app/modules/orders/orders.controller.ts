import { Request, Response } from "express";
import { orderServices } from "./orders.service";

const createorder = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    console.log(data);
    const result = await orderServices.createorderintoDB(data);
    res.status(200).json({
      message: result,
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      error,
    });
  }
};
export const orderControls = {
  createorder,
};
