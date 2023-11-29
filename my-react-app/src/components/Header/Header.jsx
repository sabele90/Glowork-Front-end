import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ButtonLoginHeader from "../ButtonLoginHeader/ButtonLoginHeader";
import { useContext } from "react";
import { LoginContext } from "../../Context/Login";
import SideBar from "../SideBar/SideBar";
import CountryList from "../CountryList/CountryList";
import LetterTransition from "../LetterTransition/LetterTransition";
export default function Header() {
  const { login, setLogin } = useContext(LoginContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          zIndex: "2",
          width: "100vw",
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "space-evenly",
          textAlign: "center",
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: "transparent",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Conditionally render SideBar based on login state */}
          {login ? <Box><SideBar /></Box> : <></>}

          {/* Conditionally render logo based on login state */}
          {!login ? (
            <Box>
              <img
                className="logo"
                src="/src/assets/images/logoHeader.png"
                width="100"
                style={{ marginTop: "1px" }}
              ></img>
            </Box>
          ) : (
            <></>
          )}

          {/* Home Icon with a Link to the home page */}
          <Box
            sx={{
              display: "flex",
              marginRight: "auto", // Align to the right
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <IconButton color="primary">
                <HomeIcon />
              </IconButton>
            </Link>
          </Box>

          {/* Conditionally render LetterTransition based on login state */}
          {login ? (
            <Box>
              <LetterTransition />
            </Box>
          ) : (
            <></>
          )}

          {/* Conditionally render CountryList based on login state */}
          {login ? (
            <Box>
              <CountryList />
            </Box>
          ) : (
            <></>
          )}

          {/* ButtonLoginHeader Component */}
          <Box>
            <ButtonLoginHeader />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
