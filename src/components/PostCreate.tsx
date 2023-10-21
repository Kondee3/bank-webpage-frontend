import { useEffect} from "react";
import { MailData } from "./PostPage";
import Navbar from "./Navbar";
const PostCreate = () => {
  useEffect(() => {
    fetch("http://127.0.0.1:8080/api/v1/user/sendmail", {
      method: "POST",
      body: JSON.stringify(mail),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Navbar withLogin={false} />

      <div
        className="bg-dark py-5"
        style={{ minHeight: "100vh" }}
      >
        <div className="container-xl my-5 container bg-dark ">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            >
            </input>
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            >
            </input>
            <label htmlFor="floatingInput">Title</label>
          </div>
          <div className="form-floating mb-3 ">
            <textarea className="form-control" style={{height:"100px"}}></textarea> 
            <label htmlFor="floatingInput">Text</label>
          </div>
          <button onClick={sendMail} className="btn btn-primary btn-lg">
            Stwórz
          </button>
        </div>
      </div>
    </>
  );
};
async function sendMail(mail: MailData){
  let mail: MailData = {
    sender_email: "jan@gmail.com",
    receiver_email: "xd",
    time_sent: new Date(),
    title: "",
    content: ""
  };
    await fetch('http://127.0.0.1:8080/api/v1/user/post/sendmail', {
        method: 'POST',
        body: JSON.stringify(mail),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .catch((err) => console.log(err));

}
export default PostCreate;
