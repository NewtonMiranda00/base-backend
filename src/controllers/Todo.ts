import { Request, Response } from "express";
import { TaskModel } from "@/models";

export class TodoController {
  static async getAll(req: Request, res: Response): Promise<void> {
    const tasks = await TaskModel.find();

    res.status(200).send(tasks);
  } 

  static async getOne(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      const task = (await TaskModel.findOne({ _id: id })).toJSON();

      if (!task) throw new Error('Task not found.');
      
      res.status(200).send({ ...task });
    } catch {
      res.status(401).send({});
    }
  }
  
  static async createOne(req: Request, res: Response): Promise<void> {
    try {
      const { title, description } = req.body;

      const createdTask = (await TaskModel.create({ title, description })).toJSON();

      res.status(201).send({ ...createdTask });
    } catch {
      res.status(401).send({});
    }
  }

  static async updateOne(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { title, description, done } = req.body;

      const updatedTask = 
        (await TaskModel.findByIdAndUpdate({ _id: id }, { title, description, done })).toJSON();

      res.send({ ...updatedTask })
    } catch {
      res.status(401).send({});
    }
  }

  static async deleteOne(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      await TaskModel.deleteOne({ _id: id });

      res.status(200).send({})
    } catch {
      res.status(401).send({});
    }
  }
}