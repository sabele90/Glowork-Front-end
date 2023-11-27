import { useParams } from "react-router-dom";
import { getOfferSetUser, getOneOffer } from "../../services/offer";
import { Button, Card, CardContent, CardHeader, Stack } from "@mui/material";
import "./OfferSubscription.css";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import MapLocations from "../../components/MapLocations/MapLocations";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



export default function OfferSubscription() {
  const [open, setOpen] = React.useState(false);
  const [offer, setOffer] = useState({});
  const [myPos, setMyPos] = useState(null);
  const data = useParams();


  async function getMySubscriptions() {
    const result = await getOfferSetUser(offer.id);
    (result) ? setOpen(true) : console.log("algo fue mal");
  }

 
  async function getOneOfferData() {
    const oneOffer = await getOneOffer(data.offer_id);
    setOffer(oneOffer);
  }
 

  function getMyPos() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setMyPos([position.coords.latitude, position.coords.longitude]);
      },
      (error) => {
        console.error("Error getting geolocation:", error);
        // Handle the error (optional)
      }
    );
  }
  useEffect(() => {
    getMyPos();
    getOneOfferData();
  }, []);


  const handleClick = () => {
  
    getMySubscriptions();
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
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
                  marginTop: "3rem",
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
            padding: "5%",
            marginTop: "4%",
            height: "65%",
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

              }}


              title={offer.title}></CardHeader>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",

              }}

              variant="body2">
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

              variant="body1-">Max Volunter :</Typography>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",

              }}


              variant="body1-">
              {offer.max_volunteers}
            </Typography>
          </CardContent>



          <Stack spacing={2} sx={{ width: '100%' }}>
            <Button sx={{ margin: "1rem" }} variant="contained" onClick={handleClick}>
              APPLY
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
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
