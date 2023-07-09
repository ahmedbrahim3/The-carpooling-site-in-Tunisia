import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const AllPosts=()=>{
    const [post, setPost] = useState([])

    // const location = useLocation()
    // const image = location.state && location.state.image

    
    const fetch=()=>{
        axios.get("/api/post")
        .then((res)=>setPost(res.data))
        .catch((err)=>console.log(err))
    }
useEffect(()=>{
    fetch(  )
},[])
    return(
        <div>
        <section className="list" id="list">
        <div className="list-list" id="list-list">
            <nav className="navbar">
                <a href="#" className="logo">
                    <img src="https://play-lh.googleusercontent.com/nXjkJZ4eefntHSMrKqAU5BLc8W5MCryWJp9-Vepvw1ftFjoIALxH0up1okDkJWRXUBE" alt="" />
                </a>
               <p className='wel'>welcome hope you find what you are loking for</p>
            </nav>
        </div>
    </section>
    {post.map((e,i)=>(  
        <div  className='caard' key={i}>
        <Link to={`/details/${e._id}`} key={e._id}>
        <p className='s'>{e.information}</p>
        </Link>
        <div className='i'>
        <img className='mage' src={e.image}/>
            <p className='' id='A'>{e.date}</p>
            <p className='' id='B'>{e.price} DT per seat</p>
            <p className='' id='C'>{e.car}</p>
            </div>
            </div>
        ))}
        </div>
    )
}
export default AllPosts