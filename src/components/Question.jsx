import React from 'react';

const Question = (props) => {
    return (
        <div>
            <label className="form-label col-form-label-lg" htmlFor="idTextQuestion">
                Текст вопроса №{props.num}:
            </label>
            <textarea
                className="form-control"
                placeholder="Текст вопроса"
                id="idTextQuestion"
            />
        </div>
    );
};

export default Question;
