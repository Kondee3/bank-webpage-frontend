import { MailData } from "./PostPage";
import { useState } from "react";
import Navbar from "./Navbar";
import axios, { HttpStatusCode } from "axios";
import { AxiosResponse } from "axios";

const PostCreate = () => {
  const [input, setInput] = useState({
    receiver_email: "",
    title: "",
    content: "",
  });

    const[response, setResponse] = useState<HttpStatusCode>();
  const [error, setError] = useState({
    receiver_email: "",
    title: "",
    content: "",
  });

  const onInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };
  const validateInput = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "receiver_email":
          if (!value) {
            stateObj[name] = "Please enter the receiver email.";
          }
          break;

        case "title":
          if (!value) {
            stateObj[name] = "Please enter title.";
          }
          break;
        case "content":
          if (!value) {
            stateObj[name] = "Please enter content.";
          }
          break;
        default:
          break;
      }
      return stateObj;
    });
  };
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
              onChange={onInputChange}
              onBlur={validateInput}
              name="receiver_email"
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
              onChange={onInputChange}
              onBlur={validateInput}
              name="title"
            >
            </input>
            <label htmlFor="floatingInput">Title</label>
          </div>
          <div className="form-floating mb-3 ">
            <textarea
              className="form-control"
              onChange={onInputChange}
              onBlur={validateInput}
              style={{ height: "100px" }}
              name="content"
            >
            </textarea>

            <label htmlFor="floatingInput">Text</label>
          </div>
          <button
            onClick={(event) => {
              const mail: MailData = {
                senderEmail: "smyrakkonrad@gmail.com",
                receiverEmail: input.receiver_email,
                timeSent: new Date(),
                title: input.title,
                content: input.content,
              };
              sendMail(event, mail)
                .then((res: HttpStatusCode) => setResponse(res))
                .catch((err) => console.log(err));

            }}
            className="btn btn-primary btn-lg"
          >
            Stwórz
          </button>
          {response ? response == HttpStatusCode.Ok ?<label className="mx-2 text-success">Mail Sent</label> : <label className="text-danger"> Failed</label> : '' }
        </div>
      </div>
    </>
  );
};
async function sendMail(
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  mail: MailData,
): Promise<HttpStatusCode> {
  event.preventDefault();
  let res = 0;
  await axios.post("http://192.168.0.5:8080/api/v1/user/post/sendmail", mail)
    .then((response: AxiosResponse) => res = response.status)
    .catch((err) => console.log(err));
  return res;
}
export default PostCreate;
