import { useState } from "react";

export default function PasswordInput({ onPasswordChange = (newValue) => {} }) {
    // Error message
    const [ errormessage, setErrorMessage ] = useState("");

    function IsPasswordValid(e) {
        const password = e.target.value;

        if(!/[a-z]/.test(password)){
            return setErrorMessage("Password does not meet lower character requirements");
        }

        if(!/[A-Z]/.test(password)) {
            return setErrorMessage("Password does not meet upper character requirements");
        }

        if(!/[0-9]/.test(password)){
            return setErrorMessage("Password must contain atleast one number");
        }

        if(!/[!@#$%^&*()[\]\\?]/.test(password)) {
            return setErrorMessage("Password does not meet special characters requirements");
        }

        if(password.length < 8){
            return setErrorMessage("Password can't be shorter then 8 symbols");
        }

        if(password.length > 20) {
            return setErrorMessage("Password can't be longer then 20 symbols");
        }

        setErrorMessage("");
    }

    return (
        <div className="my-4">
            <input 
                type="password"
                className={`${errormessage !== "" ? "border-red-500" : ""}
                border-[1px] w-full rounded-md focus:shadow-md outline-none px-4 py-1`}
                placeholder="Password..."
                name="password"
                onBlur={IsPasswordValid}
                onChange = {(e) => onPasswordChange(e.target.value)}
                required
                />

                <span className="text-red-500 text-sm">{errormessage}</span>
        </div>
    );


}