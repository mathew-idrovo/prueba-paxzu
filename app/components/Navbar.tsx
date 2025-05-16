'use client' 

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'

function Navbar() { 
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
      { name: 'CATÁLOGO DE PRODUCTOS', submenu: true },
      { name: 'SERVICIOS', submenu: true },
      { name: 'MARCAS' },
      { name: 'INDUSTRIAS', submenu: true },
      { name: 'BLOG' },
    ];
  return (
    <header className="bg-white shadow-md px-4 md:px-10 py-3 flex items-center justify-between relative">
    
    <div className="flex items-center gap-4">
     <Image src="/assets/icons/Recurso1.svg" alt="Polea" width={100} height={100} className="max-w-full max-h-full" /> 
    </div>

    
    <nav className="hidden lg:flex gap-8 items-center">
      {navItems.map((item, i) => (
        <div key={i} className="relative group cursor-pointer">
          <span className="text-sm font-semibold text-gray-700 hover:text-orange-600 transition">
            {item.name}
          </span>
          {item.submenu && (
            <div className="absolute top-full left-0 w-48 bg-white shadow-md mt-2 hidden group-hover:block">
              <ul className="text-sm text-gray-700 p-2">
                <li className="hover:bg-gray-100 px-3 py-1">Subitem 1</li>
                <li className="hover:bg-gray-100 px-3 py-1">Subitem 2</li>
              </ul>
            </div>
          )}
        </div>
      ))}
      <button className="bg-orange-500 text-white font-semibold text-sm px-4 py-2 shadow hover:bg-orange-600">
        CONTACTO
      </button>
    </nav> 

 <div className="flex items-center gap-2 lg:hidden">
    <button className="bg-orange-500 text-white font-semibold text-sm px-2 py-2 shadow">
      CONTACTO
    </button>
    <button onClick={() => setMenuOpen(!menuOpen)}>
      {menuOpen ? <X size={24} /> : <Menu  size={24} />}
    </button>
  </div>

    
    {menuOpen && (
      <div className="absolute top-full left-0 w-full bg-white shadow-md lg:hidden">
        <nav className="flex flex-col p-4 gap-2">
          {navItems.map((item, i) => (
            <div key={i} className="text-sm font-medium text-gray-700">
              {item.name}
            </div>
          ))}
       
         
        </nav>
      </div>
    )}
  </header> 
  )
}

export default Navbar