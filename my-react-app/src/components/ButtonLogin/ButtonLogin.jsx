import { Link } from "react-router-dom";
import "./ButtonLogin";
import React from "react";
import { Button } from "@mui/material";

export default function ButtonLogin() {
  return (
    <Link to="/login" style={{ textDecoration: "none" }}>
      <Button sx={{ margin: "1rem" }} variant="contained">
        singup
      </Button>
    </Link>
  );
}
