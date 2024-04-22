import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav'
import Footer from './components/Footer'

import Home from './pages/Home'
import Error404 from './pages/404'
import Contact from './pages/Contact'
import Mentions from './pages/MentionsLégales'
import Informations from './pages/Informations'
import Immobilier from './pages/Immobilier'
import Gestion from './pages/Gestion'
import Art from './pages/Art'
import Financier from './pages/Financier'

import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <Nav />
    <Routes>
      <Route path = "/" element ={<Home />} />
      <Route path = "/contact" element ={<Contact />} />
      <Route path = "/mentionslégales" element ={<Mentions />} /> 
      <Route path = "/informations" element ={<Informations />} /> 
      <Route path = "*" element ={<Error404 />} /> 
      <Route path = "/gestion" element ={<Gestion />} /> 
      <Route path = "/immobilier" element ={<Immobilier />} /> 
      <Route path = "/financier" element ={<Financier />} /> 
      <Route path = "/art-thérapie" element ={<Art />} /> 
    </Routes>
    <Footer />
    </HashRouter>
  </React.StrictMode>,
);

