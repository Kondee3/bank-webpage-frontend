import { MailData } from "./PostPage";
import { useState } from "react";
import Navbar from "./Navbar";

const PostCreate = () => {
  const [input, setInput] = useState({
    receiver_email: "",
    title: "",
    content: "",
  });

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
            onClick={sendMail((event) => {
              const mail: MailData = {
                                senderEmail: "twójstary@gmail.com",
    receiverEmail: "jan@gmail.com",
    timeSent: Date(), 
    title: "xd1",
    content: "1"
                            };

              let response = postmethod(event, user)
                .then((res: string) => setResponse(res))
                .catch((err) => console.log(err));
              if (response.ok) {
                console.log("ok");
              }
            })}
            className="btn btn-primary btn-lg"
          >
            Stwórz
          </button>
        </div>
      </div>
    </>
  );
};
async function sendMail(
  event: React.FormEvent<HTMLFormElement>,
  mail: MailData,
) {
  event.preventDefault();
  await fetch("http://127.0.0.1:8080/api/v1/user/post/sendmail", {
    method: "POST",
    body: JSON.stringify(mail),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
}
export default PostCreate;
