import Image from 'next/image'
import React from 'react'

export const Products = () => {
  return (
    <section className="bg-white py-8 px-4">
    <h2 className="text-2xl md:text-3xl font-bold text-black mb-1">
      PRODUCTOS QUE LE PUEDEN<br />
      <span className="text-3xl md:text-4xl font-black">INTERESAR</span>
    </h2>
    <div className="h-1 w-16 bg-orange-500 mb-6"></div>
    
    {/* Carrusel (puedes cambiarlo por tu componente de slider real) */}
    <div className="flex items-center justify-between gap-3">
      <button className="text-gray-300 hover:text-orange-500 text-3xl">&lt;</button>
      <div className="flex-1 flex justify-center">
       <Image src="/assets/img/Polea.svg" alt="Polea" width={50} height={50} className="max-w-full max-h-full" /> 
       <Image src="/assets/img/rodillo1.svg" alt="Rodillo" width={50} height={50} className="max-w-full max-h-full" />
      </div>
      <button className="text-gray-300 hover:text-orange-500 text-3xl">&gt;</button>
    </div>
  </section>
  
  )
}
