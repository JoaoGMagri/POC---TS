import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const server = express();
dotenv.config();

server
    .use(cors())
    .use(express.json())
    .get("/health", (req, res) => { res.send('ok') })

const port = process.env.PORT
server.listen(port, () => {
    console.log(`Server running in port: ${port}`);
})