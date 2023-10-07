import { useEffect, useState } from "react";
import Mail from "./Mail";
import Navbar from "./Navbar";
export interface MailData {
  sender_email: string;
  receiver_email: string;
  time_sent: string;
  title: string;
  content: string;
}
interface User {
  email_form: string;
  password_form: string;
}
const PostPage = () => {
  const [mails, setMails] = useState<MailData[]>();
  let user: User = {
    email_form: "jan@gmail.com",
    password_form: "xd",
  };
  useEffect(() => {
    fetch("http://127.0.0.1:8080/api/v1/user/getmails", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((res: MailData[]) => setMails(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Navbar withLogin={false} />

      <div
        className="bg-dark py-5"
        style={{ minHeight: "100vh" }}
      >
        <div className="container-xl my-3 container bg-dark ">
          <button className="btn btn-primary btn-lg">Stwórz</button>
        </div>
        <div className="accordion container-xl container bg-dark ">
          <div key="column-name" className="accordion-item col-md-12">
            <div
              className="container-fluid d-flex align-items-stretch border-dark accordion-header "
              role="button"
            >
              <h4 className="col">Email</h4>
              <h4 className="col">Title</h4>
              <h4 className="col">Date</h4>
            </div>
          </div>
          {mails != undefined && mails.length > 0 &&
            mails.map((item: MailData, index) => (
              <Mail
                id={index}
                item={item}
              />
            ))}
        </div>
      </div>
    </>
  );
};
export default PostPage;
