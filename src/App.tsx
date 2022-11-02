import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

const data = {
  url: process.env.REACT_APP_URL as string,
  userName: process.env.REACT_APP_USER_NAME as string,
  password: process.env.REACT_APP_PASSWORD as string,
  ttUrl: process.env.REACT_APP_TT_URL as string,
};

function App() {
  const [token, setToken] = useState("");
  useEffect(() => {
    const { url, userName, password } = data;
    axios
      .post(url, { user_name: userName, password: password })
      .then((response) => setToken(response.data.access))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (token !== "") {
      const { ttUrl } = data;
      axios
        .get(ttUrl, {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));
    }
  }, [token]);

  return (
    <div className="App">
      <h2>Ale masz esse byczku</h2>
    </div>
  );
}

export default App;
