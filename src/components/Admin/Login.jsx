import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import "../../static/login.css";


const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://solar-news-backend.vercel.app/admin/login', {
        username,
        password,
      });

      //check if reponse is correct
      if (response.status === 200) {
        window.location.href = '/admin/dashboard';
      }

      // if correct, make a toast
      toast.success('Login successful', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      
      // if incorrect, make a toast
      toast.error('Login failed. Please try again.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="login-card" >

    <div className="container mt-5">
      <h2 className="text-center">Login</h2>
      <div className="mb-3">
        <label className="form-label">
          <FaUser className="me-2" />
          Username:
        </label>
        <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">
          <FaLock className="me-2" />
          Password:
        </label>
        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
    </div>
  );
};

export default Login;
