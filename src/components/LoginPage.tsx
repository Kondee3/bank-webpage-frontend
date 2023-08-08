import Navbar from "./Navbar";
import LoginFormFullPage from "./LoginFormFullPage";
const LoginPage = () => {
    return (
        <>
            <Navbar withLogin={false} />
            <body>
                <LoginFormFullPage></LoginFormFullPage>
            </body>
        </>
    );
}

export default LoginPage;
