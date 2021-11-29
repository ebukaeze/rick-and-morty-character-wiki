import React, {useState, useEffect} from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

import { Navbar } from './components';
import Episode from './components/Routes/Episode';
import Location from './components/Routes/Location';
import Characters from './components/Routes/Characters';
import CardDetails from './components/Card/CardDetails';




function App() {

  return (
    <div className="App">
     
       <Navbar />
       <Routes>
      <Route path="/" element={<Characters />} />
            <Route path="/:id" element={<CardDetails />} />

      <Route path="/episodes" element={<Episode />} />
            <Route path="/episodes/:id" element={<CardDetails />} />

      <Route path="/location" element={<Location />} />
            <Route path="/location/:id" element={<CardDetails />} />
    </Routes>
    </div>
  );
}

export default App;
