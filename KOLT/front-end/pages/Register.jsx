import ".../styles/register.css";
import {
    Button,
    Grid2 as Grid,
    Paper,
    textField,
    Typpography,
} from "@mui/material";
import { registrationSchema } from "../utils/AuthSchema";
import { useState } from "react";


export default function RegisterPage() {
// TODO: Jei useris prisijunges redirektinti i dashboarda

// Error statai, skirti kiekvienam TextFieldui

    const [errors, setErrors ] = useState({
        username: "",
        email: "",
        password: "",
        repeatPassword: "",
    });

    async function handleFormSubmit(e) {
        // Kad neissisiustu forma

        e.preventDefault();

        const formData = new FormData(e.target);
        const registrationData = {
            username: formData.get("username"),
            email: formData.get("email"),
            password: formData.get("password"),
            repeatPassword: formData.get("repeatPassword"),
        };

        // patikrinimas ar slaptazodziai sutampa

        if(registrationData.password !== registrationData.repeatPassword) {
            setErrors((current) => ({
                ...current,
                password: "Passwords does not match",
                repeatPassword: "Passwords does not match",
            }));
        } else {
            setErrors((current) => ({
                ...current,
                password: "",
                repeatPassword: "",
            }));
        }

        // Validacija kitiems laukams

        const validationResult = registrationSchema.safeParse(registrationData);
        console.log(validationresult);

        if (!validationResult.success) {
            // jeigu nepraejo validacijos

            validationResult.error.forEach((issue) => {
                setErrors((current) => ({
                    ...current,
                    [issue.path[0]]: issue.message,
                }));
            });
        }

        delete registrationData.repeatPassword;

        const promise = await fetch("/server/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(registrationData),
        });

        // Patikrinimas ar serveris atsake teigiamai

        if (promise.ok) {
            // redirektinamas i kita puslapi

            window.location.href = "/";
        } else {
            const response = await promise.json();
        }
    }




}

