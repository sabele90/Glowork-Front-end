import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SignUpCard.css'

const SingUpCard = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
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
    console.log('Form submitted:', formData);
  };

  return (
    <>
    <div className='bodySignUp'>
    <div className='containerSignUp'>
      <h2>Singup</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Usuario"
          type="text"
          name="username"
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
        <Button type="submit" variant="contained" color="primary">
          Registrarse
        </Button>
      </form>
    </div>
    </div>
    </>
  );
};

export default SingUpCard;
