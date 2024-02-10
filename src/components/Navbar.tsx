import LoginForm from "./LoginForm.tsx";
import "./Navbar.css";
import { Link } from "react-router-dom";
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
                    <Link className="navbar-brand" role="button" to="/">
                        Bank
                    </Link>
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
                                <Link className="nav-link" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Link
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Użytkownik
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/register">
                                            Rejestracja
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"></hr>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/login">
                                            Logowanie
                                        </Link>
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
