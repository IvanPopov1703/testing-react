import React, {useState} from 'react';
import '../../styles/FormCreateQuestionsStyle.css'
import PossibleAnswer from "../PossibleAnswer";
import Question from "../Question";

const FormCreateQuestions = (props) => {

    const [possibleAnswer, setPossibleAnswer] = useState([1, 2]);
    const [numberAnswer, setNumberAnswer] = useState(3);

    const addAnswer = () => {
        setPossibleAnswer([...possibleAnswer, numberAnswer]);
        setNumberAnswer(numberAnswer + 1);
    }

    return (
        <div id="formCreateQuestionsId" className="form-create-questions">
            <h2 className="textHead">Создание теста: вопросы и баллы за них</h2>
            <Question num={1}/>
            <div id="listAnswersId" className="list-answers">
                {possibleAnswer.map((el) =>
                    <PossibleAnswer key={el} numAnswer={el}/>
                )}
            </div>
            <button
                className="btn btn-primary btn-add-answer"
                onClick={() => addAnswer()}
            >
                Добавить ответ
            </button>
        </div>
    );
};

export default FormCreateQuestions;
