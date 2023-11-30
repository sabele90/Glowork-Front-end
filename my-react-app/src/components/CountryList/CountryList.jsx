import "./CountryList.css";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { getAllCountries } from "../../services/country";
import { useNavigate } from "react-router-dom";

export default function CountryList() {
  const navigate = useNavigate();
  const [countryList, setCountryList] = useState([]);

  async function getCountries() {
    const allCountries = await getAllCountries();
    const countriesList = allCountries.map((country) => {
      return {
        label: country.country,
        countryId: country.id,
      };
    });
    setCountryList(countriesList);
  }

  useEffect(() => {
    getCountries();
  }, []);

  const clickAction = (e) => {
    const countryName = e.target.innerText;
    const selectedCountry = countryList.filter((country) => {
      if (country.label === countryName) {
        return country.countryId;
      }
    });
    if (selectedCountry) {
      const selectedId = selectedCountry[0].countryId;
      navigate(`/offer/country/${selectedId}`);
    }
  };

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
        options={countryList}
        size="small"
        sx={{
          marginRight: "4.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          width: 300,
          background: "white",
        }}
        renderInput={(params) => (
          <TextField
            InputProps={{
              value: params.id,
            }}
            {...params}
            label="Country"
          />
        )}
      />
    </div>
  );
}
