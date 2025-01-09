import { generateSalt,
        hashPassword,
        isValidCredentials,
} from "../utils/security.js";
import { registrationSchema } from "../utils/validations/AuthSchema.js";
import UserModel from "../models/UserModel.js";
import { Op } from "sequelize";

export async function register(req, res) {
    // patikrinimas aar naudotojas prisijunges
    if (req.session.isLogged) {
        return res.status(403).json({
            message: "You are already logged in. Please log out to create a new user",
        });
    }

    // duomenu is kliento gavimas

    const { username, email, password } = req.body;

    try {
        // validaciju vykdymas

        const validationResult = registrationSchema.safeParse(req.body);

        if(!validationResult.success){
            return res.status(400).json({ message: validationResult.error.issues });
        }

        // hashuojame slaptazodi

        const salt = generateSalt();
        const hashedPassword = hashPassword(password, salt);

        // userio kurimas duomenu bazeje

        const user = await UserModel.create({
            username,
            email,
            hashedPassword,
            salt,
        });

        // sesijos duomenu sudarymas

        req.session.user = {
            email,
            username,
        };
        req.session.isLogged = true;

        // registracija sekminga, atiduodame sekminga atsakyma

        res.status(201).json({ message: "Registration was successful", session: req.session });

    }  catch (err) {
        if (err?.original && err.original.errno === 1062){
            return res.status(400).json({ message: "Username or Email field was not unique "});
        }

        res.status(500).json({ message: "internal server error", err: err.message });
    }
}



