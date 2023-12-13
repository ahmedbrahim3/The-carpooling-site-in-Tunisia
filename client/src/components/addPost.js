import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
 

const AddPosts=()=>{
const [post,setPost]=useState([]) 
const [term,setTerm]=useState("")
const [user,setUser]=useState([]) 
const [file,setFile]=useState(null)
// const [image,setImage]=useState("")
const navigate = useNavigate()
    const add=(term)=>{
        const { date,phonenumber,car,numberOfPlaces,price,information,image}=term
        axios.post(`api/post/add/${user._id}`,{ date,phonenumber,car,numberOfPlaces,price,information,image})
        .then((res) => {
            setPost([...post, res.data])
            navigate("/posts", { state: { image: image } })
        })
        .catch((err)=>console.log(err))
    }
    const getByEmail=()=>{
    const email= localStorage.getItem("email")
        axios.get(`/api/user/getem/${email}`)
        .then((response) => {
          setUser(response.data)
        })
        .catch((error) => console.log(error))
    }
    const uploadImg = async () => {
        const form = new FormData()
        form.append("file", file)
        form.append("upload_preset", "ahmedsm")
      
        try {
          const response = await axios.post(
            "https://api.cloudinary.com/v1_1/dljarbi3r/image/upload",form
          )
          setTerm({ ...term, image: response.data.secure_url })
        } catch (error) {
          console.log(error)
        }
      }
      
    useEffect(() => {
        getByEmail()
      }, [])

    useEffect(()=>{
        console.log(user);
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
    <div className='carrd'>
       <p className='trip'>Publish a trip</p>
        <p>Date and phone :</p>
        <div className='input-container'>
        <input className='input-field' placeholder="Date /jj/mm/aa" onChange={(e)=>setTerm({...term, date:e.target.value})}/>
        <input className='input-field' placeholder="Add your phonenumber" type="text" onChange={(e)=>setTerm({...term,phonenumber:e.target.value})}/>
        </div>
        <p>Car & Conditions :</p>
        <div className='input-container'>
        <input className='input-field' placeholder="Add your car" type="text" onChange={(e)=>setTerm({...term,car:e.target.value})} />
        <input className='input-field' placeholder="Add the numberOfPlaces" type="text" onChange={(e)=>setTerm({...term,numberOfPlaces:e.target.value})} />
        <input className='input-field' placeholder="Add the price" type="text" onChange={(e)=>setTerm({...term,price:e.target.value})}/>
        </div>
        <div className='input-container'>
        <input className='input-field' placeholder="Add the information" type="text" onChange={(e)=>setTerm({...term,information:e.target.value})}/>
        <input className='input-field' type='file'  onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <div className='cl'>
        <button className='front text' onClick={uploadImg} >upload !</button>
        <button className='front text' onClick={()=>add(term)}>Publish your trip</button>
        </div>
        </div>
        </div>
    )
}

export default AddPosts