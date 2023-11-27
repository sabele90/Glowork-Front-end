import "./UserProfile.css";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getUserContactInfo } from "../../services/user";
import UploadImage from "../../components/UploadImage/UploadImage";

export default function UserProfile() {
  const [user, setUser] = useState({});

  async function getUserInfo() {
    const info = await getUserContactInfo(localStorage.getItem("userId"));

    setUser(info);
    /* console.log("User Info:", info); */
  }

  useEffect(() => {
    getUserInfo();
  }, []);
  // https://images.hola.com/imagenes/estar-bien/20221018219233/buenas-personas-caracteristicas/1-153-242/getty-chica-feliz-t.jpg?tx=w_1200
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
            flexWrap: "wrap",

            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
          raised={true}
        >
          <CardContent>
            <div className="circularImageWrapper">
              <img
                className="circularImage"
                src={user.profile_photo}
                alt="User Profile"
              />
              {/* <UploadImage onUoload={handleOnUpload}>
            {({ open }) => {
              function handleOnClick(e) {
                e.preventDefault();
                open();
              }
              return <button onClick={handleOnClick}>Upload an Image</button>;
            }}
          </UploadImage> */}
            </div>
            <CardHeader title={`${user.name} ${user.surname}`} />

            <Typography variant="body1">{user.about}</Typography>
            <Typography variant="body1">{user.interests}</Typography>
            <Typography variant="body1">
              {user.contact_info && user.contact_info.date_of_birth}
            </Typography>
            <Typography variant="body1">
              {user.contact_info &&
                user.contact_info.nationality &&
                user.contact_info.nationality.nationality}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
