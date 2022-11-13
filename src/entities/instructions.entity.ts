import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({name: "Instructions", synchronize: true})
export class Instructions {
    @Column("number")
    @PrimaryColumn()
    ExperimentId: string;

    @Column("varchar")
    StepNumber: number;

    @Column("varchar")
    Image: string;

    @Column("varchar")
    Description: string;
}
