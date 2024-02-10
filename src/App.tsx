import Main from "./components/Main";
import LoginPage from "./components/LoginPage";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import RegisterPage from "./components/RegisterPage";
import PostPage from "./components/PostPage"; 
import PostCreate from "./components/PostCreate"; 
import Error from "./components/Error.tsx";
function App() {
    return (
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/register" element={<RegisterPage />} />

                <Route path="/login" element={<LoginPage />} />
                <Route path="/user/dashboard" element={<Dashboard/>}/>
                <Route path="/user/post" element={<PostPage/>}/>
                <Route path="/user/post/create" element={<PostCreate/>}/>
                <Route path="/user/error" element={<Error/>}/>
            </Routes>
    );
}

export default App;
