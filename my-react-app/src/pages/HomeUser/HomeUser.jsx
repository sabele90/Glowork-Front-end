import "./HomeUser.css";
import Map from "../../components/Map/Map";
import CountryList from "../../components/CountryList/CountryList";
import ReactPlayer from "react-player";
import LetterTransition from "../../components/LetterTransition/LetterTransition";
import { LoginContext } from "../../Context/Login";

function HomeUser() {
  const { favorites } = useLoginContext();
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
