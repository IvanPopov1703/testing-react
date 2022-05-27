import React from 'react';
import '../styles/MyTestPage.css'
import MyTest from "../components/MyTest";

const MyTestPage = (props) => {
    return (
        <div className="my-test-page">
            <button className="btn btn-primary new-test">Создать новый тест</button>
            <div className="content">
                <MyTest />
                <MyTest />
                <MyTest />
                <MyTest />
            </div>
        </div>
    );
};

export default MyTestPage;
