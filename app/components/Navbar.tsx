'use client' 

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'

function Navbar() { 
    const [menuOpen, setMenuOpen] = useState(false);


  return (
    <header className="bg-white shadow-md w-full">

      <div className="hidden lg:grid grid-cols-3 items-center max-w-7xl mx-auto px-6 py-4">
       
        <nav className="flex gap-8 justify-start">
          <a href="#" className="text-gray-700 font-bold hover:text-orange-500 text-sm">CATÁLOGO DE PRODUCTOS</a>
          <a href="#" className="text-gray-700 font-bold hover:text-orange-500 text-sm">SERVICIOS</a>
          <a href="#" className="text-gray-700 font-bold hover:text-orange-500 text-sm">MARCAS</a>
        </nav>

   
        <div className="flex justify-center">
          <Image src="/assets/icons/Recurso1.svg" alt="Polea" width={200} height={200} className="mx-auto" />
        </div>

      
        <nav className="flex gap-8 items-center justify-end">
          <a href="#" className="text-gray-700 font-bold hover:text-orange-500 text-sm">INDUSTRIAS</a>
          <a href="#" className="text-gray-700 font-bold hover:text-orange-500 text-sm">BLOG</a>
          <button className="bg-orange-500 text-white font-semibold text-sm px-6 py-2 shadow hover:bg-orange-600 ml-2">
            CONTACTO
          </button>
        </nav>
      </div>

    
      <div className="flex items-center justify-between px-4 py-3 lg:hidden">
        <Image src="/assets/icons/Recurso1.svg" alt="Polea" width={120} height={120} />
        <div className="flex items-center gap-2">
          <button className="bg-orange-500 text-white font-semibold text-xs px-3 py-2 shadow">
            CONTACTO
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

  
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md z-40">
          <nav className="flex flex-col p-4 gap-4">
            <a href="#" className="text-gray-700 font-bold text-base">CATÁLOGO DE PRODUCTOS</a>
            <a href="#" className="text-gray-700 font-bold text-base">SERVICIOS</a>
            <a href="#" className="text-gray-700 font-bold text-base">MARCAS</a>
            <a href="#" className="text-gray-700 font-bold text-base">INDUSTRIAS</a>
            <a href="#" className="text-gray-700 font-bold text-base">BLOG</a>
            <a href="#" className="text-orange-500 font-bold text-base">CONTACTO</a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar