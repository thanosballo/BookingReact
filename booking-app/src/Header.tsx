import React from 'react'
import { FaPlus } from 'react-icons/fa';

function Header() {
  return (
    <div className='Header'>
        <h3>Reservations</h3>
        <FaPlus size={50}/>
    </div>
  )
}

export default Header