import React from 'react';
import '../styles/ResultStyle.css'

const ResultTest = (props) => {

    /**
     * Константы с id элементами формы
     * @type {string}
     */
    const PANEL_RESULT_ID = "panel-result-id-" + props.resultId;
    const FROM_RESULT_ID = "from-result-id-" + props.resultId;
    const TO_RESULT_ID = "to-result-id-" + props.resultId;
    const TITLE_RESULT_ID = "title-result-id-" + props.resultId;
    const DESCRIPTION_RESULT_ID = "description-result-id-" + props.resultId;

    /**
     * Метод для удаления результата
     */
    const deleteResult = () => {
        props.deleteResult(props.resultId);
    }

    return (
        <div id={PANEL_RESULT_ID} className="panel-result">
            <label htmlFor={FROM_RESULT_ID}>Результат для суммы баллов от</label>
            <input
                className="form-control inp-score-from"
                id={FROM_RESULT_ID}
                type="number"
            />
            <label htmlFor={TO_RESULT_ID}>до</label>
            <input
                className="form-control inp-score-from"
                type="number"
                id={TO_RESULT_ID}
            />
            <button
                className="btn btn-danger btn-delete-result"
                onClick={() => deleteResult()}
            >
                Удалить результат
            </button>
            <br/>
            <label htmlFor={TITLE_RESULT_ID}>Заголовок</label>
            <input
                className="form-control inp-title-results"
                id={TITLE_RESULT_ID}
            />
            <label htmlFor={DESCRIPTION_RESULT_ID}>
                Описание
            </label>
            <textarea
                className="form-control"
                placeholder="Описание"
                id={DESCRIPTION_RESULT_ID}
            />
        </div>
    );
};

export default ResultTest;
