import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Admin/Login';
import Header from './components/Header';
import Articles from './components/Articles';
import Hero from './components/Hero';
import VideoPlayer from './components/VideoPlayer';
import PostArticle from './components/Admin/PostArticle';
import PostVideo from './components/Admin/PostVideo';
import Footer from './components/Footer';
import FeedbackForm from './components/FeedbackForm'; 
import ReadArticle from './components/ReadArticle';
import Dashboard from './components/Admin/Dashboard';

const App = () => {

  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
      <div className="container-fluid">
      {isHome && (
        <>
          <Header />
          <Hero />
          <Articles />
          <VideoPlayer />
          <FeedbackForm/>
        <Footer/>
        </>
      )}
        <Routes>
          <Route path="/articles/article/:title" element={<ReadArticle />} />
          <Route path="/admin/login" element={<Login />} />      
          <Route path="/admin/dashboard" element={<Dashboard />} />  
          <Route path="/admin/article" element={<PostArticle />} />
          <Route path="/admin/video" element={<PostVideo />} />        
        </Routes>
      </div>
  );
};

export default App;
