import "./HomeUser.css";
import Map from "../../components/Map/Map";
import CountryFilter from "../../components/CountryFilter/CountryFilter";

function HomeUser() {
  return (
    <>
      <CountryFilter />
      <Map />;
    </>
  );
}
export default HomeUser;
