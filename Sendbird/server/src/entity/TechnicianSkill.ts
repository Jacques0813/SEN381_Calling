import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm"

@Entity({ name: "TechnicianSkill" }) 
export class TechnicianSkill {

    @PrimaryGeneratedColumn()
    SkillId!: number

    @Column({type:"int"})
    EmpId!: number

    @Column({ type:"nvarchar", length: 20 })
    Skill!: string

}
