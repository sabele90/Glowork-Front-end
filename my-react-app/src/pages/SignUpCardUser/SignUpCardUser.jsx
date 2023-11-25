import { useState } from "react";
import TextField from "@mui/material/TextField";
import "./SignUpCardUser.css";
import { Box, Card, CardContent, CardHeader } from "@mui/material";
import DateOfBirth from "../../components/DateOfBirth/DateOfBirth";
import Nationality from "../../components/Nationality/Nationality";
import ButtonLogin from "../../components/ButtonLogin/ButtonLogin";

const SignUpCardUser = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthdate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones como enviar los datos al servidor
    console.log("Form submitted:", formData);
  };

  return (
    <Box
      className="bodySignUpUser"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box className="imageContainer" style={{ marginTop: "10rem" }}>
        <img
          className="imageUser"
          src="/src/assets/images/userRegister.png"
          alt="User Registration"
        />
      </Box>

      <Box className="containerSignUpUser">
        <Card
          sx={{
            width: "30rem",
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
          <CardHeader title="Sign up"></CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                type="text"
                name="name"
                value={formData.username}
                onChange={handleChange}
                fullWidth
                margin="normal"
                size="small"
                sx={{ width: "70%" }} // Ajusta el ancho y el margen según tus preferencias
              />

              <TextField
                label="Surname"
                type="text"
                name="surname"
                value={formData.username}
                onChange={handleChange}
                fullWidth
                margin="normal"
                size="small"
                sx={{ width: "70%" }}
              />
              <TextField
                label="Correo Electrónico"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                size="small"
                sx={{ width: "70%" }}
              />
              <TextField
                label="Contraseña"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                fullWidth
                margin="normal"
                size="small"
                sx={{ width: "70%" }}
              />
              <TextField
                label="Confirmar Contraseña"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                fullWidth
                margin="normal"
                size="small"
                sx={{ width: "70%" }}
              />
              <TextField
                label="About you"
                type="about"
                name="about you"
                value={formData.confirmPassword}
                onChange={handleChange}
                fullWidth
                margin="normal"
                size="large"
                sx={{ width: "70%" }}
              />
              <TextField
                label="Interest"
                type="interest"
                name="interest"
                value={formData.confirmPassword}
                onChange={handleChange}
                fullWidth
                margin="normal"
                size="large"
                sx={{ width: "70%" }}
              />

              <DateOfBirth />

              <Nationality />

              <ButtonLogin />
            </form>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
export default SignUpCardUser;
