import { Autocomplete, TextField } from "@mui/material";
import * as React from "react";

import "./Nationality.css";

export default function Nationality() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={""}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Nationality" />}
    />
  );
}
