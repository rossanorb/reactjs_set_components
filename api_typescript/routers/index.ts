import express, { Request, Response } from "express";

export const router = express.Router();


router.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        body: "API Version 1.0"
    })

});