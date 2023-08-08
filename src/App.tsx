import Button from "./components/Button";
import Main from "./components/Main";
import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/register" element={<Button onClick={() =>{
                    console.log("register")}}>register</Button>}/>
                <Route path="/login" element={<LoginPage/>}/>
                    
        </Routes>
    </Router >
  );
}

export default App;
