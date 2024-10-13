import React from 'react'
import '../index.css'
export default function Footer() {
  return (
    <footer className="footer bg-gray-800 text-white p-4">
    <div className="container mx-auto text-center">
      <p>&copy; {new Date().getFullYear()} E-Shop. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="/privacy" className="hover:text-gray-300">Privacy Policy</a>
        <a href="/terms" className="hover:text-gray-300">Terms of Service</a>
      </div>
    </div>
  </footer>
  )
}
