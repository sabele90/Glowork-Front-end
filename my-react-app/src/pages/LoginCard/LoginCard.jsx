
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
    const [visible,setVisible]= useState (false)
  return (
    <>
   
    <div className="bodyLogin">
    <img className="logo" src="./public/images/logo.png" alt="logo" width="100"></img>
      <Card 
        sx ={{ padding: "50px",margin: "100px", maxWidth: "700px", backgroundColor: "white" ,borderRadius: '10px', display: "flex", flexDirection:"column", justifyContent:"center", textAlign:"center" ,marginTop: "100px"}}
        raised={true}
      >
        <CardHeader title="Login"
        sx={{ marginTop: "10px"}}
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
                  <IconButton onClick={()=> setVisible(!visible)}>
                    {" "}
                   { visible ? <Visibility /> : <VisibilityOff/>}
                  </IconButton>{" "}
                </InputAdornment>
              ),
            }}
          ></TextField>
        </CardContent>

        <CardActions  sx={{display:"flex", justifyContent:"center"}}>
          <Button size="large" color="primary" variant="contained">
            Login
          </Button>
        
          </CardActions>
        
      </Card>
      </div>
      </>
  );
}
