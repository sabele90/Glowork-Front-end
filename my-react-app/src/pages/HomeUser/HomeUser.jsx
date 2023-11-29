import "./HomeUser.css";
import Map from "../../components/Map/Map";


function HomeUser() {
  return (
    <>
      <div className="filterCountry"></div>

      <div className="bodyHomeUser">
        <img
          className="pointerMap"
          src="/src/assets/images/pointer.png"
          width="50"
        ></img>
        <img
          className="pointerMap2"
          src="/src/assets/images/pointer.png"
          width="40"
        ></img>
        <img
          className="pointerMap3"
          src="/src/assets/images/pointer.png"
          width="30"
        ></img>
        <img
          className="pointerMap4"
          src="/src/assets/images/pointer.png"
          width="40"
        ></img>
              <img
          className="pointerMap5"
          src="/src/assets/images/pointer.png"
          width="40"
        ></img>
                  <img
          className="pointerMap6"
          src="/src/assets/images/pointer.png"
          width="40"
        ></img>
                    <img
          className="pointerMap7"
          src="/src/assets/images/pointer.png"
          width="30"
        ></img>
                    <img
          className="photoHeaderUser"
          src="/src/assets/images/headerHomeUser.png"
          width="90"
        ></img>

        <Map />
        <div className="containerRight"></div>
        <div className="containerLeft"></div>
      </div>
    </>
  );
}
export default HomeUser;
