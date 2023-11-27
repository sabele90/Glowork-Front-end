import "./HomeUser.css";
import Map from "../../components/Map/Map";
import CountryList from "../../components/CountryList/CountryList";
import LetterTransition from "../../components/LetterTransition/LetterTransition";
import { LoginContext } from "../../Context/Login";
import { useContext } from "react";

function HomeUser() {
  const { favorites } = useContext(LoginContext);
  //peticion al back todos los favoritos
  //guardar en contexto
  //traerme el contexto del login

  return (
    <>
      <header className="headerOffersHomeUser">
        <img
          className="photoHeaderUser"
          src="/src/assets/images/headerHomeUser.png"
        ></img>

        <div className="letterHomeUser ">
          <LetterTransition />
        </div>

        <CountryList />
      </header>
      <Map />;
    </>
  );
}
export default HomeUser;
