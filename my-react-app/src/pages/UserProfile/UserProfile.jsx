import "./UserProfile.css";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getUserContactInfo } from "../../services/user";
import UploadImage from "../../components/UploadImage/UploadImage";
import { getOfferSetUser } from "../../services/offer";
import OfferCard from "../../components/OfferCard/OfferCard";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export default function UserProfile() {
  const [user, setUser] = useState({});

  async function getUserInfo() {
    const info = await getUserContactInfo(localStorage.getItem("userId"));

    setUser(info);
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      <img
        className="backgroundTopProfile"
        src="/src/assets/images/backgroundTop.png"
      ></img>

      <div className="containerBodyProfile">
        <div className="containerProfile">
          <Card
            sx={{
              width: "100%",
              marginBottom: "0rem",
              marginTop: "1.5rem",
              marginRight: "4rem",
              marginLeft: "4rem",
              padding: "3%",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              backgroundImage:
                "url('/src/assets/images/backgroundCardProfile.jpg')",
              backgroundSize: "cover",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              "@media screen and (max-width: 700px)": {
                margin: "0",
                display: "flex",
                alignContent: "center",
                textAlign: "center",
                alignItems: "center",
                flexDirection: "column",
                width: "80%",
                height: "100%",
              },
            }}
            raised={true}
          >
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

            <Box
              sx={{
                "& > :not(style)": { m: 1 },
                position: "absolute",
                left: "26rem",
                bottom: "5rem",
                "@media screen and (max-width: 700px)": {
                  left: "16rem",
                  top: "18rem",
                },
              }}
            >
              <Fab color="secondary" aria-label="add">
                <AddIcon />
              </Fab>
            </Box>

            <div className="profileContent">
              <CardContent>
                <CardHeader
                  title={
                    <Typography variant="h1">
                      {`${user.name} ${user.surname}`}
                    </Typography>
                  }
                />
                <Typography
                  sx={{
                    "@media screen and (max-width: 700px)": {
                      width: "100vw",
                      textAlign: "center",
                    },
                  }}
                  variant="body1"
                >
                  {user.about}
                </Typography>
                <Typography variant="body1">{user.interests}</Typography>
                <Typography variant="h4">
                  {user.contact_info && user.contact_info.date_of_birth}
                </Typography>
                <Typography variant="h5">
                  {user.contact_info &&
                    user.contact_info.nationality &&
                    user.contact_info.nationality.nationality}
                </Typography>
              </CardContent>
              <Button
                sx={{
                  margin: "2rem",
                  position: "absolute",
                  right: "10rem",
                  top: "24rem",
                  "@media screen and (max-width: 700px)": {
                    right: "3rem",
                    top: "45rem",
                  },
                }}
                color="secondary"
                variant="contained"
              >
                EDIT{" "}
              </Button>
            </div>
          </Card>
        </div>

        <div className="containerSubscriptions">
          <Card
            sx={{
              width: "100%",
              height: "18rem",
              marginTop: "0rem",
              marginRight: "4rem",
              marginLeft: "4rem",
              padding: "1%",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              "@media screen and (max-width: 700px)": {
                display: "none",
              },
            }}
            raised={true}
          >
            <CardContent style={{ display: "flex", gap: "1rem" }}>
              {user.offers?.map((subscription, i) => {
                return <OfferCard offer={subscription} />;
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
