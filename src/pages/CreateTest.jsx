import React from 'react';
import '../styles/CreateTest.css'

const CreateTest = () => {
    return (
        <div>
            <h2 className="textHead">Создание теста: название и описание</h2>
            <div className="form-create-test">
                <form action="/pp" method="post">
                    <input
                        type="text"
                        className="form-control inp-create"
                        placeholder="Название теста"
                    />
                    <textarea
                        className="form-control"
                        placeholder="Описание теста"
                    />
                    <button type="submit" className="btn btn-primary btn-creating-questions">
                        Перейти к созданию вопросов
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateTest;
