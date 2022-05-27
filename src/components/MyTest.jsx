import React from 'react';
import '../styles/MyTest.css'

const MyTest = (props) => {
    return (
        <div className="my-test">
            <table width="100%">
                <tbody>
                <tr>
                    <td colSpan={6}>
                        <h2 id="nameTestId">
                            <a href="">
                                Программирование
                            </a>
                        </h2>
                    </td>
                    <td align="right"/>
                </tr>
                <tr>
                    <td>
                    </td>
                </tr>
                <tr style={{fontSize: "18px"}}>
                    <td>
                        <a id="numberQuestions" className="grayLink" href="">
                            2 вопроса
                        </a>
                    </td>
                    <td>
                        <a id="numberReviews" className="grayLink" href="">
                            0 отзывов
                        </a>
                    </td>
                    <td>
                        <span style={{color: "#BBBBBBFF"}}>Пройден 15 раз</span>
                    </td>
                    <td>
                        <a className="orangeLink">
                            Редактировать
                        </a>
                    </td>
                    <td>
                        <a href="" className="orangeLink">
                            Удалить
                        </a>
                    </td>
                    <td>
                        <a href="" className="orangeLink">
                            Добавить участника
                        </a>
                    </td>
                </tr>
                </tbody>
            </table>
            <div style={{height: "10px"}}/>
        </div>
    );
};

export default MyTest;
