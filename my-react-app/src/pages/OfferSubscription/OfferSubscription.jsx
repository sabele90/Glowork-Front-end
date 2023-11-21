import { useParams } from "react-router-dom";
import { getOneOffer } from "../../services/offer";
import { Card, CardContent, CardHeader } from "@mui/material";
import "./OfferSubscription.css"
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
export default function OfferSubscription() {

    const [offer, setOffer] = useState({});
    const data = useParams();
    console.log(data)
    async function getOneOfferData() {
      const oneOffer =  await getOneOffer(data.offer_id);
      setOffer(oneOffer);
    }
 

    

    function showOffer() {
       
  return (
    <Grid container spacing={3}>
      {/* Columna izquierda con imágenes */}
      <Grid item xs={5} md={6}>
        <div className="gallery">
          {[1, 2, 3, 4, ].map((index) => (
            <img
              key={index}
              src={offer[`photo_${index}`]}
              alt={`Photo ${index}`}
              style={{ width: '300px', height: '300px', objectFit: 'cover', marginBottom: '10px' }}
              className='photo'
            />
          ))}
        </div>
      </Grid>

      {/* Columna derecha con la tarjeta */}

      <Grid item xs={12} md={6}>
        <div className="containerOffer">
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
            <CardHeader title={offer.title}></CardHeader>
            <CardContent>
            <Typography variant="">{offer.description}</Typography>
            <Typography variant="body2">{offer.start_date}</Typography>
            <Typography variant="body2">{offer.end_date}</Typography>
            <Typography variant="body2">{offer.requirements}</Typography>
            <Typography variant="body2">{offer.benefits}</Typography>
            <Typography variant="body2">{offer.max_volunteers}</Typography>
            </CardContent>
          </Card>
        </div>
      </Grid>
    </Grid>
  );
}

   
     
        
      
    
    useEffect(() => {
      getOneOfferData();
    }, []);

    return showOffer()
  }



