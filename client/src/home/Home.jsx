import React, { useState } from 'react';
import axios from 'axios';
import './Home.css';


export default function Home() {
  const [message, setMessage] = useState("LOADING…");

  const fetchMessage = async () => {
    axios.get('/api/hello-world').then((response) => setMessage(response.data.message));
  }

  return (
    <div className="Home">
      <h1>{ message }</h1>
      <button onClick={fetchMessage} >
        Fetch Message
      </button>        
    </div>
  );
}