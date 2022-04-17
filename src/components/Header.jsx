import React from 'react';
import {Link} from "react-router-dom";

const Header = (props) => {

    let countTests = 2;

    return (
        <header>
            <h1 className="logo"><Link to="/main">✔ MasterTest</Link></h1>
            <div className="reg_login_div">
                {!props.authenticated
                    ? <h2 className="reg_and_surname">Регистрация</h2>
                    : <h2 className="reg_and_surname">Мои тесты ({countTests})</h2>
                }
                {!props.authenticated
                    ? <h2 onClick={props.modalAuth} className="login">Вход</h2>
                    : <h2 onClick={props.modalAuth} className="login">Выход</h2>
                }
            </div>
        </header>
    );
};

export default Header;
