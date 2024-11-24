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
    const totalRevenue = await orderServices.calculateRevenueService();
    res.status(200).json({
      message: "Revenue calculated successfully",
      status: true,
      data: { totalRevenue },
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Error calculating revenue",
      status: false,
      error: error.message,
    });
  }
};
const getorder = async (req: Request, res: Response) => {
  try {
    const result = await orderServices.getorders();
    res.status(200).json({
      message: "Data retrieved successfully",
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Error calculating revenue",
      status: false,
      error: error.message,
    });
  }
};
const singleorder = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const result = await orderServices.getsingleorder(id);
    res.status(200).json({
      success: true,
      message: "Order data found successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Error calculating revenue",
      status: false,
      error: error.message,
    });
  }
};
const orderdelete = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const result = await orderServices.deleteorder(id);
    res.status(200).json({
      success: true,
      message: "Order data Deleted successfully",
      data: {},
    });
  } catch (error: any) {
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
  getorder,
  singleorder,
  orderdelete,
};
