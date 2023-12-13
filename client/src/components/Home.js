import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import axios from 'axios';



const Home = () => {
    const [user,setUser]=useState([])
    const location = useLocation()
    const userEmail=location.state.user.email
    

    const getByEmail=()=>{
        axios.get(`/api/user/getem/${userEmail}`)
        .then((response) => {
          setUser(response.data)
        })
        .catch((error) => console.log(error))
    }
    useEffect(() => {
        getByEmail()
      }, [])
    

    
    return (
        <div>
        <section className="list" id="list">
            <div className="list-list" id="list-list">
                <nav className="navbar">
                    <a href="#" className="logo">
                        <img src="https://play-lh.googleusercontent.com/nXjkJZ4eefntHSMrKqAU5BLc8W5MCryWJp9-Vepvw1ftFjoIALxH0up1okDkJWRXUBE" alt="" />
                    </a>
                   <p className='wel'>welcome {user.name} hope you find what you are loking for</p>
                </nav>
            </div>
        </section>
        <p className='pi'>The carpooling site in Tunisia</p>
       <img className='img' src="https://cdn-icons-png.flaticon.com/512/2/2087.png"/>
       <img className='img' src="https://static.thenounproject.com/png/55402-200.png"/>
       <div className='para'>
       <Link to="/add">
       <p className='p'>ARE YOU A DRIVER?</p>
     </Link>
     
       <Link to="/posts">
       <p className='p'>ARE YOU A PASSENGER?</p>
       </Link>
       </div>
        </div>
    )

}
export default Home