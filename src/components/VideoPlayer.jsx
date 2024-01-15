import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";

function VideoPlayer() {
  const [videos, setVideos] = useState([]);

  // Fetch videos from your backend
  const fetchVideos = async () => {
    try {
      const response = await axios.get("https://solar-news-backend.vercel.app/videos/all");
      const data = response.data;
      setVideos(data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div id="videos">
      <h1 style={{fontStyle: "normal", fontSize: "2rem"}}><b>Featuring Videos</b></h1>
    <Carousel data-bs-theme="dark">
      {videos.map((video, index) => (
        <Carousel.Item key={index}>

          <ReactPlayer className="d-block w-100" 
          url={video.videoUrl}
          alt = {`Slide ${index + 1}`}
          controls = {true}
          />
          <Carousel.Caption>
            <h5>{video.title}</h5>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
      </div>
  );
}

export default VideoPlayer;
