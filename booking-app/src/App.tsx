import React from 'react';
import Header from './Header';
import Reservations from './Reservations';
import './App.css';
import { useState } from 'react';

function App() {
  const [reservations,setReservations]=useState({
    name : "john",
    email: "abc@lelo.com",
    checkIn: 28-1-2024,
    checkOut:30-1-2024
  });
  return (
    <div className="App">
      <Header/>
      <Reservations />
    </div>
  );
}

export default App;
