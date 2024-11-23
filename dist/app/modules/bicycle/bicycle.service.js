"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bicycleServices = void 0;
const bicycle_model_1 = require("./bicycle.model");
const createbicycleintoDB = (bicycle) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bicycle_model_1.Bicyclemodel.create(bicycle);
    return result;
});
const getBicyclefromDB = (searchterm) => __awaiter(void 0, void 0, void 0, function* () {
    let filter = {};
    if (searchterm) {
        const regex = new RegExp(searchterm, "i");
        filter = {
            $or: [{ name: regex }, { brand: regex }, { type: regex }],
        };
    }
    const result = yield bicycle_model_1.Bicyclemodel.find(filter);
    return result;
});
const getSinglebicycle = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bicycle_model_1.Bicyclemodel.find({ _id: productId });
    return result;
});
const Updatebicycle = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bicycle_model_1.Bicyclemodel.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
    });
    return result;
});
const Deletebicycle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bicycle_model_1.Bicyclemodel.findByIdAndDelete(id);
    return result;
});
exports.bicycleServices = {
    createbicycleintoDB,
    getBicyclefromDB,
    getSinglebicycle,
    Updatebicycle,
    Deletebicycle,
};
