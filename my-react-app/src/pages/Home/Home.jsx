import { Button } from "@mui/material";
import "./Home.css";
import ReactPlayer from "react-player";
import Reviews from "../../components/Reviews/Reviews";
//{localStorage.rol === "admin" && <Button onClick= {onGetAllUsers} variant='contained'>Get all users</Button>}
export default function Home() {
  /*   function onGetAllUsers(){
      navigate("/home/users")

  } */
  return (
  
      <div className="homeContainer">

        <div className="video-background">
          <ReactPlayer
            width="100%"
            height="100%"
            frameBorder="0"
            className="video"
            title="YouTube Video"
            url="../src/assets/video/videobackground.mp4"
            controls={false} // Configura controls en false para ocultar los controles
            playing={true} // Auto-reproducción
            loop={true}
            volume={1}
          ></ReactPlayer>
        </div>
      
        <div className="reviews">
          
          <Reviews/>
        </div>
      </div>
    
  );
}
