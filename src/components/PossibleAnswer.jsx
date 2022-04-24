import React from 'react';
import '../styles/PossibleAnswerStyle.css'

const PossibleAnswer = (props) => {

    const answerId = 'answer-id-' + props.numAnswer;
    const scoreId = 'score-id-' + props.numAnswer;

    const deleteAnswer = () => {
        props.deleteAnswer(props.answId);
    }

    return (
        <div className="panel-answer">
            <label htmlFor={answerId}>Вариант ответа:</label>
            <input
                className="form-control inpTextAnswer"
                placeholder="Тест ответа"
                id={answerId}
            />
            <label className="labelScore" htmlFor={scoreId}>Баллы:</label>
            <input
                className="form-control inpTextScore"
                type="number"
                id={scoreId}
            />
            <button
                className="btn btn-danger"
                onClick={() => deleteAnswer()}
            >
                X
            </button>
        </div>
    );
};

export default PossibleAnswer;
