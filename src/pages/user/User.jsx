import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';

export default function User() {

  const {id}= useParams();
  const {data, isLoading, isError}= useFetch(`users/${id}`);


  if(isError){
    return <div className='text-danger'>{isError}</div>
  }
  if(isLoading){
    return <h2>wait..</h2>
  }

  return (
    <div className='text-center'>
      <h2 >{data.data.name}</h2>
      <h2>{data.data.email}</h2>
      <img src={data.data.imageURL} alt="" />

    </div>
  )
}
