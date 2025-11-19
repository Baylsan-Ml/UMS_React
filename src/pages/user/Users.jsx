import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Users() {

  const [users, setUsers]= useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const [isError, setIsError]=useState(' ');

  const getUsers=  async()=>{
    try{
      const response= await axios.get(`${import.meta.env.VITE_BURL}/users`);
      setUsers(response.data.users);
    }
    catch (error){
      setIsError(error.message);
    }
    finally{
      setIsLoading(false);
    }
  }
  useEffect( ()=>{
    getUsers();
  }, []);

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
      users.map(user=>
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

  
