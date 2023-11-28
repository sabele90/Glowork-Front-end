import "./Footer.css";
import {
  Box,
  Grid,
  Container,
  Typography,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  const elements = [
    {
      links: ["Contact"],
    },
    {
      links: ["Support"],
    },
    {
      links: ["People"],
    },
    {
      links: ["Company"],
    },
  ];
  function generateFooterElements() {
    const footerElements = elements.map((column) => (
      <Grid alignContent={"center"} key={column.header}>
        <Box>
          <Button sx={{ color: "white", fontWeight: "bold" }}>
            {column.header}
          </Button>
        </Box>
        {column.links.map((link, i) => (
          <Box key={i}>
            <Button sx={{ color: "white" }}>{link}</Button>
          </Box>
        ))}
      </Grid>
    ));
    return footerElements;
  }

  //background: radial-gradient(circle, #2196f3, #64b5f6, #1976d2)
  return (
    <footer className="footer">
      <Box
        sx={{
      
          background: "radial-gradient(circle, #2196f3, #64b5f6, #1976d2)",
          color: "white",
          padding: 2,
        }}>
        <Container>
          <Grid container spacing={0} justifyContent="space-evenly">
            {generateFooterElements()}
          </Grid>
          <Divider sx={{ backgroundColor: "white" }}></Divider>
        </Container>
      </Box>
      <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      py={2}
      sx={{
        background: "radial-gradient(circle, #2196f3, #64b5f6, #1976d2)",
        color: "white",
      }}
      >
        <Box>
          <IconButton sx={{ color: "white" }}>
            <LinkedInIcon />
          </IconButton>

          <IconButton sx={{ color: "white" }}>
            <FacebookIcon />
          </IconButton>

          <Link to="https://www.instagram.com/gloworkinfo/?igshid=MTk0NTkyODZkYg%3D%3D&utm_source=qr">
            <IconButton sx={{ color: "white" }}>
              <InstagramIcon />
            </IconButton>
          </Link>
        </Box>

        <Box margin={"2rem"}>
          <Typography>© Glowork 2023 - All Rights Reserved</Typography>
        </Box>
      </Box>
    </footer>
  );
}

export default Footer;
