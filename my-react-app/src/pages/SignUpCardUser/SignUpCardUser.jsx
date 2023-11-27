import { useState } from "react";
import TextField from "@mui/material/TextField";
import "./SignUpCardUser.css";
import { Button, Card, CardContent, CardHeader } from "@mui/material";
import { signUpUser } from "../../services/user";
import { useNavigate } from "react-router-dom";

const SignUpCardUser = () => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({

    name: "",
    surname:"",
    email: "",
    password: "",
    about: "", 
    interests: "", 
 
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Hola Signup")
    console.log(formData)
    try {
      // Enviar la solicitud de registro con los datos del formulario
      await signUpUser(formData);
      console.log("Usuario registrado exitosamente");
      navigate("/login")
    } catch (error) {
      console.error("Error al registrar usuario:", error);
    }
  };


  return (
    <div className="bodySignUpUser">

      <div className="imageContainer">
          <img
            className="imageSingUpUser"
            src="/src/assets/images/userRegister.png"
          ></img>
        </div>

      <div className="containerSignUpUser">
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
          }}
          raised={true}
        >
          <CardHeader title="Sign up"></CardHeader>
          <CardContent>
            <form>
              <TextField
                 label="Name"
                 type="text"
                 name="name"
                 value={formData.name}
                 onChange={(e)=>{setFormData({...formData, name: e.target.value})}}
                 fullWidth
                 margin="normal"
                 size="small"
              />

              <TextField
                label="Surname"
                type="text"
                name="surname"
                value={formData.surname}
                onChange={(e)=>{setFormData({...formData, surname: e.target.value})}}
                fullWidth
                margin="normal"
                size="small"
              />
              <TextField
                label="Correo Electrónico"
                type="email"
                name="email"
                value={formData.email}
                onChange={(e)=>{setFormData({...formData, email: e.target.value})}}
                fullWidth
                margin="normal"
                size="small"
 
              />
              <TextField
                label="Contraseña"
                type="password"
                name="password"
                value={formData.password}
                onChange={(e)=>{setFormData({...formData, password: e.target.value})}}
                fullWidth
                margin="normal"
                size="small"
       
              />
              
              <TextField
                label="About you"
                type="about"
                name="about you"
                value={formData.about}
                onChange={(e)=>{setFormData({...formData, about: e.target.value})}}
                fullWidth
                margin="normal"
                size="large"
     
              />
              <TextField
                label="Interest"
                type="interest"
                name="interests"
                value={formData.interest}
                onChange={(e)=>{setFormData({...formData, interests: e.target.value})}}
                fullWidth
                margin="normal"
                size="large"
        
              />

              <Button sx={{ margin: "1rem" }} variant="contained" onClick={handleSubmit}>
                
                
                Signup</Button>

            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default SignUpCardUser;
