import React from 'react';
import '../../styles/FormCreateResultsStyle.css'

const FormCreateTestResults = (props) => {
    return (
        <div id="formCreateTestResultsId" className="form-create-test-results">
            <h2 className="textHead">Создание теста: результаты</h2>
            <label htmlFor={props.id}>Результат для суммы баллов от</label>
            <input
                className="form-control inpScoreFrom"
                id={props.id}
                type="number"
            />
            <label htmlFor={props.id}>до</label>
            <input
                className="form-control inpScoreFrom"
                type="number"
                id={props.id}
            /><br/>
            <label htmlFor={props.id}>Заголовок</label>
            <input
                className="form-control inpTitleResults"
                id={props.id}
            />
            <label htmlFor="idTextQuestion">
                Описание
            </label>
            <textarea
                className="form-control"
                placeholder="Описание"
                id="idTextQuestion"
            />
        </div>
    );
};

export default FormCreateTestResults;
