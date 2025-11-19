import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useFetch from "../../hooks/useFetch";

export default function Users() {

  const {data, isLoading, isError}= useFetch();

  

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
            <th>Email</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
      data.users.map(user=>
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td><img src= {user.imageUrl} alt="" /></td>
          <td></td>
        </tr>
      )
    }
        </tbody>
      </table>
      
    </>
  )
}

  
