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

export default function Header() {
  const { login, setLogin } = useContext(LoginContext);

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
          {login ? (
            <Box>
              <SideBar />
            </Box>
          ) : (
            <></>
          )}

          {!login ? (
            <Box>
              <img
                className="logo"
                src="/src/assets/images/logoHeader.png"
                alt="logo"
                width="100"
                style={{ marginTop: "1px" }}
              ></img>
            </Box>
          ) : (
            <></>
          )}

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

          <Box>
            <ButtonLoginHeader />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
