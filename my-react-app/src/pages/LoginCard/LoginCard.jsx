import { useContext, useState } from "react";
import "./LoginCard.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Icon,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/auth";
import { LoginContext } from "../../Context/Login";

export default function LoginCard() {
  const [visible, setVisible] = useState(false);
  const { setLogin } = useContext(LoginContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  async function handleLogin() {
    const response = await login({ email, password });
    localStorage.setItem("token", response.token);
    localStorage.setItem("rol", response.role);
    localStorage.setItem("userId", response.userId);

    setLogin(true);
    navigate("/home_user");
  }

  return (
    <>
      <div className="bodyLogin">
        <img
          className="logo"
          src="/src/assets/images/logo.png"
          alt="logo"
          width="100"
        ></img>
        <Card
          sx={{
            width: "20%",
            height: "30%",
            padding: "5%", // Utilizando un porcentaje para el padding
            margin: "5%", // Utilizando un porcentaje para el margin
            maxWidth: "70%", // Utilizando un porcentaje para el maxWidth
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
          raised={true}
        >
          <CardHeader
            title="Welcome back!"
            sx={{ marginTop: "10px" }}
          ></CardHeader>

          <CardContent>
            <TextField
              margin="dense"
              fullWidth={true}
              variant="outlined"
              type="email"
              onChange={handleChangeEmail}
              label="Email"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <Icon>
                      {" "}
                      <Email />
                    </Icon>{" "}
                  </InputAdornment>
                ),
              }}
            ></TextField>

            <TextField
              margin="dense"
              fullWidth={true}
              variant="outlined"
              type={visible ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <Icon>
                      {" "}
                      <Lock />
                    </Icon>
                  </InputAdornment>
                ),

                endAdornment: (
                  <InputAdornment>
                    <IconButton onClick={() => setVisible(!visible)}>
                      {" "}
                      {visible ? <Visibility /> : <VisibilityOff />}
                    </IconButton>{" "}
                  </InputAdornment>
                ),
              }}
            ></TextField>
          </CardContent>

          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              className="button"
              onClick={handleLogin}
              size="large"
              color="primary"
              variant="contained"
            >
              Login
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
