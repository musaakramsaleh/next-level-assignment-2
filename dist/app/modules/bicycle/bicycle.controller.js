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
exports.bicyclecontrollers = void 0;
const bicycle_service_1 = require("./bicycle.service");
const createBicycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        console.log(data);
        const result = yield bicycle_service_1.bicycleServices.createbicycleintoDB(data);
        res.status(200).json({
            success: true,
            message: "Bicycle created successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching data",
            error,
        });
    }
});
const getBicycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        const result = yield bicycle_service_1.bicycleServices.getBicyclefromDB(searchTerm);
        console.log(result);
        res.status(200).json({
            success: true,
            message: "Bicycle retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving bicycle",
            error,
        });
    }
});
const getSinglebicycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield bicycle_service_1.bicycleServices.getSinglebicycle(productId);
        res.status(200).json({
            success: true,
            message: "Bicycle retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving single bicycle",
            error,
        });
    }
});
const Updatebicycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const data = req.body;
        const result = yield bicycle_service_1.bicycleServices.Updatebicycle(productId, data);
        res.status(200).json({
            success: true,
            message: "Bicycle updated successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving single bicycle",
            error,
        });
    }
});
const Deletebicycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield bicycle_service_1.bicycleServices.Deletebicycle(productId);
        res.status(200).json({
            success: true,
            message: "Bicycle Deleted successfully",
            data: {},
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error Deleting bicycle",
            error,
        });
    }
});
exports.bicyclecontrollers = {
    createBicycle,
    getBicycle,
    getSinglebicycle,
    Updatebicycle,
    Deletebicycle,
};
