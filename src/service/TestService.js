import axios from "axios";

const URL_TEST = 'http://localhost:8080/api/v1/test';


class TestService {

    getTestAll() {
        return axios.get(URL_TEST)
    }

    getTestById(testId) {
        return axios.get(URL_TEST + '/' + testId);
    }

    saveTest(newTest) {
        return axios.post(URL_TEST, newTest);
    }

    deleteTestById(testId) {
        return axios.delete(URL_TEST + '/' + testId);
    }

}

export default new TestService();