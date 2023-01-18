import { connection } from "../database/database.js";

async function allSpending() {
    
    return await connection.query(
        `
            SELECT * FROM spending;
        `
    )
    
}

export {
    allSpending,
}