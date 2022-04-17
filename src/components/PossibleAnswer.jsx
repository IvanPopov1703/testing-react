import React from 'react';
import '../styles/PossibleAnswerStyle.css'

const PossibleAnswer = (props) => {
    return (
        <div>
            <label htmlFor={props.id}>Вариант ответа:</label>
            <input
                className="form-control inpTextAnswer"
                placeholder="Тест ответа"
                id={props.id}
            />
            <label className="labelScore" htmlFor={props.id}>Баллы:</label>
            <input
                className="form-control inpTextScore"
                type="number"
                id={props.id}
            />
        </div>
    );
};

export default PossibleAnswer;
