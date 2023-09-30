import Main from "./components/Main";
import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import RegisterPage from "./components/RegisterPage";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/register" element={<RegisterPage />} />

                <Route path="/login" element={<LoginPage />} />
                <Route path="/user/dashboard" element={<Dashboard/>}/>

            </Routes>
        </Router >
    );
}

export default App;
