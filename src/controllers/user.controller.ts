import { getAdminCreds, validateAdmin } from "../services/user.service";

const getAdminCred = (req, res) => {
    const adminCreds = getAdminCreds();
    res.send(adminCreds);
}

const valdiateAdmin = (req, res) => {
    const isAdminCredsValid = validateAdmin(req.body);
    res.send(isAdminCredsValid);
}

export {getAdminCred, valdiateAdmin};