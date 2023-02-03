import { Router } from "express";
import { getItems, createItems, updateItems, deleteItems, getItemsById } from "../controllers/items.controllers";

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Item:
 *     type: object
 *     properties:
 *      id:
 *       type: integer
 *       description: The auto-incremental ID of the item
 *      name:
 *       type: string
 *       description: The name of the item
 *      origin:
 *       type: string
 *       description: The origin of the item
 *      number:
 *       type: number
 *       description: The number of items
 *     required:
 *      -name
 *      -origin
 *      -number
 *     example:
 *      id: 1
 *      name: Apple
 *      origin: Colombia
 *      number: 50
 *    ItemError:
 *     type: object
 *     properties:
 *      message:
 *       type: string
 *       description: A message of error
 *     example: 
 *      message: Something goes wrong    
 *  parameters:
 *   itemId:
 *    in: path
 *    name: id
 *    required: true
 *    schema:
 *     type: integer
 *    description: The item id
 */

/**
 * @swagger
 * tags:
 *  name: Items
 *  description: Items endpoint
 */

/**
 * @swagger
 * /api/items:
 *  get:
 *   summary: Returns an array of items
 *   tags: [Items]
 *   responses: 
 *    200:
 *     description: The list of items
 *     content: 
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/schemas/Item'
 *    500:
 *     description: There are no records or something goes wrong
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ItemError'
 */
/**
 * http://localhost:3000/api/items [GET]
 */
router.get("/", getItems);

/**
 * @swagger
 * /api/items:
 *  post:
 *   summary: Create an array of items
 *   tags: [Items]
 *   requestBody:
 *    required: true
 *    content: 
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/Item'
 *   responses: 
 *    200:
 *     description: The item successfully created
 *     content: 
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Item'
 *    500:
 *     description: An error occurred
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ItemError'
 */
/**
 * http://localhost:3000/api/items [POST]
 */
router.post("/", createItems);

/**
 * @swagger
 * /api/items/{id}:
 *  put:
 *   summary: Update item by id
 *   tags: [Items]
 *   parameters:
 *    - $ref: '#/components/parameters/itemId'
 *   requestBody:
 *    requered: true
 *    content:
 *     application/json:
 *      schema: 
 *       $ref: '#/components/schemas/Item'
 *   responses:
 *    200:
 *     description: Item was updated successfully
 *     content:
 *      application/json:
 *       schema: 
 *        $ref: '#/components/schemas/Item'
 *    404:
 *     description: Item wasn't found
 *     content:
 *      application/json:
 *       schema: 
 *        $ref: '#/components/schemas/ItemError'
 */
/**
 * http://localhost:3000/api/items/id? [PUT]
 */
router.put("/:id", updateItems);

/**
 * @swagger
 * /api/items/{id}:
 *  delete:
 *   summary: Delete item by id
 *   tags: [Items]
 *   parameters:
 *    - $ref: '#/components/parameters/itemId'
 *   responses:
 *    204:
 *     description: The item was deleted successfully
 *    404:
 *     description: The item wasn't found
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ItemError'
 */
/**
 * http://localhost:3000/api/items/id? [DELETE]
 */
router.delete("/:id", deleteItems);

/**
 * @swagger
 * /api/items/{id}:
 *  get:
 *   summary: Return a item by id
 *   tags: [Items]
 *   parameters:
 *    - $ref: '#/components/parameters/itemId'
 *   responses:
 *    200:
 *     description: The item was found
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Item'
 *    404:
 *     description: The item wasn't found or something goes wrong
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ItemError'
 */

/**
 * http://localhost:3000/api/items/id? [GET]
 */
router.get("/:id", getItemsById);

export { router };