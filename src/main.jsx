import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
         <Layout>
           <App />
         </Layout>
    </BrowserRouter>
  </React.StrictMode>,
);
