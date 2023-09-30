import Navbar from "./Navbar";
const Main = () => {
    return (
        <>
            <Navbar withLogin={true}></Navbar>
            <div className="bg-dark w3-animate-top " style={{height:"100vh"}}>
                <div className="text-center card-group container-xl container-fluid">
                    <div className="card mx-2 rounded-bottom-5 rounded-top-0 d-flex align-items-stretch">
                        <img src="src/assets/bank1.avif" className="card-img-top h-100" alt="..." />
                        <div className="card-body" >
                            <h5 className="card-title">Odwiedzasz nas ponownie?</h5>
                            <p className="card-text">Zaloguj się, aby zarządzać swoimi oszczędnościami!</p>
                            <a href="login" className="btn btn-primary">Logowanie</a>
                        </div>
                    </div>

                    <div className="card  mx-2 rounded-bottom-5 rounded-top-0 d-flex align-items-stretch">
                        <img src="src/assets/bank2.jpg" className="card-img-top h-100 " alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Jesteś tu pierwszy raz?</h5>
                            <p className="card-text">Zarejestruj się, aby poznać naszą ofertę!</p>
                            <a href="register" className="btn btn-primary">Rejestracja</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
