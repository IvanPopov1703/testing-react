import React, {useState} from 'react';
import '../../styles/FormCreateQuestionsStyle.css'
import Question from "../Question";

const FormCreateQuestions = (props) => {

    /**
     * Состояние которое хранит существующие id вопросов
     */
    const [questions, setQuestions] = useState([1]);

    /**
     * Состояние которое генерирует id нового вопроса
     */
    const [numberQuestion, setNumberQuestion] = useState(2);

    /**
     * Метод для добавления вопроса
     */
    const addQuestion = () => {
        setQuestions([...questions, numberQuestion]);
        props.addQuestionId(numberQuestion);
        setNumberQuestion(numberQuestion + 1);
    }

    /**
     * Метод для удаления вопроса
     * @param questionId id удаляемого вопроса
     */
    const deleteQuestion = (questionId) => {
        setQuestions(questions.filter(item => item !== questionId));
        props.deleteQuestionId(questionId);
    }

    return (
        <div id="formCreateQuestionsId" className="form-create-questions">
            <h2 className="textHead">Создание теста: вопросы и баллы за них</h2>
            {questions.map((el, num= 0) =>
                <Question key={el} deleteQuestion={deleteQuestion} questionNum={el} num={num + 1}  />
            )}
            <button
                className="btn btn-primary btn-add-question"
                onClick={() => addQuestion()}
            >
                Добавить вопрос
            </button>
        </div>
    );
};

export default FormCreateQuestions;
