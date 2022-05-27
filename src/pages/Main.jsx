import {useState} from "react";
import MyModal from "../components/UI/MyModal/MyModal";
import FormLogin from "../components/forms/FormLogin";
import Header from "../components/Header";
import '../styles/App.css'
import RegistrationForm from "../components/forms/RegistrationForm";
import ModalRegistration from "../components/UI/MyModal/ModalRegistration";

function Main() {

    const [authenticated, setAuthenticated] = useState(false);

    /**
     * Открыта/закрыта форма аутентификации
     */
    const [modalAuth, setModalAuth] = useState(false);

    /**
     * Открыта/закрыта форма регистрации
     */
    const [modalRegistration, setModalRegistration] = useState(false);


    const showFormLogin = () => setModalAuth(true);
    const showFormRegistration = () => setModalRegistration(true);

    const signIn = (isResultAuth) => {
        console.log('isResultAuth - ', isResultAuth);
        setModalAuth(false);
        setAuthenticated(true);
    }

    const registrationForm = (isResultRegistration) => {
        console.log('isResultRegistration - ', isResultRegistration);
        setModalRegistration(false);
    }

    return (
        <div className="App">
            <MyModal visible={modalAuth} setVisible={setModalAuth}>
                <FormLogin auth={signIn}/>
            </MyModal>
            <ModalRegistration visible={modalRegistration} setVisible={setModalRegistration}>
                <RegistrationForm registration={registrationForm}/>
            </ModalRegistration>
            <Header authenticated={authenticated} modalRegistration={showFormRegistration} modalAuth={showFormLogin}/>
        </div>
    );
}

export default Main;
