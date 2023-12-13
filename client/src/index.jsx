import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import  Register  from './components/register';
import AllPosts from './components/allPosts';
import HomeB from "./components/HomeB";
import AddPost from "./components/addPost"
import PostD from "./components/postD"




const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
           <Route path="/" element={<HomeB />} />
          <Route path="/after" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/posts" element={<AllPosts />} />
          <Route path="/details/:id" element={<PostD />} />
          <Route path="/add" element={<AddPost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};



ReactDOM.render(<App />, document.getElementById('app'));
