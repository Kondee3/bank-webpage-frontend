import { useEffect, useState } from "react";
import Button from "./Button";

export interface ChatUser {
  id: number;
  user_name: string;
  email: string;
  date_of_birth: string;
  age: number;
}

export const ChatUsers = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    fetch("http://localhost:8000/api/v1/user/get")
      .then((response) => response.json())
      .then((res) => setUser(res))
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <Button
      onClick={() => {
        user !== null && console.log(user);
      }}
    >
      read
    </Button>
  );
};

export default ChatUsers;
