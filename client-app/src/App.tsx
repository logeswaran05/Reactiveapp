import React, { useEffect, useState } from 'react';

import './App.css';
import axios from 'axios';

function App() {
  const [activities,setAcivites]=useState([]);
  useEffect(() => {
   axios.get('http://localhost:5000/api/Activities').then(response =>
    setAcivites(response.data))
  
    
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        
        <ul>{activities.map((activity : any)=>(
          <li key={activity.id}>{activity.title}</li>
        ))}</ul>
        
      </header>
    </div>
  );
}

export default App;
