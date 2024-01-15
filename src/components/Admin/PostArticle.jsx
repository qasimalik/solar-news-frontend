import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../static/postarticle.css";
import axios from "axios";
import ProgressBar from "react-bootstrap/ProgressBar";

const PostArticle = () => {
  // send photo as a file to mongodb
  const [photo, setPhoto] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  // convert formData.get('photo') to base64
  function convertBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  convertBase64(photo)
    .then((base64) => {
      setPhoto(base64);
    })
    .catch((error) => {
      console.error(error);
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const bodyData = {
      title: formData.get("title"),
      content: formData.get("content"),
      tags: formData.get("tags"),
      photo: photo,
    };

    try {
      setUploadProgress(0);
      const response = await axios.post(
        "http://localhost:5000/admin/article",
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
        toast.success("Article submitted successfully");
        e.target.reset();
      } else {
        toast.error("Failed to submit article");
      }
    } catch (error) {
      console.error("Error submitting article:", error);
      toast.error("Failed to submit article");
      console.log(error);
    }
  };

  return (
    <div>
      <Card className="post-article-card">
        <Card.Body>
          <Card.Title>Post Article</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name="title" required />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control as="textarea" rows={5} name="content" required />
            </Form.Group>

            <Form.Group controlId="photo">
              <Form.Label>Photo</Form.Label>
              <Form.Control
                type="file"
                name="photo"
                accept="image/*"
                onChange={handlePhotoChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <Form.Control type="text" name="tags" required />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="progress-bar">
        <ProgressBar className="progress-bar-fill" now={uploadProgress} label={`${uploadProgress}%`} />
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default PostArticle;
