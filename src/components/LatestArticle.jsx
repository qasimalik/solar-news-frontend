import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { CardGroup, Card, Row, Col } from "react-bootstrap";
import axios from "axios";
import "../static/article.css";
import "./ReadArticle";
import { useNavigate } from "react-router-dom";

const LatestArticle = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  const fetchArticles = async () => {
    try {
      const response = await axios.get(
        "https://solar-news-backend.vercel.app/articles/allarticles"
      );
      const data = response.data;
      setArticles(data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleCardClick = (article) => {
    navigate(`/articles/article/${article.title}`);
  };

  return (
    <CardGroup className="cardGroup ">
      <Row>
        <Col>
          <h2 className="latest-news-heading">Latest News</h2>
          <div className="card-deck" id="latest-news">
            {articles
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((article) => (
                <Card
                  className="article-card"
                  key={article._id}
                  onClick={() => handleCardClick(article)}
                >
                  <Card.Img
                    className="card-image"
                    variant="top"
                    src={article.photo}
                  />
                  <Card.Body>
                    <Card.Title className="article-text">
                      <b>{article.title}</b>
                    </Card.Title>
                  </Card.Body>
                </Card>
              ))}
          </div>
        </Col>
      </Row>
    </CardGroup>
  );
};

export default LatestArticle;