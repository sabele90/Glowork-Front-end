import React from "react";
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
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

function Footer() {
  const footerColumns = [
    { header: "Contact", links: [""] },
    { header: "Support", links: [""] },
    { header: "People", links: [""] },
    { header: "Company", links: [""] },
  ];

  const generateFooterElements = () => {
    return footerColumns.map((column, columnIndex) => (
      <Grid key={columnIndex} alignContent="center">
        <Box>
          <Button sx={{ color: "white", fontWeight: "bold" }}>
            {column.header}
          </Button>
        </Box>
        {column.links.map((link, linkIndex) => (
          <Box key={linkIndex}>
            <Button sx={{ color: "white" }}>{link}</Button>
          </Box>
        ))}
      </Grid>
    ));
  };

  return (
    <footer className="footer">
      <Box
        sx={{
          background: "radial-gradient(circle, #2196f3, #64b5f6, #1976d2)",
          color: "white",
          padding: 5,
          
        }}
      >
        {" "}
      
        <Container>
          <Grid
            className="gridFooter"
            container
            spacing={0}
            justifyContent="space-evenly"
          >
            {generateFooterElements()}
          </Grid>
          <Divider sx={{ backgroundColor: "white" }} />
        </Container>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        py={2}
        sx={{
          background: "radial-gradient(circle, #2196f3, #64b5f6, #1976d2)",
          color: "white",
        }}
      >
        <Box sx={{width: '100vw', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
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

        <Box margin="2rem">
          <Typography>© Glowork 2023 - All Rights Reserved</Typography>
        </Box>
      </Box>
    </footer>
  );
}

export default Footer;
