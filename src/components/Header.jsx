import React from 'react';
import {Link} from "react-router-dom";
import '../styles/HeaderStyle.css';

const Header = (props) => {
    let isAuth = props.authenticated;
    let textBtnSingId = isAuth === false ? 'Вход' : 'Выход';

    const clickBtnSingIn = () => {

    }

    return (
        <div style={{maxWidth: '90%'}} className="container">
            <header
                className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom"
            >
                <h1 className="logo"><Link to="/main">✔ MasterTest</Link></h1>
                {isAuth
                    ?
                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li className="nav-link px-2 link-secondary fs-4"><Link to="/main">Главная</Link></li>
                        <li className="nav-link px-2 link-secondary fs-4"><Link to="/my-test-page">Мои тесты</Link></li>
                        <li className="nav-link px-2 link-secondary fs-4"><Link to="/error">Личный кабинет</Link></li>
                    </ul>
                    : ""
                }

                <div className="col-md-auto text-end">
                    {!isAuth
                        ?
                        < button
                            style={{fontSize: 20}}
                            type="button"
                            className="btn btn-outline-primary me-3"
                            onClick={props.modalRegistration}
                        >Регистрация</button>
                        :
                        ""
                    }
                    <button style={{fontSize: 20}}
                            type="button"
                            className="btn btn-primary w-auto"
                            onClick={props.modalAuth}
                    >{textBtnSingId}</button>
                </div>
            </header>
        </div>
    );
};

export default Header;
