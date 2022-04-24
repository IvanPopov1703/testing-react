import React, {useState} from 'react';
import '../../styles/FormCreateResultsStyle.css'
import ResultTest from "../ResultTest";

const FormCreateTestResults = (props) => {

    /**
     * Состояние которое хранит существующие id результата
     */
    const [results, setResults] = useState([1]);

    /**
     * Состояние которое генерирует id нового результата
     */
    const [numberResult, setNumberResult] = useState(2);

    /**
     * Метод для добавления результата
     */
    const addResult = () => {
        setResults([...results, numberResult]);
        props.addResultId(numberResult);
        setNumberResult(numberResult + 1);
    }

    /**
     * Метод для удаления результата
     * @param resultId id удаляемого результата
     */
    const deleteResult = (resultId) => {
        setResults(results.filter(item => item !== resultId));
        props.deleteResultId(resultId);
    }


    return (
        <div id="formCreateTestResultsId" className="form-create-test-results">
            <h2 className="textHead">Создание теста: результаты</h2>
            {results.map(el =>
                <ResultTest key={el} deleteResult={deleteResult} resultId={el} />
            )}
            <button
                className="btn btn-primary btn-add-result"
                onClick={() => addResult()}
            >
                Добавить результат
            </button>
        </div>
    );
};

export default FormCreateTestResults;
