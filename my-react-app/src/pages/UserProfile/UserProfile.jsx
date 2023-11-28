import "./UserProfile.css";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getUserContactInfo } from "../../services/user";
import UploadImage from "../../components/UploadImage/UploadImage";
import { getOfferSetUser } from "../../services/offer";
import OfferCard from "../../components/OfferCard/OfferCard";


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
      <header className="headerUserProfile">
        <img
          className="photoHeaderProfile"
          src="/src/assets/images/headerProfile.png"
        ></img>
      </header>

      <div className="containerBodyProfile">

        <div className="containerProfile">

        <Card
          sx={{
            width: "100%",
            margin: "4rem",
            padding: "5%",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: "10px",
            display: "flex",
            flexDirection:"row",
            justifyContent: "center",
            alignItems: "center",
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

            <div className="profileContent">
              
            <CardContent>
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
          </div>
        </Card>

        </div>


      <div className="containerSubscriptions">
      <Card
      sx={{
        width: "100%",
        margin: "4rem",
        padding: "1%",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
      raised={true}
        >
        <CardContent style={{ display: "flex", gap: "1rem" }}>
    
        {user.offers?.map((subscription,i) => {
         return (<OfferCard offer={subscription}/>)
        })}

          </CardContent>

          </Card>
     
       </div>
       
      </div>
    </>
  );
}
