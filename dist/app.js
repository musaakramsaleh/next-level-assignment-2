"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const bicycle_route_1 = require("./app/modules/bicycle/bicycle.route");
const orders_routes_1 = require("./app/modules/orders/orders.routes");
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//application routes
app.use("/api/products/", bicycle_route_1.bicycleroutes);
app.use("/api/orders/", orders_routes_1.orderrouter);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
exports.default = app;
