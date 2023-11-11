import React from 'react';
import './App.css';
import Listing from './components/Listing/Listing';
import etsy from './data/etsy.json';


function App() {
  return (
    <Listing items={etsy}/>
  );
}

export default App;

