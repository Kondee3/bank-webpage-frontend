import LoginForm from "./LoginForm";
import "./Navbar.css";
const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-dark fixed-top navbar-inverse navbar-fixed-top bg-dark py-0  navbar-expand-lg navbar-default">
        <div className="container-fluid">
          <a className="navbar-brand" role="button" href="#">
            Minecraft RP
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
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
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
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider"></hr>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <LoginForm></LoginForm>
          </div>
        </div>
      </nav>
      <div id="demo" className="carousel slide " data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="src\assets\1stPage.webp"
              alt="Los Angeles"
              className="d-block w-100"
            ></img>
            <div className="carousel-caption d-none d-md-block">
              <h1>Witaj</h1>
              <p>Zaloguj się, aby zarządzać swoimi oszczędnościami!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="src\assets\2ndPage.jpg"
              alt="Chicago"
              className="d-block w-100"
            ></img>
          </div>
          <div className="carousel-item">
            <img
              src="src\assets\1stPage.webp"
              alt="New York"
              className="d-block w-100"
            ></img>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
