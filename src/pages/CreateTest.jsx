import React, {useState} from 'react';
import '../styles/FormCreateTestTitleStyle.css'
import '../styles/CreateTestStyle.css'
import FormCreateTestTitle from "../components/forms/FormCreateTestTitle";
import FormCreateQuestions from "../components/forms/FormCreateQuestions";
import {CSSTransition} from "react-transition-group";
import FormCreateTestResults from "../components/forms/FormCreateTestResults";
import save from "../service/TestService";
import TestService from "../service/TestService";

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

    const saveTest = () => {
        console.log('Сохраненине теста!');
        console.log('newTest - ', newTest);
        TestService.saveTest(newTest).then(r => {
            console.log('!!!result - ', r.data);
        }).catch(err => {
            if (err.response) {
                console.log("Некорректный запрос!");
                console.log('err - ', err.response);
            }
            console.log("Error - ");
        });
    }

    /*const newTest = {
        testId: -1,
        name: "",
        description: "",
        timeLimit: "",
        testTime: "",
        titleBeginningTest: "",
        descriptionBeginningTest: "",
        titleEndTest: "",
        descriptionEndTest: "",
        url: "",
        questions: {
            questionId: -1,
            text: ""
        }
    }*/
    const newTest = {
        testId: -1,
        name: "Name1",
        description: "Desc1",
        timeLimit: "Y",
        testTime: "20",
        titleBeginningTest: "Tit",
        descriptionBeginningTest: "Desc11",
        titleEndTest: "TitEnd",
        descriptionEndTest: "Desc end",
        url: "urlr",
        questions: [
            {
                questionId: -1,
                text: "Text1"
            }
        ]
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
            <button onClick={() => saveTest()} className="btn btn-primary btn-save-test">
                Сохранить тест
            </button>
        </div>
    );
};

export default CreateTest;
