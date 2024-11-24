import { Request, Response } from "express";
import { bicycleServices } from "./bicycle.service";

const createBicycle = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    console.log(data);
    const result = await bicycleServices.createbicycleintoDB(data);

    res.status(200).json({
      success: true,
      message: "Bicycle created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching data",
      error,
    });
  }
};

const getBicycle = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const result = await bicycleServices.getBicyclefromDB(searchTerm as string);
    console.log(result);
    res.status(200).json({
      success: true,
      message: "Bicycle retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving bicycle",
      error,
    });
  }
};
const getSinglebicycle = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await bicycleServices.getSinglebicycle(productId as string);
    res.status(200).json({
      success: true,
      message: "Bicycle retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving single bicycle",
      error,
    });
  }
};
const Updatebicycle = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const data = req.body;
    const result = await bicycleServices.Updatebicycle(productId, data);
    res.status(200).json({
      success: true,
      message: "Bicycle updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving single bicycle",
      error,
    });
  }
};
const Deletebicycle = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await bicycleServices.Deletebicycle(productId);
    res.status(200).json({
      success: true,
      message: "Bicycle Deleted successfully",
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error Deleting bicycle",
      error,
    });
  }
};
export const bicyclecontrollers = {
  createBicycle,
  getBicycle,
  getSinglebicycle,
  Updatebicycle,
  Deletebicycle,
};
