import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [gender, setGender] = useState('')

    const navigate = useNavigate()

    // dljarbi3r
    // https://api.cloudinary.com/v1_1/dljarbi3r
    // ahmedsm

    const register = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:3000/api/user/add', {
                name: name,
                email: email,
                password: password,
                gender: gender
            });
            navigate("/login")
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }
  
    return (
        <div>

            <form className="form" >
                <p className="form-title">register</p>
                <div className="input-containerr">
                    <input type="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
                </div>
                <div className="input-containerr">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                    <span></span>
                </div>
                <div className="input-containerr">
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
                </div>
                <div className="input-containerr">
                    <input type="gander" value={gender} onChange={(e) => setGender(e.target.value)} placeholder="Enter your gender" />
                </div>
              
                
                <button type="submit" className="submit"  onClick={register}>
                    submit
                </button>
                


                <p className="signup-link">
                    you have an account? <a href="">Sign in</a>
                </p>
            </form>

        </div>
    )
}

export default register