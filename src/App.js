import {BrowserRouter, Route} from "react-router-dom";
import Main from "./pages/Main";
import AppRouter from "./components/AppRouter";
import '../src/styles/App.css';

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Main />
                <div className="content_main">
                    <AppRouter />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
