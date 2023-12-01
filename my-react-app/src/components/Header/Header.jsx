import "./Header.css";
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
        className="AppBar"
        position="static"
        sx={{
          position: "relative",
          zIndex: "1",
          width: "100",
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "space-evenly",
          textAlign: "center",
          '@media screen and (max-width: 700px)': {
            
            width: "100%", 
            
          },
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
          {login ? (
            <Box>
              <SideBar />
            </Box>
          ) : (
            <></>
          )}

          {!login ? (
           
              <img
                className="logoHome"
                src="/src/assets/images/logoHeader.png"
                width="100"
                style={{ marginTop: "1px" }}
              ></img>
           
          ) : (
            <></>
          )}

          <Box
            sx={{
              display: "flex",
              marginRight: "auto",
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <IconButton color="primary">
                <HomeIcon />
              </IconButton>
            </Link>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {login ? (
              <Box
                sx={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)", // Ajustar para centrar completamente
                }}
              >
               <LetterTransition  />

              </Box>
            ) : (
              <></>
            )}
          </Box>

          {login ? (
            <Box className="countryListResponsive">
              <CountryList />
            </Box>
          ) : (
            <></>
          )}

            <Box>
            <ButtonLoginHeader />
            </Box>
           
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}
