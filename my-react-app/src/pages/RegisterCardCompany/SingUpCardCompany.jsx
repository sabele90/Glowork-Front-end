import React from 'react'
import "./SingUpCardCompany.css"

import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { Card, CardContent, CardHeader } from "@mui/material";
import { Link } from 'react-router-dom';

const SingUpCardcompany = () => {
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
    <>
      <div className="bodySignUp">
        <div className="containerSignUp">
          <Card
          
            sx={{
              width: "35%",
              padding: "5%", // Utilizando un porcentaje para el padding
              margin: "5%", // Utilizando un porcentaje para el margin
              maxWidth: "70%", // Utilizando un porcentaje para el maxWidth
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
            }}
            raised={true}
          >
          <CardHeader title="Sign up" sx={{ marginTop: "10px", position: "relative" }}>
  <div style={{ display: "flex", justifyContent: "center" }}>
    <img
      src="/src/assets/images/profiile.png"
      alt="Avatar"
      style={{
   
        borderRadius: "50%",
        width: "80px",
        height: "80px",
        top: "-40px",
      }}
    />
  </div>
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
              
                <Link to="/login" style={{ textDecoration: 'none' }}>
               <Button sx={{margin:"1rem"}}variant="contained">singup</Button>
               </Link>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SingUpCardcompany;
