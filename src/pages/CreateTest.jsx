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
        questions: [],
        results: []
    });

    /**
     * id для обращения к элементам вопросов и ответов
     */
    const TEXT_QUESTION_ID = "text-question-id-";
    const LIST_ANSWERS_ID = "list-answers-id-";

    /**
     * id для обращения к элементам заголовка теста
     */
    const CREATE_TEST_NAME_ID = "create-test-name-id";
    const CREATE_TEST_DESCRIPTION_ID = "create-test-description-id";

    /**
     * id для обращения к элементам результатов теста
     */
    const PANEL_RESULT_ID = "panel-result-id-";
    const FROM_RESULT_ID = "from-result-id-";
    const TO_RESULT_ID = "to-result-id-"
    const TITLE_RESULT_ID = "title-result-id-";
    const DESCRIPTION_RESULT_ID = "description-result-id-";

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

    /**
     * Состояние для хранения массива с ID созданных результатов теста
     */
    const [arrResultsId, setArrResultsId] = useState([1]);

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
     * Callback метод для добавления нового результата
     * @param resultId id добавляемого результата
     */
    const addResultId = (resultId) => {
        setArrResultsId([...arrResultsId, resultId]);
    }

    /**
     * Callback метод для удаление результата
     * @param resultId id удаляемого результата
     */
    const deleteResultId = (resultId) => {
        setArrResultsId(arrResultsId.filter(item => item !== resultId));
    }

    /**
     * Метод для создания нового теста
     */
    const saveTest = () => {
        console.log('Сохранение теста');
        const tmpArrAllQuestionsAndAnswers = [];
        const tmpArrResults = [];

        for (let indexQuestion = 0; indexQuestion < arrQuestionsId.length; indexQuestion++) {
            let index = arrQuestionsId[indexQuestion];
            let questionsObj = {
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
            tmpArrAllQuestionsAndAnswers.push(questionsObj);
        }

        for (let indexResult = 0; indexResult < arrResultsId.length; indexResult++) {
            let index = arrResultsId[indexResult];
            let resultObj = {
                resultId: -1,
                from: document.getElementById(FROM_RESULT_ID + index).value,
                to: document.getElementById(TO_RESULT_ID + index).value,
                resultTitle: document.getElementById(TITLE_RESULT_ID + index).value,
                resultDescription: document.getElementById(DESCRIPTION_RESULT_ID + index).value
            }
            tmpArrResults.push(resultObj);
        }

        setTest({
            ...test,
            name: document.getElementById(CREATE_TEST_NAME_ID).value,
            description: document.getElementById(CREATE_TEST_DESCRIPTION_ID).value,
            questions: tmpArrAllQuestionsAndAnswers,
            results: tmpArrResults
        });
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
                <FormCreateTestResults deleteResultId={deleteResultId} addResultId={addResultId}/>
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
