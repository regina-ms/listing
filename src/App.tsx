import React from 'react';
import './App.css';
import Listing from './components/Listing/Listing';
import etsy from './data/etsy.json';

export type ETSY = typeof etsy;
export type ETSYItem = typeof etsy[0];

function App() {
  return (
    <Listing items={etsy} />
  );
}

export default App;


