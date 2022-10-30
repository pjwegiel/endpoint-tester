import "./App.css";
import axios from "axios";
import { useEffect } from "react";

const data = {
  url: process.env.REACT_APP_URL as string,
  userName: process.env.REACT_APP_USER_NAME as string,
  password: process.env.REACT_APP_PASSWORD as string,
};

function App() {
  useEffect(() => {
    const { url, userName, password } = data;
    axios
      .post(url, { user_name: userName, password: password })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <h2>Ale masz esse byczku</h2>
    </div>
  );
}

export default App;
