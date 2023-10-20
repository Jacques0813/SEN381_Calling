import {AppDataSource} from "../index"
import { TechnicianSkill} from "../entity/TechnicianSkill"

export class Operations {
    constructor() {
    }

    public async AllTechnicianSkill(){
        const TSRepository = AppDataSource.getRepository(TechnicianSkill);
        const TS = await TSRepository.find();
        return TS;
    }
}