import { Column, Entity, IsNull, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: "Experiment", synchronize: true})
export class Experiment {
    @PrimaryGeneratedColumn("increment")
    ExperimentId: number;

    @Column("varchar")
    Name: string;

    @Column("varchar", {nullable: true})
    Description: string;

    @Column("varchar", {nullable: true})
    Level: string;

    @Column("varchar", {nullable: true})
    Subject: string;

    @Column("varchar", {nullable: true})
    MainImage: string;

    @Column("varchar", {nullable: true})
    MaterialsList: JSON;

    @Column("varchar", {nullable: true})
    SafetyPrecautions: string;

    @Column("varchar", {nullable: true})
    StepByStepInstructions;
}
