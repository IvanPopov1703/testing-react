import {useState} from "react";
import MyModal from "../components/UI/MyModal/MyModal";
import FormLogin from "../components/forms/FormLogin";
import Header from "../components/Header";
import '../styles/App.css'

function Main() {

    const [authenticated, setAuthenticated] = useState(false);

    /**
     * Открыта/закрыта форма аутентификации
     */
    const [modalAuth, setModalAuth] = useState(false);


    const showFormLogin = () => setModalAuth(true);

    const signIn = (isResultAuth) => {
        console.log(isResultAuth);
        setModalAuth(false);
        setAuthenticated(true);
    }

    return (
        <div className="App">
            <MyModal visible={modalAuth} setVisible={setModalAuth}>
                <FormLogin auth={signIn}/>
            </MyModal>
            <Header authenticated={authenticated} modalAuth={showFormLogin}/>
        </div>
    );
}

export default Main;
