import { TodoController } from "@/controllers";
import { Router } from "express";

const todoRoutes = Router();

todoRoutes
  .get('/', TodoController.getAll)
  .get('/:id', TodoController.getOne)
  .post('/', TodoController.createOne)
  .put('/:id', TodoController.updateOne)
  .delete('/:id', TodoController.deleteOne);
  
export { todoRoutes };