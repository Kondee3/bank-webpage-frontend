import Navbar from "./Navbar"

const Dashboard = () => {
    document.title = "Bank Panel";
    return (
        <>

            <Navbar withLogin={false} />
            <div className="bg-dark w3-animate-top py-5" style={{ minHeight: "100vh" }}>
                <div className=" card-group container-xl py-5 container-fluid bg-dark ">
                    <div className="card mx-2 rounded-5">
                        <div className="row container-fluid text-center align-items-center">
                            <div className="col-md-6 ">
                                <img src="/src/assets/dollar.jpg" className="my-1 img-fluid "></img>
                            </div>
                            <div className="col-md-6 ">
                                <h3 className="">Stan Konta: 4000złx</h3>
                                <a className="btn btn-warning card-title pe-auto">Historia</a>
                            </div>
                        </div>
                    </div>

                    <div className="card mx-2 rounded-5">
                        <a href="post">
                            <div role="button" className="row container-fluid text-center align-items-center">
                                <div className="col-md-6">
                                    <img src="/src/assets/post.png" className="my-1 img-fluid "></img>
                                </div>
                                <div className="col-md-6 card-body">
                                    <h1 className="card-title pe-auto">Poczta</h1>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="card-group container-xl container-fluid">
                    <div className="card mx-2 rounded-5">
                        <a href="post">
                            <div role="button" className="row container-fluid text-center align-items-center">
                                <div className="col-md-6">
                                    <img src="/src/assets/myshop.jpg" className="my-1 img-fluid "></img>
                                </div>
                                <div className="col-md-6 card-body">
                                    <h1 className="card-title pe-auto">Twój Sklep</h1>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="card mx-2 rounded-5">
                        <a href="post">
                            <div role="button" className="row container-fluid text-center align-items-center">
                                <div className="col-md-6">
                                    <img src="/src/assets/sklep.png" className="my-1 img-fluid "></img>
                                </div>
                                <div className="col-md-6 card-body">
                                    <h1 className="card-title pe-auto">Sklepy</h1>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
