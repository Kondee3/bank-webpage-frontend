import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AxiosResponse } from "axios";
import Mail from "./Mail";
import Navbar from "./Navbar";
export interface MailData {
  senderEmail: string;
  receiverEmail: string;
  timeSent: Date;
  title: string;
  content: string;
}
interface User {
  email: string;
  password: string;
}
const PostPage = () => {
  useEffect(() => {
    async function fetchMailData() {
      let user: User = {
        email: "smyrakkonrad@gmail.com",
        password: "",
      };
      await axios.post("http://192.168.0.5:8080/api/v1/user/post/getmails", user)
        .then((response: AxiosResponse) => setMails(response.data))
        .catch((err) => console.log(err));
    }
    fetchMailData();
  }, []);

  const [mails, setMails] = useState<MailData[]>();
  const navigate = useNavigate();
  return (
    <>
      <Navbar withLogin={false} />

      <div
        className="bg-dark py-5 "
        style={{ minHeight: "100vh" }}
      >
        <div className="mx-4 py-4 bg-dark ">
          <button
            onClick={() => navigate("/user/post/create")}
            className="btn btn-primary btn-lg"
          >
            Stwórz
          </button>
          <button
            className="mx-2 btn btn-secondary btn-lg"
          >
           Odśwież 
          </button>
        </div>
        <table className=" mx-4 table table-hover   table-striped table-dark">
          <thead >
            <tr className="d-flex fs-3 me-5 mb-3 ">
              <th className="col">Email</th>
              <th className="col">Title</th>
              <th className="col ">Date</th>
            </tr>
          </thead>
          <tbody className="fs-5 ">
            {mails != undefined && mails.length > 0 &&
              mails.map((item: MailData, index) => (
                <Mail
                  mailKey={index}
                  item={item}
                />
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default PostPage;
