import LoginForm from "./LoginForm.tsx";
import "./Navbar.css";
interface Props {
    withLogin: boolean;
}
const Navbar = ({ withLogin }: Props) => {
    //navbar    fixed-top to make navbar move while scroll
    return (
        <header>
            <nav className="navbar navbar-dark navbar-inverse navbar-fixed-top bg-dark py-0  navbar-expand-lg navbar-default">
                <div className="container-fluid">
                    <a className="navbar-brand" role="button" href="/">
                        Bank
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Link
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Użytkownik
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="register">
                                            Rejestracja
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"></hr>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="login">
                                            Logowanie
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        {withLogin && <LoginForm></LoginForm>}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
