import React from 'react';
import '../../styles/FormCreateTestTitleStyle.css'

const FormCreateTestTitle = () => {

    return (
        <div id="formCreateTestTitleId" className="form-create-test-title">
            <h2 className="textHead">Создание теста: название и описание</h2>
            <input
                type="text"
                className="form-control inp-create"
                placeholder="Название теста"
            />
            <textarea
                className="form-control"
                placeholder="Описание теста"
            />
        </div>
    );
};

export default FormCreateTestTitle;
