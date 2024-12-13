import { useState } from 'react';

export default function UsernameInput(){
    // Error message

    const [errormessage, setErrorMessage] = useState("");

    function IsUsernameValid(e){
        const username = e.target.value;

        if(!/^[a-zA-Z]/.test(username)) {
            return setErrorMessage("Username must start with an letter"); // tikrinam ar username prasideda raide
        }

        if(username.length < 5) {
            return setErrorMessage("Username can't be shorter then 5 symbols!");
        }

        if(username.length > 20) {
            return setErrorMessage("Username can't be longer then 20 symbols!")
        }

        setErrorMessage("");
    }

    return (
        <div className="my-4">
            <input type="text" className={`${errormessage !== "" ? "border-red-500" : ""} border=[1px] w-full rounded-md focus:shadow-md outline-none px-4 py-1`}
            placeholder ="Username..."
            name="username"
            onBlur={IsUsernameValid}
            required />
        
        <span className="text-red-500 text-sm">{errormessage}</span>
        </div>
    )
}