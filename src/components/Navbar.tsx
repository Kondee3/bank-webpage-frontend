import LoginForm from "./LoginForm.tsx";
import "./Navbar.css";
interface Props {
    withLogin: boolean;
}
const Navbar = ({ withLogin }: Props) => {
    return (
           // fixed-top className makes navbar move 
        <header>
            <nav className="navbar nav-underline navbar-dark navbar-inverse 
            navbar-fixed-top bg-dark py-0 navbar-expand-md navbar-expand-lg
            navbar-expand-xl navbar-default">
                <div className="container-fluid align-items-center">
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
                        <ul className="navbar-nav me-auto mx-2 mb-2  mb-lg-0">
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
                        {withLogin && <LoginForm formClassname="d-flex justify-content-end my-2" 
                            inputClassname="form-control col-xs-2  w-40" buttonClassname="btn btn-success col-1" isNavbar={true}></LoginForm>}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
