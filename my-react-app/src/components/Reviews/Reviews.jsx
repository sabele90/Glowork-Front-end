import "./Reviews.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { getReviews } from "../../services/reviews";
import { useEffect } from "react";

export default function Reviews() {
  const [review, setReview] = useState([]);

  async function getAllReviews() {
    const data = await getReviews();
    setReview(data);
  }

  useEffect(() => {
    getAllReviews();
  }, []);

  {
    return review.map((review, i) => {
      return (
        <Card key={i} sx={{ display:"flex", margin:2,maxWidth: 300 ,height: "100%"}} className="allreviews">
          <CardActionArea>
            <CardMedia

              component="img"
              height="150"
              image={review.profile_photo}
              alt="green iguana"
            />
            <CardContent sx={{ height: 200, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <Typography gutterBottom variant="h5" component="div">
            
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {review.comment}
              </Typography>
            </CardContent>
           
            <Stack spacing={1} direction="row" justifyContent="space-between" margin={2}>
              <Rating   name="size-large" defaultValue={5} size="large" />
            </Stack>
        
          </CardActionArea>
        </Card>
      );
    });
  }
}
