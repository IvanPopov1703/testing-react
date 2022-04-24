import React, {useState} from 'react';
import PossibleAnswer from "./PossibleAnswer";
import '../styles/QuestionStyle.css'

const Question = (props) => {

    /**
     * Константы с id элементами формы
     * @type {string}
     */
    const listAnswersId = "list-answers-id-" + props.questionNum;
    const textQuestionId = "text-question-id-" + props.questionNum;
    const panelQuestionId = "panel-question-id-" + props.questionNum;

    /**
     * Состояние которое хранит существующие id ответов
     */
    const [possibleAnswer, setPossibleAnswer] = useState([1, 2]);

    /**
     * Состояние которое генерирует новый id ответа
     */
    const [numberAnswer, setNumberAnswer] = useState(3);

    /**
     * Метод для добавления ответа
     */
    const addAnswer = () => {
        setPossibleAnswer([...possibleAnswer, numberAnswer]);
        setNumberAnswer(numberAnswer + 1);
    }

    /**
     * Rollback метод для удаления вопроса
     * @param answerId id удаляемого вопроса
     */
    const deleteAnswer = (answerId) => {
        setPossibleAnswer(possibleAnswer.filter(item => item !== answerId));
    }

    /**
     * Метод для удаления вопроса
     */
    const deleteQuestion = () => {
        props.deleteQuestion(props.questionNum);
    }

    return (
        <div id={panelQuestionId} className="panel-question">
            <label className="form-label col-form-label-lg" htmlFor={textQuestionId}>
                Текст вопроса №{props.num}:
            </label>
            <button
                className="btn btn-danger btn-delete-question"
                onClick={() => deleteQuestion()}
            >
                Удалить вопрос
            </button>
            <textarea
                className="form-control"
                placeholder="Текст вопроса"
                id={textQuestionId}
            />
            <div id={listAnswersId} className="list-answers">
                {possibleAnswer.map((el) =>
                    <PossibleAnswer
                        deleteAnswer={deleteAnswer}
                        key={el}
                        answId={el}
                        numAnswer={el + '-quest-num-' + props.questionNum}
                    />
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

export default Question;
