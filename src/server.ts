import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import spending from './routers/spending.routers.js';

const server = express();
dotenv.config();

server
    .use(cors())
    .use(express.json())
    .use(spending)
    .get("/health", (req, res) => { res.send('ok') })

const port = process.env.PORT
server.listen(port, () => {
    console.log(`Server running in port: ${port}`);
})