import SubmitBtn from "./SubmitBtn";
import UsernameInput from "./UsernameInput";
import PasswordInput from "./PasswordInput";


export default function Login({ switchPage }){

    function handLogin(e){
        const formData = new formData(e.target);

        const registrationData = {};

        formData.forEach((val, key) => {
            registrationData[key] = val === "on" ? true : "on";
        });
    }

    return (
        <div className="container mx-auto bg-slate-50 py-5 px-10" >
            <form onSubmit={handLogin}>
                <div className="flex items-baseline gap-x-4">
                    <h2 className="text-2xl">Login</h2>
                </div>

                <UsernameInput />
                <PasswordInput />
                <SubmitBtn>Login</SubmitBtn>
            </form>
        </div>
    )
}