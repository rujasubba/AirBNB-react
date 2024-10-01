import React from 'react';
import { useState } from 'react';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import ImageGridPage from './pages/imageGridPage';
import Layout from './layouts/Layout';


function App() {
  const [count, setCount] = useState(0)

  return (
      
          
             <Routes>
                <Route path ="/" element={<Home />} />
                 <Route path ="/displayimages" element={<ImageGridPage />} />
              </Routes>
           
      
    
        
  )
}

export default App;
