import "./OfferCard.css";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function OfferCard({ offer }) {
  return (
    <Card sx={{ maxWidth: 345, margin: 20 }}>
      <CardMedia
        component="img"
        style={{ objectFit: "contain", height: "200px" }}
        image={offer.company.profile_photo}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {offer.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {offer.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Link to={`/offer_subscrptions/${offer.id}`} >
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
