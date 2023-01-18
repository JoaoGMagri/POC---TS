import { Request, Response } from "express";
import { ValidationError } from "joi";

import { Spending } from "../protocols/Spending.js";
import { allSpending, newSpending } from "../repositories/spending.repositories.js";
import { validationNewSpending } from "../service/spending.js";

async function getSpending(req: Request, res: Response){

    try {
        const obj = await allSpending();
        res.send(obj.rows);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

}
async function postSpending(req: Request, res: Response){
    const obj: Spending = req.body;

    try {
        const validated: false | ValidationError = validationNewSpending(obj)
        if (validated) {
            return res.send({message: validated.message}).status(409);
        }
        newSpending(obj)
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export {
    getSpending,
    postSpending,
}