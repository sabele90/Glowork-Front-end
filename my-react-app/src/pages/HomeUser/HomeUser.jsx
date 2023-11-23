import "./HomeUser.css";
import Map from "../../components/Map/Map";
import CountryList from "../../components/CountryList/CountryList";
import ReactPlayer from "react-player";
import LetterTransition from "../../components/LetterTransition/LetterTransition";

function HomeUser() {
  return (
    <>
      
      <header className="headerOffersHomeUser">

 
      <img
          className="photoHeaderUser"
          src="/src/assets/images/headerHomeUser.png"
        ></img>
        
         <div className="letterHomeUser ">
         <LetterTransition/>
         </div>
        

        <CountryList />
      </header>
      <Map />;
   
    </>
  );
}
export default HomeUser;
