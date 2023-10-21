import Main from "./components/Main";
import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import RegisterPage from "./components/RegisterPage";
import PostPage from "./components/PostPage"; 
import PostCreate from "./components/PostCreate"; 
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/register" element={<RegisterPage />} />

                <Route path="/login" element={<LoginPage />} />
                <Route path="/user/dashboard" element={<Dashboard/>}/>
                <Route path="/user/post" element={<PostPage/>}/>
                <Route path="/user/post/create" element={<PostCreate/>}/>
            </Routes>
        </Router >
    );
}

export default App;
