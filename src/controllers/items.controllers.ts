import { Request, Response } from "express";
import itemsModel from "../models/items.models";

const getItems = async (req: Request, res: Response) => {
    try {
        const getItems = await itemsModel.findAll({
            attributes: ["id", "name", "origin", "number"],
            order: [["id", "DESC"]],
        });
        if(!getItems) return res.status(404).json({ message: "There are no records" });
        res.json(getItems);
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        });
    }
};

const createItems = async ({body}: Request, res: Response) => {
    try {
        const { name, origin, number } = body;
        const newItem = await itemsModel.create({
        name,
        origin,
        number
    });
    res.json(newItem);
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        });
    }
};

const updateItems = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const itemUpdate = await itemsModel.findOne({
            attributes: ["id", "name", "origin", "number"],
            where: { id },
          });
          itemUpdate?.set(req.body);
          await itemUpdate?.save();
          if(!itemUpdate) return res.status(404).json({ message: "Item not found" });
          res.json(itemUpdate);
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        });
    }
};

const deleteItems = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const itemDelete = await itemsModel.destroy({
            where: { id },
        });
        if(!itemDelete) return res.status(404).json({ message: 'Item not found' });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        });
    }
};

const getItemsById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const getItem = await itemsModel.findOne({
            where: { id },
            attributes: ["id", "name", "origin", "number"],
        });
        if(!getItem) return res.status(404).json({message: "Item not found"});
        res.json(getItem);
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        });
    }
};

export { getItems, createItems, updateItems, deleteItems, getItemsById };