import React, {useState} from 'react';
import "../styles/FormLogin.css"
import AuthenticationService from "../API/AuthenticationService";

const FormLogin = (props) => {

    const [auth, setAuth] = useState({login: '', password: ''});

    /**
     * Метод отправки данных для аутентификации пользователя
     * @param e
     */
    const signIn = (e) => {
        e.preventDefault();
        if (AuthenticationService.authUser(auth) === true) {
            props.auth("Успешно!")
        } else {
            alert("Неверный логин или пароль!");
        }
    }

    return (
        <div>
            <h3 className="textLogin">Вход на сайт</h3>
            <form>
                <div className="row mb-3">
                    <label htmlFor="inputLoginId" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-12">
                        <input
                            placeholder="Логин"
                            type="text"
                            className="form-control"
                            id="inputLoginId"
                            onChange={e => setAuth({...auth, login: e.target.value})}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPasswordId" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-12">
                        <input
                            placeholder="Пароль"
                            type="password"
                            className="form-control"
                            id="inputPasswordId"
                            onChange={e => setAuth({...auth, password: e.target.value})}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-0">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="rememberMeId"/>
                            <label className="form-check-label" htmlFor="rememberMeId">
                                Запомнить меня
                            </label>
                        </div>
                    </div>
                </div>
                <button
                    id="btnSignInId"
                    type="submit"
                    className="btn btn-primary"
                    onClick={signIn}
                >
                    Войти
                </button>
            </form>
        </div>
    );
};

export default FormLogin;