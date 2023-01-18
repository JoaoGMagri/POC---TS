import { allSpending } from "../repositories/spending.repositories.js";

async function getSpending(req, res){

    try {
        const obj = await allSpending();
        res.send(obj.rows);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

}


export {
    getSpending,
}