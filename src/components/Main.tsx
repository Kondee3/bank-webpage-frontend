import "./Main.css";
import Navbar from "./Navbar";
const Main = () => {
    return (
        <>
            <Navbar withLogin={true}></Navbar>
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
                            src="src/assets/bank1.avif"
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
                            src="src/assets/bank2.jpg"
                            alt="Chicago"
                            className="d-block w-100"
                        ></img>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="src/assets/bank3.jpeg"
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
        </>
    );
};

export default Main;
