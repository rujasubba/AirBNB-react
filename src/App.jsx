import React from 'react';
import { useState } from 'react';


import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';


function App() {
  const [count, setCount] = useState(0)

  return (


    <React.Fragment>
      <Routes>
        <Route path ="/" element={<Home />} />

      </Routes>
    </React.Fragment>
        
  )
}

export default App;
