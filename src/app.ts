import express, { Application, Request, Response } from "express";
import cors from "cors";
import { bicycleroutes } from "./app/modules/bicycle/bicycle.route";
import { orderRoutes } from "./app/modules/order/order.route";
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

//application routes
app.use("/api/products/", bicycleroutes);
app.use("/api/orders/", orderRoutes);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
export default app;
