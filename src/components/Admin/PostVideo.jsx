import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../../static/postvideo.css";

const VideoUploader = () => {
 
  const [video, setVideo] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e) => {
    setVideo(e.target.files[0]);
  };

  //convert formData.get('video') to base64
  function convertBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  convertBase64(video)
    .then((base64) => {
      setVideo(base64);
    })
    .catch((error) => {
      console.error(error);
    });

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const bodyData = {
      title: formData.get("title"),
      videoUrl: video,
    };

    try {
      setUploadProgress(0);
      const response = await axios.post(
        "https://solar-news-backend.vercel.app/admin/video",
        bodyData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          onUploadProgress: (progressEvent) => {
            setUploadProgress(
              Math.round((progressEvent.loaded / progressEvent.total) * 100)
            );
          },
        }
      );

      if (response.status === 200) {
        toast.success("Video uploaded successfully");
        e.target.reset();
      } else {
        toast.error("Error uploading video");
      }
    } catch (error) {
      console.error("Error uploading video:", error);
      toast.error("Error uploading video");
    }
  };

  return (
    <div>
      <Card className="post-video-card">
        <Card.Body>
          <Card.Title>Post Video</Card.Title>
          <Form onSubmit={handleUpload}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name="title" required />
            </Form.Group>

            <Form.Group controlId="video">
              <Form.Label>Video</Form.Label>
              <Form.Control
                type="file"
                name="video"
                accept="video/*"
                onChange={handleFileChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="circular-progress-bar">
        <CircularProgressbar className="circular-progress-bar-fill"
          value={uploadProgress}
          text={`${uploadProgress}%`} 
        />
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default VideoUploader;
