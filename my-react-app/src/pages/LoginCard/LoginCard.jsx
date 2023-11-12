import { useState } from "react";
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

export default function LoginCard() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="bodyLogin">
        <img
          className="logo"
          src="./public/images/logo.png"
          alt="logo"
          width="100"
        ></img>
        <Card
          sx={{
            width: "25%",
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
              label="Email"
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
              label="Password"
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
