// import Alert from "./components/Alert";
// import Button from "./components/Button";
// import ChatUsers from "./components/ChatUsers";
// import ListGroup from "./components/ListGroup";
// import { useState } from "react";
import ChatUsers from "./components/ChatUsers";
import Navbar from "./components/Navbar";
function App() {
  // const items = ["New York", "San Fancisco", "Tokyo", "London", "Paris"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  // const [alertVisible, setAlertVisibility] = useState(false);
  // const [userVisible, setUserVisibility] = useState(false);

  return (
    <>
      <Navbar></Navbar>
      <div>
        {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Warning</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button> */}

        {/* <Button onClick={() => setUserVisibility(true)}>Show Users</Button>
        {userVisible && <ChatUsers></ChatUsers>} */}
      </div>

      {/* <ChatUsers></ChatUsers> */}
    </>
  );
}

export default App;
