import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function AddUser() {
   
   const {register, handleSubmit, formState:{errors}}=useForm();
   const addUser=(test)=>{
    console.log(test);
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
        <input {...register('age')} type="number" name='age' className="form-control" id="floatingInput" placeholder="enter your age" />
        <label htmlFor="floatingInput">userAge</label>
       </div>

       <button className='btn btn-outline-info'>Submit</button>
      </form>
    </div>
  )
}
