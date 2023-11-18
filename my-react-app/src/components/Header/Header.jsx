import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ButtonGroup, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SplitButton from "./SplitButtom/SplitButtom";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-evenly",
          textAlign: "center",
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <img
              className="logo"
              src="/src/assets/images/logoHeader.png"
              alt="logo"
              width="100"
              style={{ marginTop: "1px" }}
            ></img>
          </Box>

          <Box
            sx={{
              display: "flex",
              marginRight: "auto", // Alinea a la derecha
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <IconButton color="primary">
                <HomeIcon />
              </IconButton>
            </Link>
          </Box>

          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <SplitButton />

            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button variant="contained">Login</Button>
            </Link>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
