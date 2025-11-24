import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useFetch from "../../hooks/useFetch";
import User from './User';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Users() {

  const {data, isLoading, isError}= useFetch('users');

  const deleteUser= async(id)=>{
    
    try{
      const response=await axios.delete(`${import.meta.env.VITE_BURL}/users/${id}`);
      console.log(response);

      if(response.status==200){
        alert('done!');
        /* toast.success('🦄 User Deleted Successfully!', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Slide,
}); */
      }



    }catch(err){
      console.log(err.message);
    }finally{

    }
  }

  /* if(isError){
    return <div className='text-danger'>{isError}</div>
  } */
  if(isLoading){
    return <h2>wait..</h2>
  }
  return (
    <>
      <table className='table text-center'>
        <thead>
          <tr>
            <th>Name</th>
            {/* <th>Email</th>
            <th>Image</th> */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
      data.users.map(user=>
        <tr key={user.id}>
          <td>{user.name}</td>
         {/*  <td>{user.email}</td>
          <td><img src= {user.imageUrl} alt="" /></td> */}
          <td>
            <Link className='btn btn-outline-info' to={`/Users/${user.id}`} >Details</Link>
            <button className='btn btn-outline-danger' onClick={()=>deleteUser(user.id)} >Delete</button>
          </td>
        </tr>
      )
    }
        </tbody>
      </table>
    </>
  )
}

  
