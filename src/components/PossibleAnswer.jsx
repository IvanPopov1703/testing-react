import React from 'react';
import '../styles/PossibleAnswerStyle.css'

const PossibleAnswer = (props) => {

    const answerId = "answer-id-" + props.numAnswer;
    const scoreId = "score-id-" + props.numAnswer;

    return (
        <div>
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
        </div>
    );
};

export default PossibleAnswer;
