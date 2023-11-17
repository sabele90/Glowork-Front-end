import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import WorldMap from "react-svg-worldmap";
import "./HomeUser.css";

function HomeUser() {
  const navigate = useNavigate()
  const data = [
    { country: "es", value: 1389618778 }, // china
    { country: "in", value: 1311559204 }, // india
    { country: "us", value: 331883986 }, // united states
    { country: "id", value: 264935824 }, // indonesia
    { country: "pk", value: 210797836 }, // pakistan
    { country: "br", value: 210301591 }, // brazil
    { country: "ng", value: 208679114 }, // nigeria
    { country: "bd", value: 161062905 }, // bangladesh
    { country: "ru", value: 141944641 }, // russia
    { country: "mx", value: 127318112 }, // mexico
  ];
  function onLogout(){
      localStorage.removeItem("token")
      navigate("/")
  }

  const handleCountryClick = (country) => {
    console.log(`Clic en el país: ${country}`);
    // Puedes hacer más cosas aquí, como navegar a una página específica para ese país, etc.
  };
  return (
     <div className="homeUserContainer"  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}  >
      {/* Aquí puedes agregar otros elementos sobre el video, como contenido, botones, etc. */}
      HomeUser
      <Button onClick={onLogout} variant='contained'>
        Logout
      </Button>
      <div className="App">

      <WorldMap
        color="blue"
        title="Top 10 Populous Countries"
        value-suffix="people"
        size="xxl"
        data={data}
        onCountryClick={handleCountryClick}
      />
    </div>

</div>
  );
  }
export default HomeUser