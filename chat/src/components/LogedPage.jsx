import SubmitBtn from "./SubmitBtn";

export default function LoggedPage(){
    const username = "admin";
    const password = "Adminas2"

    return (
        <div>
            <h2>Sveiki prisijunge {username} !</h2>

            jusu duomenys: 
            username: {username}
            <SubmitBtn>Atsijungti</SubmitBtn>
        </div>
    )
}