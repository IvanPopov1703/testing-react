import React from 'react';
import {Link} from "react-router-dom";

const MainContent = () => {
    return (
        <div className="container text-center">
            <p className="text_content_main_page">
                <span style={{color: 'blue'}}>MasterTest - платформа для создания тестов</span> <br/>
                Создавать тесты теперь легко и удобно!
            </p>
            <p style={{marginTop: 50}} className="text_content_main_page">
                Пройдите быструю регистрацию,<br/>
                чтобы иметь возможность создавать тесты
            </p>
            {/*<button style={{width: 250, marginTop: 50, fontSize: 20}} className="btn btn-primary">Регистрация</button><br/>*/}
            <Link to="/create-new-test">
                <button style={{width: 250, marginTop: 50, fontSize: 20}} className="btn btn-primary">Создать тест</button>
            </Link>
        </div>
    );
};

export default MainContent;
