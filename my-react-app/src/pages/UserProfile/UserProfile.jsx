import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import "./UserProfile.css";

import { useEffect, useState } from "react";
import { getUserContactInfo } from "../../services/user";

export default function UserProfile() {
  const [user, setUser] = useState({});


  async function getUserInfo() {
    const info = await getUserContactInfo(localStorage.getItem('userId'));

    setUser(info);
    /* console.log("User Info:", info); */
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
            flexWrap:"wrap",
            
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
          raised={true}
        >
          <CardContent>
            <CardHeader title= {`${user.name} ${user.surname}`}  />
        
            <Typography variant="body1">{user.about}</Typography>
            <Typography variant="body1">{user.interests}</Typography>
            <Typography variant="body1">
    {user.contact_info && user.contact_info.date_of_birth}
  </Typography>
  <Typography variant="body1">
    {user.contact_info && user.contact_info.nationality && user.contact_info.nationality.nationality}
  </Typography>

          </CardContent>
        </Card>
      </div>
    </>
  );
}
