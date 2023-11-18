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

  return (
    <footer className="footer">
      <Box bgcolor="primary.main" color="white" padding={2}>
        <Container>
          <Grid container spacing={0} justifyContent="center">
            {generateFooterElements()}
          </Grid>
          <Divider bgcolor="primary.main" color="white"></Divider>
        </Container>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        py={2}
        bgcolor="primary.main"
        color={"white"}
      >
        <Box
          display={"flex"}
          justifyContent={"center"} // Center the content horizontally
        >
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
