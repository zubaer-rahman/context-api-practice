import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';
import { createContext, useState } from 'react';

export const categoryContext = createContext();

function App() {
  const [category, setCategory] = useState('Laptop');
  return (
 
          <categoryContext.Provider value={[category, setCategory]} > 

            <h2> Category: {category} </h2>
            <Header/>
            <Home />
            <Shipment  />

          </categoryContext.Provider>
 

 
 
  );
}

export default App;
