import express from 'express';
import { Express, Request, Response } from 'express';
import "reflect-metadata";
import { AppDataSource } from "./data-source"
import { TechnicianSkill} from "./entity/TechnicianSkill"
import {Operations} from "./database_operations/operations"
import cors from "cors"

AppDataSource.initialize().then(async () => {

    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(TechnicianSkill)
    // console.log("Loaded users: ", users)

    console.log("Connected to database server");

    const app: Express = express();
    app.use(cors({
      origin: 'http://localhost:5173',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    }));
    const port = 3000;
    const operations = new Operations();

    app.get('/Api', async (req: Request, res: Response) => {
      res.send(await operations.AllTechnicianSkill());
    });

    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });

}).catch(error => console.log(error))

export { AppDataSource };