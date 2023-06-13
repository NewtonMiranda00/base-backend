import { Router } from "express";
import { todoRoutes } from "./todo";

const routes = Router();

routes.use('/todo', todoRoutes)

export { routes };
