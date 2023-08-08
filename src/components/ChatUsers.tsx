import { useEffect, useState } from "react";
import Button from "./Button";


export const ChatUsers = () => {

interface ChatUser {
  id: number;
  user_name: string;
  email: string;
  date_of_birth: string;
  age: number;
}

  const [user, setUsers] = useState();
  const [error, setError] = useState({});
  useEffect(() => {
    fetch("http://127.0.0.1:8080/api/v1/user/get")
      .then((response) => response.json())
      .then((res) => setUsers(res as ChatUser))
      .catch((err) => setError(err));
  }, []);
  return (
    <Button
      onClick={() => {
        (user != null ? console.log(user.user_name) :
        console.log('Loading...'));
        (error != null ? console.warn(error) :
        console.log('Loading errors...'))
      }}
    >
      read
    </Button>
  );
};

export default ChatUsers;
