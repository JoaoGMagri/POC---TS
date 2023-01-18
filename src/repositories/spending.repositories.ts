import { QueryResult } from "pg";

import { SpendingEntity, Spending } from "../protocols/Spending.js";
import { connection } from "../database/database.js";

async function allSpending(): Promise<QueryResult<SpendingEntity>> {
    
    return connection.query(
        `
            SELECT * FROM spending;
        `
    )
    
}


async function newSpending(obj: Spending): Promise<void> {
    connection.query(
        `
            INSERT INTO spending(name, price)
            VALUES($1, $2)
            
        `,[obj.name, obj.price]
    )
}

export {
    allSpending,
    newSpending,
}