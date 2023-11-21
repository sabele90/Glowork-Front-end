import "./CountryFilter.css";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { getAllCountries } from "../../services/country";

export default function CountryFilter() {
  const [countries, setCountries] = useState([]);

  async function getCountries() {
    const allCountries = await getAllCountries();
    const countriesList = allCountries.map((country) => country.country);
    setCountries(countriesList);
  }

  useEffect(() => {
    getCountries();
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={countries}
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
