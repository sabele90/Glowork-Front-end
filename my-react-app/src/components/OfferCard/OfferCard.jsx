import "./OfferCard.css";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import FavouriteIcon from "../FavouriteIcon/FavouriteIcon";

export default function OfferCard({ offer }) {
  return (
    <Card
      className="offerCard"
      sx={{
        maxWidth: 345,
        maxHeight: 645,
        margin: 3,
        display: "flex",
        flexDirection: "column", // Por defecto, establece la dirección del eje principal a columna
        flexWrap: "wrap", 
        justifyContent: "space-between",
        '@media screen and (max-width: 700px)': {
          width: "100%", 
         
        }
      }}
    >
      <CardMedia
        component="img"
        style={{ objectFit: "contain", height: "200px" }}
        image={offer.company.profile_photo}
      />
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <Typography gutterBottom variant="h5" component="div">
          {offer.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {offer.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ alignSelf: "flex-end" }}>
     
          <FavouriteIcon offer={offer} />
      
        <Link to={`/offer_subscrptions/${offer.id}`}>
          <Button size="small">MORE INFO</Button>
        </Link>
       
      </CardActions>
    </Card>
  );
}
