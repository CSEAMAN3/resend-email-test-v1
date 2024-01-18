'use client'

import { useState } from "react"


export default function ContactForm() {

  const [formData, setformData] = useState({

  })

  return (
    <div className="w-[500px] p-8">
      <form action="" className="flex flex-col">
        <label 
          htmlFor="name"
          className="w-full"
        >
            Name:
        </label>
        <input
          placeholder="your name..."
          type="text"
          name="name"
          id="name"
          className="border border-black rounded-sm mb-4 p-2"
        />

        <label htmlFor="from">Email:</label>
        <input
          placeholder="your email..."
          type="text"
          name="from"
          id="from"
          className="border border-black rounded-sm mb-4 p-2" 
        />

        <label htmlFor="content">Message</label>
        <textarea
          placeholder="your message..."
          name="content" 
          id="content" 
          cols={15} 
          rows={10}
          className="border border-black rounded-sm mb- p-2 mb-4"
        />

        <button className="bg-gray-800 text-white p-4">SEND</button>

      </form>
    </div>
  )
}
