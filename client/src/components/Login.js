import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const login = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/api/user/login', {
        email: email,
        password: password,
      })
      console.log(response.status)
      if (response.status === 200) {
        localStorage.setItem("email",response.data.email)
        alert('Login successful')
        navigate("/after", {state: {user: response.data}})
      }
    } catch (error) {
      console.error(error)
      if (error.response.status === 400) {
        alert(error.response.data.message)
      } else if (error.response.status === 404) {
        alert(error.response.data.message)
      }
    }
  }
  return (
    <div>
      <form className="form" onSubmit={login}>
        <p className="form-title">login</p>
        <div className="input-containerr">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email"
          />
          <span></span>
        </div>
        <div className="input-containerr">
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password"
          />
        </div>
      
        <button type="submit" className="submit" >
          Sign in
        </button>
        <Link to="/register">
        <p className="signup-link">
          No account? <a>Sign up</a>
        </p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
