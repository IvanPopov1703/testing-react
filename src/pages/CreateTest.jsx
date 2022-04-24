import React, {useState} from 'react';
import '../styles/FormCreateTestTitleStyle.css'
import '../styles/CreateTestStyle.css'
import FormCreateTestTitle from "../components/forms/FormCreateTestTitle";
import FormCreateQuestions from "../components/forms/FormCreateQuestions";
import {CSSTransition} from "react-transition-group";
import FormCreateTestResults from "../components/forms/FormCreateTestResults";

const CreateTest = () => {

    /**
     * Объект для создания нового теста
     */
    const [test, setTest] = useState({
        testId: -1,
        name: '',
        description: '',
        questions: []
    });

    /**
     * ID элементов для обращения к формам
     */
    const TEXT_QUESTION_ID = "text-question-id-";
    const LIST_ANSWERS_ID = "list-answers-id-";

    /**
     * Состояния для анимаций
     */
    const [testTitleShow, setTestTitleShow] = useState(true);
    const [questionsShow, setQuestionsShow] = useState(true);
    const [resultsShow, setResultsShow] = useState(true);

    /**
     * Состояние для хранения массива с ID созданных вопросов теста
     */
    const [arrQuestionsId, setArrQuestionsId] = useState([1]);

    const showFormTest = (formId) => {
        console.log('formId - ', formId);
        if (formId === 1) {
            setTestTitleShow(!testTitleShow);
            setQuestionsShow(true);
        } else {
            if (formId === 2) {
                setQuestionsShow(!questionsShow);
            }
        }
    }

    const printInfo = () => {
        console.log('\n');
        console.log('print info:');
        console.log('object test - ', test);
        console.log('arrQuestionsId - ', arrQuestionsId);
    }

    /**
     * Callback метод для добавления нового вопроса
     * @param questId id добавляемого вопроса
     */
    const addQuestionId = (questId) => {
        setArrQuestionsId([...arrQuestionsId, questId]);
    }

    /**
     * Callback метод для удаление вопроса
     * @param questId id удаляемого вопроса
     */
    const deleteQuestionId = (questId) => {
        setArrQuestionsId(arrQuestionsId.filter(item => item !== questId));
    }

    /**
     * Метод для создания нового теста
     */
    const saveTest = () => {
        console.log('Сохранение теста');
        const arrAllQuestionsAndAnswers = [];
        let questionsObj = {};

        for (let indexTextQuest = 0; indexTextQuest < arrQuestionsId.length; indexTextQuest++) {
            let index = arrQuestionsId[indexTextQuest];
            questionsObj = {
                questionId: -1,
                text: '',
                answers: []
            }

            questionsObj.text = document.getElementById(TEXT_QUESTION_ID + index).value;
            const inputs = document.getElementById(LIST_ANSWERS_ID + index).getElementsByTagName('input');
            for (let input = 0; input < inputs.length - 1; input++) {
                questionsObj.answers.push({answerId: -1, text: inputs[input].value, score: inputs[input + 1].value});
                input++;
            }
            arrAllQuestionsAndAnswers.push(questionsObj);
        }
        setTest({...test, name: "Тест 1", description: "Описание теста 1", questions: arrAllQuestionsAndAnswers});
    }

    return (
        <div className="content">
            <CSSTransition classNames='alert' in={testTitleShow} timeout={500} unmountOnExit>
                <FormCreateTestTitle/>
            </CSSTransition>
            <button
                className="btn btn-primary btn-creating-questions"
                onClick={() => showFormTest(1)}
            >
                Перейти к редактированию вопросов
            </button>
            <CSSTransition classNames='alert' in={questionsShow} timeout={500} unmountOnExit>
                <FormCreateQuestions deleteQuestionId={deleteQuestionId} addQuestionId={addQuestionId}/>
            </CSSTransition>
            <button className="btn btn-primary btn-crete-test-results">
                Перейти к редактированию результатов
            </button>
            <CSSTransition classNames='alert' in={resultsShow} timeout={500} unmountOnExit>
                <FormCreateTestResults/>
            </CSSTransition>
            <button onClick={() => saveTest()} className="btn btn-primary btn-save-test">
                Сохранить тест
            </button>
            <button onClick={() => printInfo()} className="btn btn-primary btn-save-test">
                printObj
            </button>
        </div>
    );
}

export default CreateTest;
