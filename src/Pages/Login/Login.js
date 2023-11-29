import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
  
    const navigate = useNavigate();
  
    const handleLogin = () => {
      fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Login successful") {
          setSuccessMessage("Login successful");
          setErrorMessage('');
          navigate('/my-trips'); // Navigate to Home page
        } else {
          setErrorMessage(data.errors.map((error) => error.msg).join(", "));
          setSuccessMessage('');
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorMessage('An error occurred. Please try again.');
      });
    };
};