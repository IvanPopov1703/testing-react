import React, {useState} from 'react';
import '../styles/FormCreateTestTitleStyle.css'
import '../styles/CreateTestStyle.css'
import FormCreateTestTitle from "../components/forms/FormCreateTestTitle";
import FormCreateQuestions from "../components/forms/FormCreateQuestions";
import {CSSTransition} from "react-transition-group";
import FormCreateTestResults from "../components/forms/FormCreateTestResults";

const CreateTest = () => {

    const [testTitleShow, setTestTitleShow] = useState(true);
    const [questionsShow, setQuestionsShow] = useState(true);
    const [resultsShow, setResultsShow] = useState(true);

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
                <FormCreateQuestions/>
            </CSSTransition>
            <button className="btn btn-primary btn-crete-test-results">
                Перейти к редактированию результатов
            </button>
            <CSSTransition classNames='alert' in={resultsShow} timeout={500} unmountOnExit>
                <FormCreateTestResults/>
            </CSSTransition>
            <button className="btn btn-primary btn-save-test">
                Сохранить тест
            </button>
        </div>
    );
};

export default CreateTest;
