import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">E-STORE</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/shop'}>Shop</Link></li>
            <li><Link to={'/about-us'}>About</Link></li>
            <li><Link to={'/contact-us'}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
