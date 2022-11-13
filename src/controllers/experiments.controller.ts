import { Request } from "express";
import { getAllExperiment, insertExperiment, getExById, updateAnExperiment } from "../services/experiments.service";

const getAllExperiments = async (req, res) => {
    const experiments = await getAllExperiment(req);
    res.send(experiments);
}

const getExperimentById = async (req, res) => {
    const id = parseInt(req.params.id);
    const experimentDetails = await getExById(id);
    res.send(experimentDetails);
}

const addExperiment = async (req: Request, res) => {
    const experiment = await insertExperiment(req);
    res.send(experiment);
}

const updateExperiment = (req: Request, res) => {
    const id = updateAnExperiment(req);
    res.send(id);
}

export {getAllExperiments, getExperimentById, addExperiment, updateExperiment};
