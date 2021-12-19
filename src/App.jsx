import React from 'react';
import { Link } from 'react-router-dom';



const App = () => {
  
  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/campaign">Campaign</Link>
    </div>
  );
}

export default App;