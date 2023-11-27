import { useParams } from "react-router-dom";
import { getOneOffer } from "../../services/offer";
import { Box, Button, Card, CardContent, CardHeader } from "@mui/material";
import "./OfferSubscription.css";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";

import MapLocations from "../../components/MapLocations/MapLocations";

export default function OfferSubscription() {
  const [offer, setOffer] = useState({});
  const [myPos, setMyPos] = useState(null);

  const data = useParams();
  console.log(data);
  async function getOneOfferData() {
    const oneOffer = await getOneOffer(data.offer_id);
    setOffer(oneOffer);
  }
  useEffect(() => {
    getOneOfferData();
  }, []);

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
  }, []);

  function showOffer() {
    return (
      <>
        <Box className="containerOfferSubscription">
          {myPos && <MapLocations myPos={offer.location.coordinates} />}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "3rem",
            }}
          >
            <Box sx={{ marginRight: "2rem" }}>
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
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                      marginBottom: "10px",
                    }}
                    className="photoSubscription"
                  />
                ))}
              </div>
            </Box>

            <Box
              sx={{
                width: "100%",
                maxWidth: "600px",
                margin: "2rem",
                marginRight: "2rem",
              }}
            >
              <Card
                sx={{
                  width: "100%",
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
                  <CardHeader title={offer.title}></CardHeader>
                  <Typography variant="body2">
                    Start from {offer.start_date} to {offer.end_date}
                  </Typography>
                  <Typography variant="body1">{offer.description}</Typography>
                  <Typography variant="body1">Requeriments</Typography>
                  <Typography variant="body1">{offer.requirements}</Typography>
                  <Typography variant="body1">{offer.benefits}</Typography>
                  <Typography variant="body1-">Max Volunter :</Typography>
                  <Typography variant="body1-">
                    {offer.max_volunteers}
                  </Typography>
                </CardContent>
                <Button sx={{ margin: "1rem" }} variant="contained">
                  APPLY
                </Button>
              </Card>
            </Box>
          </Box>
        </Box>
      </>
    );
  }

  return showOffer();
}
