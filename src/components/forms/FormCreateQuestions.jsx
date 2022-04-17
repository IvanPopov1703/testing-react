import React from 'react';
import '../../styles/FormCreateQuestionsStyle.css'
import PossibleAnswer from "../PossibleAnswer";
import Question from "../Question";

const FormCreateQuestions = (props) => {
    return (
        <div id="formCreateQuestionsId" className="form-create-questions">
            <h2 className="textHead">Создание теста: вопросы и баллы за них</h2>
            <Question num={1}/>
            <PossibleAnswer id={1}/>
            <PossibleAnswer id={2}/>
        </div>
    );
};

export default FormCreateQuestions;
