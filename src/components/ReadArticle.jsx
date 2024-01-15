import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import "../static/readarticle.css";

const ReadArticle = () => {
  const { title } = useParams();
  const [article, setArticle] = useState({});

  const fetchArticle = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/articles/article/${title}`
      );
      const data = response.data;
      setArticle(data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    fetchArticle();
    return () => {
      setArticle({});
    };
  }, []);

  const formattedDate = new Date(article.createdAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="article-container">
      <div className="article-image-container">
        <h1 className="article-title">{article.title}</h1>
        <div className="article-info">
          <p className="article-date">
            Posted on : <b>{formattedDate}</b>
          </p>
          <div className="share-icons">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaLinkedin className="icon" />
          </div>
        </div>
        <img className="article-image" src={article.photo} alt="article" />
        <div className="article-content">{article.content}</div>
      </div>
    </div>
  );
};

export default ReadArticle;
