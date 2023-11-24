import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import "./UserProfile.css";

import React, { useEffect, useState } from "react";
import { getUserContactInfo } from "../../services/user";
import { useParams } from "react-router-dom";

export default function UserProfile() {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  console.log(user);
  async function getUserInfo() {
    const info = await getUserContactInfo(userId);

    setUser(info);
    console.log("User Info:", info);
  }
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      <header className="headerUserProfile">
        <img
          className="photoHeaderProfile"
          src="/src/assets/images/headerProfile.png"
        ></img>
      </header>

      <div className="containerProfile">
        <Card
          sx={{
            width: "100%",
            margin: "4rem",
            padding: "5%",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
          raised={true}
        >
          <CardContent>
            <CardHeader title={`${user.name} ${user.surname}`} />
            <Typography variant="body2">PROFILE</Typography>
            <Typography variant="body1">{""}</Typography>
            <Typography variant="body1">{""}</Typography>
            <Typography variant="body1">{""}</Typography>
            <Typography variant="body1-"> {""}</Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
