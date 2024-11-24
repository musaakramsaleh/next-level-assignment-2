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
exports.orderControls = void 0;
const orders_service_1 = require("./orders.service");
const createorder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        console.log(data);
        const result = yield orders_service_1.orderServices.createorderintoDB(data);
        res.status(200).json({
            message: result,
            status: true,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            status: false,
            error,
        });
    }
});
exports.orderControls = {
    createorder,
};
