import { Ibicycle } from "./bicycle.interface";
import { Bicyclemodel } from "./bicycle.model";

const createbicycleintoDB = async (bicycle: Ibicycle) => {
  const result = await Bicyclemodel.create(bicycle);
  return result;
};
const getBicyclefromDB = async (searchterm?: string) => {
  let filter = {};
  if (searchterm) {
    const regex = new RegExp(searchterm, "i");
    filter = {
      $or: [{ name: regex }, { brand: regex }, { type: regex }],
    };
  }
  const result = await Bicyclemodel.find(filter);
  return result;
};
const getSinglebicycle = async (productId: string) => {
  const result = await Bicyclemodel.find({ _id: productId });
  console.log(result);
  if (result.length === 0) {
    const message = "No data found";
    return message;
  }
  return result;
};
const Updatebicycle = async (id: string, data: Ibicycle) => {
  const result = await Bicyclemodel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
  return result;
};
const Deletebicycle = async (id: string) => {
  const result = await Bicyclemodel.findByIdAndDelete(id);
  return result;
};
export const bicycleServices = {
  createbicycleintoDB,
  getBicyclefromDB,
  getSinglebicycle,
  Updatebicycle,
  Deletebicycle,
};
