import React from "react";
import "./SingUpCardCompany.css";

import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Card, CardContent, CardHeader } from "@mui/material";
import ButtonLogin from "../../components/ButtonLogin/ButtonLogin"


const SingUpCardcompany = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  
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
    
      <div className="bodySignUpCompany">

        <div className="imageContainer">
          <img
            className="imageCompany"
            src="/src/assets/images/companyRegister.png"
          ></img>
        </div>

        <div className="containerSignUpCompany">
          <Card
            sx={{
              right:"0px",
              width: "20%",
              height:"60%",
              padding: "5%", // Utilizando un porcentaje para el padding
              margin: "1%", // Utilizando un porcentaje para el margin
              maxWidth: "70%", // Utilizando un porcentaje para el maxWidth
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              '@media screen and (max-width: 700px)': {
                width: "90%", 
                height:"90%",// Modifica el ancho para pantallas más pequeñas
                maxWidth: "100%", // Ajusta el maxWidth
               
              },
            }}
            raised={true}
          >
            <CardHeader
              title="Sign up"
              sx={{ marginTop: "10px", position: "relative" }}
            >
             
            </CardHeader>

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
                />

                <TextField
                  label="Correo Electrónico"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Contraseña"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Confirmar Contraseña"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Description"
                  type="Description"
                  name="Description"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  fullWidth
                  margin="dense"
                />
                <TextField
                  label="Website"
                  type="Website"
                  name="Website"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  fullWidth
                  margin="dense"
                />
              </form>
              <ButtonLogin />

            </CardContent>
        
          </Card>
   
        </div>
      </div>
    
  );
};

export default SingUpCardcompany;
