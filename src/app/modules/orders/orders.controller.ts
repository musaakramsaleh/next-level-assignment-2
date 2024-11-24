import { Request, Response } from "express";
import { orderServices } from "./orders.service";

const createorder = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await orderServices.createorderintoDB(data);
    res.send(result);
  } catch (error) {
    res.status(500).json({
      status: false,
      error,
    });
  }
};

const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const totalRevenue = await orderServices.calculateRevenuwService();

    res.status(200).json({
      message: "Revenue calculated successfully",
      status: true,
      data: totalRevenue, // Return the totalRevenue object directly
    });
  } catch (error: any) {
    console.error("Error calculating revenue:", error);

    res.status(500).json({
      message: "Error calculating revenue",
      status: false,
      error: error.message,
    });
  }
};

export const orderControls = {
  createorder,
  calculateRevenue,
};
