import { useParams } from "react-router-dom";
import { getOfferSetUser, getOneOffer } from "../../services/offer";
import { Button, Card, CardContent, CardHeader, Stack } from "@mui/material";
import "./OfferSubscription.css";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import MapLocations from "../../components/MapLocations/MapLocations";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { emailSubscriptionCompany, emailSubscriptionUser } from "../../services/email";


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function OfferSubscription() {
  const [open, setOpen] = React.useState(false);
  const [offer, setOffer] = useState({});
  const [myPos, setMyPos] = useState(null);
  const data = useParams();

  async function getMySubscriptions() {
    try {
      const result = await getOfferSetUser(offer.id);
      if (result) {
        setOpen(true);
      } else {
        console.log("Algo fue mal");
      }
    } catch (error) {
      console.error("Error en getMySubscriptions:", error);
      if (error.response) {
        console.error("Respuesta del servidor:", error.response.data);
      }
    }
  }
  

  async function getOneOfferData() {
    const oneOffer = await getOneOffer(data.offer_id);

    setOffer(oneOffer);
    console.log(oneOffer)
  }
  
  function getMyPos() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setMyPos([position.coords.latitude, position.coords.longitude]);
      },
      (error) => {
        console.error("Error getting geolocation:", error);
      }
    );
  }
  useEffect(() => {
    getMyPos();
    getOneOfferData();
  }, []);

  const handleClick = async () => {
    getMySubscriptions();
    if (offer.company.name) {
      await emailSubscriptionCompany(offer.company.name);
      await emailSubscriptionUser(offer.company.name)
    }
  };
  
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  function showOffer() {
    return (
      <div className="containerOfferSubscription">
        <div className="containerMap&Gallery">
          <div className="containerGeolocation">
            {myPos && <MapLocations myPos={offer.location.coordinates} />}
          </div>

          <div className="gallery">
            {[1, 2, 3, 4].map((index) => (
              <img
                key={index}
                src={offer[`photo_${index}`]}
                alt={`Photo ${index}`}
                style={{
                  marginTop: "0rem",
                  marginLeft: "2rem",
                  margin: "0.5rem",
                  width: "200px",
                  height: "200px",
                  objectFit: "cover",
                  marginBottom: "10px",
                }}
                className="photoSubscription"
              />
            ))}
          </div>
        </div>

        <Card
          sx={{
            width: "30%",
            padding: "4%",
            marginTop: "3%",
            marginLeft: "2rem",
            height: "66%",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "justify",
            alignItems: "center",
          }}
          raised={true}
        >
          <CardContent>
          <CardHeader
  sx={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "& .MuiTypography-root": {
      fontSize: "56px", 
    },
  }}
  title={offer.title}
>

</CardHeader>

            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                margin: "1rem",
              }}
              variant="h5"
            >
              {offer.start_date} to {offer.end_date}
            </Typography>
            <Typography variant="body1">{offer.description}</Typography>
            <Typography variant="body1">{offer.requirements}</Typography>
            <Typography variant="body1">{offer.benefits}</Typography>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
              variant="body1-"
            >
              Max Volunter :
            </Typography>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
              variant="h5"
            >
              {offer.max_volunteers}
            </Typography>
          </CardContent>

          <Stack spacing={2} sx={{ width: "18%" }}>
            <Button
              sx={{ margin: "1rem" }}
              variant="contained"
              onClick={handleClick}
            >
              APPLY
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                This is a success message!
              </Alert>
            </Snackbar>
          </Stack>
        </Card>
      </div>
    );
  }

  return showOffer();
}
