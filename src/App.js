import {BrowserRouter, Route} from "react-router-dom";
import Main from "./pages/Main";
import AppRouter from "./components/AppRouter";

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Main />
                <AppRouter />
            </div>
        </BrowserRouter>
    );
}

export default App;
