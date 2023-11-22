
import "./CountryList.css";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { getAllCountries } from "../../services/country";
import { useNavigate } from "react-router-dom";


export default function CountryList() {
const navigate = useNavigate();
const [countryList, setCountryList] = useState([])


  async function getCountries() {
    const allCountries = await getAllCountries();
    const countriesList = allCountries.map((country) => country.country);
    setCountryList(countriesList);
  }

  useEffect(() => {
    getCountries();
  },[]);

  const clickAction = (e) => {

  console.log(e.target)

    const countryId= e.target.innerText;
    console.log('COUNTRY NAME EN COUNTRY LIST JSX',countryId) // => COLOMBIA
    if (countryId) {  
      navigate(`/offer/country/${countryId}`);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Autocomplete
        
        onChange={(e) => clickAction(e)}
        disablePortal
       // id="combo-box-demo"
        options={countryList}
        sx={{
          margin: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          width: 300,
        }}
        renderInput={(params) => <TextField {...params} label="Country" />}
        
      />
    </div>
  );

 }