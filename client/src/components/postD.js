import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const PostD=()=>{
const [post,setPost]=useState(null)
const [term,setTerm]=useState("")
const [ref,setRef]=useState(false)
const { id } = useParams()
const [showInput, setShowInput] = useState(false)
const navigate = useNavigate()
const getOne=(id)=>{
    axios.get(`/api/post/${id}`)
    .then((res)=>setPost(res.data))
    .catch((err)=>console.log(err))
}
const delet=(id)=>{
    axios.delete(`/api/post/del/${id}`)
    .then((res)=>{
        setPost(null)       
        navigate("/posts")
    })
    .catch((err)=>console.log(err))
}
const update=(id,term)=>{
    const {information,price,numberOfPlaces,car,date,phonenumber}=term
    axios.put(`/api/post/up/${id}`,{information,price,numberOfPlaces,car,date,phonenumber})
    .then((res)=>{
        setPost(null)
        navigate("/posts") 
    })
    .catch((err)=>console.log(err))
}
 
useEffect(()=>{
    getOne(id)
},[])

const handleButtonClick = () => {
    setShowInput(true)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setShowInput(false)
  }
 

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
   
    <div className='card'>
    <img className='tas' src={post.image}/>
    <p className='info'>{post.information}</p>
    <div className='n'>
    <p className='pri'>price : <span style={{ color: '#00cc7e' }}>{post.price} DT</span></p>
    <p>places : <span style={{ color: '#00cc7e' }}>{post.numberOfPlaces}</span></p>
    </div>
    <p className='de'>details :</p>
    <div className='n'>
    <p className='da'>Date : <span style={{ color: '#00cc7e' }}>{post.date}</span></p>
    <p>car : <span style={{ color: '#00cc7e' }}>{post.car}</span></p>
    <p> call this : <span style={{ color: '#00cc7e' }}> {post.phonenumber}</span></p>
    </div>
    <div className='cl'>
    <button className='front text' onClick={()=>delet(post._id)}>delete</button>
    <button className='front text' onClick={handleButtonClick}>update</button>
    </div>
    {showInput && (
        <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <input className="input-field" placeholder="update information" onChange={(e)=>setTerm({...term,information:e.target.value})}/>
          <input className="input-field" placeholder="update price" onChange={(e)=>setTerm({...term,price:e.target.value})}/>
          </div>
        <div className='input-container'>
          <input className="input-field" placeholder="update numberOfplaces" onChange={(e)=>setTerm({...term,numberOfPlaces:e.target.value})}/>
          <input className="input-field" placeholder="update car" onChange={(e)=>setTerm({...term,car:e.target.value})}/>
          <input className="input-field" placeholder="update phonenumber" onChange={(e)=>setTerm({...term,phonenumber:e.target.value})}/>
          <button  type="submit" onClick={()=>update(post._id,term)}>Submit</button>
          </div>
        </form>
    )}
    </div>
        </div>
    )
}

export default PostD