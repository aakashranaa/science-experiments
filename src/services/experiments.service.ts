import { dataSource } from "../database/data-source";
import { Request } from "express";
import { Experiment } from "../entities/experiments.entity";

export const getAllExperiment = async (req: Express.Request)=> {
    const experimentRepo = dataSource.getRepository(Experiment);
    const experiments = await experimentRepo.find();

    console.log(experiments);
    return experiments;
}

export const insertExperiment = async (req: Request) => {
    const experimentRepo = dataSource.getRepository(Experiment);
    const newExperiment: Experiment = req.body;

    console.log('new details ', newExperiment.Name);
    const newExDetails = await experimentRepo.save({
        Name: newExperiment.Name,
        Description: newExperiment.Description,
        SafetyPrecautions: newExperiment.SafetyPrecautions,
        Level: newExperiment.Level,
        Subject: newExperiment.Subject
    });
    return newExDetails;
}

export const getExById = async (id: number) => {
    const experimentRepo = dataSource.getRepository(Experiment);
    const experimentDetails = await experimentRepo.findOneBy({ExperimentId: id});
    if (experimentDetails == null) return `Experiment by this id: ${id} does not exist`;
    return experimentDetails;
}

export const updateAnExperiment = async (req: Request) => {
    const experimentRepo = dataSource.getRepository(Experiment);
    const newExperiment: Experiment = req.body;

    console.log('new details ', newExperiment.Name);
    const exId = parseInt(req.params.id);
    const experiment = getExById(exId);

    if (experiment == null) return {"error": "experiment by this id is not available"}

    const newEx = await experimentRepo.save({
        ExperimentId: exId,
        Name: newExperiment.Name,
        Description: newExperiment.Description,
        SafetyPrecautions: newExperiment.SafetyPrecautions,
        Level: newExperiment.Level,
        Subject: newExperiment.Subject
    });

    console.log('updated new ex', newEx);
    return newEx;
}