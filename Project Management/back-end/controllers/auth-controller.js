import { generateSalt,
        hashPassword,
        isValidCredentials,
} from "../utils/security.js";
import { registrationSchema } from "../utils/validations/AuthSchema.js";
import UserModel from "../models/UserModel.js";
import { Op } from "sequelize";

export async function register(req, res) {
    // patikrinimas aar naudotojas prisijunges
    
}