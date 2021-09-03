import axios from 'axios';
import React, { useEffect } from 'react';

const Facts = () => {
  // empty array makes useEffect work only on mount
  useEffect(() => {},[])

  const getFacts = async () => {
    try {
      let res = await axios.get('/api/facts');
      console.log(res)
    } catch (err){
      alert("error occurred getting facts")
} }

  return (
    <div>
      <h1>Facts</h1>
    </div>
  );
};

export default Facts; 