import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

export default function AddUser() {


  const navigate= useNavigate();
  const[preview,setPreview] = useState(null);
   const {register, handleSubmit, formState:{errors}}=useForm();
   const addUser= async(values)=>{
    const formData= new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("age", values.age);
    formData.append("image", values.image[0]);
    const response= await axios.post(`${import.meta.env.VITE_BURL}/users`, formData);
    if(response==200){
      navigate('/users')
    }
    console.log(response);
   }

   const handleImgPreview=(event)=>{
    console.log(event.target.files[0]);
    setPreview(URL.createObjectURL(event.target.files[0]))
   }
    

  return (
    <div className='container py-5 mt-5'>
       <h1 className='mb-5 text-center'>Add New User</h1>
      <form onSubmit={handleSubmit(addUser)}> 
        <div className="form-floating mb-3">
        <input {...register('name')} type="text"   className="form-control" id="floatingInput" placeholder="enter your name" />
        <label htmlFor="floatingInput">userName</label>
       </div>

       <div className="form-floating mb-3">
        <input {...register('email')} type="email"  className="form-control" id="floatingInput" placeholder="enter your email" />
        <label htmlFor="floatingInput">userEmail</label>
       </div>
       
       <div className="form-floating mb-3">
        <input {...register('age')} type="number"  className="form-control" id="floatingInput" placeholder="enter your age" />
        <label htmlFor="floatingInput">userAge</label>
       </div>

       <div className="form-floating mb-3">
        <input {...register('image')} onChange={handleImgPreview} type="file"  className="form-control" id="floatingInput" placeholder="enter your image" />
        <label htmlFor="floatingInput">user image</label>
        {preview? <img src={preview} width="100px" /> :''}
       </div>

       <button className='btn btn-outline-info'>Submit</button>
      </form>
    </div>
  )
}
