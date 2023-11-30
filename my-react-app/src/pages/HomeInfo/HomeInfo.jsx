import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import "./HomeInfo.css";

import React from "react";
import LetterTransitionInfo from "../../components/LetterTransitionInfo/LetterTransitionInfo";

export default function HomeInfo() {
  return (
    <div className="homeInfoBody">
      <div className="titleInfo">
        <LetterTransitionInfo />
      </div>

      <Card
        className="cardContainer"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.1)", // Background color with opacity for glass effect
          width: "60%",
          height: "70%",
          padding: "1%",
          margin: "7%",
          maxWidth: "100%",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          
          "@media screen and (max-width: 700px)": {
            fontSize:"1rem",
            width: "90%",
            height: "70%",
            maxWidth: "100%",
          },
        }}
        raised={true}
      >
        <CardContent>
          <Typography variant="h3" margin={3} textAlign={"center"}>
            For Companies
          </Typography>

          <Typography variant="h5">
            <span style={{ fontWeight: "bold" }}>1.</span> Registration
          </Typography>
          <Typography>
            Start by creating a company account. Provide details about your
            organization, values, and the skills you are looking for in a
            volunteer.
          </Typography>
          <Typography variant="h5">
            <span style={{ fontWeight: "bold" }}>2.</span> Post Opportunities
          </Typography>

          <Typography>
            Share volunteer opportunities, specifying the duration, required
            skills, and offered benefits, which may include accommodation and
            meals.
          </Typography>
          <Typography variant="h5">
            <span style={{ fontWeight: "bold" }}>3.</span> Find the Ideal Talent
          </Typography>

          <Typography>
            Explore volunteer profiles, filter by skills and experience, and
            find the perfect person to contribute to your cause.
          </Typography>
          <Typography variant="h5">
            <span style={{ fontWeight: "bold" }}>4.</span>Direct Connection
          </Typography>

          <Typography>
            Communicate directly with interested volunteers, arrange interviews,
            and build meaningful relationships with individuals who share your
            values.
          </Typography>
          <Typography variant="h5">
            <span style={{ fontWeight: "bold" }}>5.</span>Feedback and
            Evaluations
          </Typography>

          <Typography>
            After collaboration, provide feedback and evaluate volunteers. Build
            a network of committed and valuable talent.
          </Typography>
        </CardContent>
        <img
          className="photoInfoCompany"
          src="/src/assets/images/infoCompany.png"
          width="300"
        ></img>
      </Card>

      <Card
        className="cardContainer"
        sx={{
          right: "0px",
          width: "60%",
          height: "70%",
          padding: "1%", // Using a percentage for padding
          margin: "7%", // Using a percentage for margin
          maxWidth: "100%", // Using a percentage for maxWidth
          backgroundColor: "rgba(255, 255, 255, 0.1)", // Background color with opacity for glass effect

          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",

          "@media screen and (max-width: 700px)": {
            width: "90%",
            height: "70%", // Modifying the width for smaller screens
            maxWidth: "100%", // Adjusting the maxWidth
          },
        }}
        raised={true}
      >
        <CardContent>
        <Typography variant="h3" margin={3} textAlign={"center"}>
            For Volunteers
          </Typography>
          <Typography variant="h5">
            <span style={{ fontWeight: "bold" }}>1.</span> Create Your Profile
          </Typography>
       
          <Typography>
            Sign up as a volunteer, highlight your skills, experiences, and
            motivations. Tell us what you're passionate about.
          </Typography>
          <Typography variant="h5">
            <span style={{ fontWeight: "bold" }}>2.</span>Explore Opportunities
          </Typography>
      
          <Typography>
            Browse through volunteer opportunities offered by businesses. Filter
            by location, duration, and benefits.
          </Typography>
          <Typography variant="h5">
            <span style={{ fontWeight: "bold" }}>3.</span>Apply
          </Typography>
       
          <Typography>
            Send applications to the opportunities that interest you. Customize
            your message to highlight why you're the perfect candidate.
          </Typography>
          <Typography variant="h5">
            <span style={{ fontWeight: "bold" }}>4.</span>Connect with Companies
          </Typography>
      
          <Typography>
            Communicate with companies interested in your profile, participate
            in interviews, and ensure the opportunity is suitable for both
            parties.
          </Typography>
          <Typography variant="h5">
            <span style={{ fontWeight: "bold" }}>5.</span>Collaborate and Share
          </Typography>
       
          <Typography>
            {" "}
            After completing your volunteering experience, share your feedback
            and collaborate with the company. Build a strong reputation in the
            Glowork community.
          </Typography>
        </CardContent>
        <img
          className="photoInfoUser"
          src="/src/assets/images/infoUser.png"
          width="350"
        ></img>
      </Card>
    </div>
  );
}
