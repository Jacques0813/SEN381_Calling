import "reflect-metadata"
import { DataSource } from "typeorm"
import { TechnicianSkill } from "./entity/TechnicianSkill"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "sql11.freesqldatabase.com",
    port: 3306,
    username: "sql11653999",
    password: "rcArPmc9CM",
    database: "sql11653999",
    synchronize: true,
    logging: false,
    entities: [TechnicianSkill],
    migrations: [],
    subscribers: [],
})
