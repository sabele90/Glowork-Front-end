//app.jsx

import { RouterProvider } from "react-router-dom";

import "./App.css";
import router from "./Router";
import { useState } from "react";
import { LoginContext } from "./Context/Login";

function App() {
  const [login, setLogin] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const obj = {
    login,
    setLogin,
    favorites,
    setFavorites,
  };

  return (
    <LoginContext.Provider value={obj}>
      <RouterProvider router={router} />
    </LoginContext.Provider>
  );
}

export default App;
