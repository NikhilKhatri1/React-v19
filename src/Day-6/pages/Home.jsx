import React, { useContext } from 'react'
// import UseFetch from '../customHook/UseFetch';
import { contextData } from '../context/Context'

const Home = () => {
  const { data, loading, error } = useContext(contextData);
  console.log(data, loading, error);
  return (
    <div>Home</div>
  )
}

export default Home