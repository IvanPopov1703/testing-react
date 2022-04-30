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
                id="create-test-name-id"
            />
            <textarea
                className="form-control"
                placeholder="Описание теста"
                id="create-test-description-id"
            />
        </div>
    );
};

export default FormCreateTestTitle;
