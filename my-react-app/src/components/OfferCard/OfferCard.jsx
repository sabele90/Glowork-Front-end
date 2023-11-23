import "./OfferCard.css";
import React from "react";
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
        margin: 2,
        display: "flex",
        flexDirection: "column", // Por defecto, establece la dirección del eje principal a columna
        flexWrap: "wrap", // Asegura que las tarjetas se envuelvan en una nueva línea
        "@media (min-width: 600px)": {
          flexDirection: "row", // Cambia a fila en pantallas más grandes (ajusta el valor según sea necesario)
        },
      }}
    >
      <CardMedia
        component="img"
        style={{ objectFit: "contain", height: "200px" }}
        image={offer.company.profile_photo}
      />
      <CardContent sx={{display:'flex', flexDirection:'column'}}>
        <Typography gutterBottom variant="h5" component="div">
          {offer.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {offer.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ alignSelf: 'flex-end' }}>
        <FavouriteIcon />
        <Link to={`/offer_subscrptions/${offer.id}`}>
          <Button size="small">MORE INFO</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
