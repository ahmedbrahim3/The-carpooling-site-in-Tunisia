import React from 'react';
import { Link } from 'react-router-dom'

const HomeB = () => {
    return (
        <div>
        <section className="list" id="list">
            <div className="list-list" id="list-list">
                <nav className="navbar">
                    <a href="#" className="logo">
                        <img src="https://play-lh.googleusercontent.com/nXjkJZ4eefntHSMrKqAU5BLc8W5MCryWJp9-Vepvw1ftFjoIALxH0up1okDkJWRXUBE" alt="" />
                        </a>
                       
                    <Link to="/login">
                        <button className="log">Login</button>
                    </Link>

                    <Link to="/register">
                        <button className="reg">Sign up</button>
                    </Link>
                </nav>
            </div>
        </section>
        <p className='pi'>The carpooling site in Tunisia</p>
        <p className='pi'>you need to be logged in to enjoy our service </p>
       <img className='img' src="https://cdn-icons-png.flaticon.com/512/2/2087.png"/>
       <img className='img' src="https://static.thenounproject.com/png/55402-200.png"/>
       <div className='para'>
       <p className='p'>ARE YOU A DRIVER?</p>
       <p className='p'>ARE YOU A PASSENGER?</p>
       
       </div>
        </div>
    )

}
export default HomeB