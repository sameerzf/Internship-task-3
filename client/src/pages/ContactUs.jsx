import React from 'react'
import '../index.css'
export default function ContactUs() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="mb-4">
        We would love to hear from you! Please fill out the form below to get in touch.
      </p>
      <form className="space-y-4">
        <div>
          <label className="block mb-1" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your Email"
            required
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="message">Message</label>
          <textarea
            id="message"
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
