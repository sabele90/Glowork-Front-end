
import { RouterProvider } from "react-router-dom";
import { useState } from "react";
import { LoginContext } from "./Context/Login";
import router from "./Router";

function App() {
  const [login, setLogin] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const obj = {
    login,
    setLogin,
    favorites,
    setFavorites,
    userId: localStorage.getItem("userId"),
  };

  return (
    <LoginContext.Provider value={obj}>
      <RouterProvider router={router} />
    </LoginContext.Provider>
  );
}

export default App;
