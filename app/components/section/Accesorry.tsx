import Image from 'next/image'
import React from 'react'

export const Accesorry = () => {
  return (
    <section className="bg-white py-10 px-4 flex flex-col items-center border-t border-b">
    {/* Icono arriba */}
    <div className="mb-3">
     <Image src="/assets/icons/icon_help.svg" alt="Polea" width={50} height={50} className="max-w-full max-h-full" /> 
    </div>
    <div className="text-center mb-3 text-black font-medium">
      RECIBA ASESORÍA PERSONALIZADA Y
    </div>
    <div className="text-center mb-6 text-2xl md:text-3xl font-black text-black">
      SOLUCIONES A <br /> MEDIDA DE SU <br /> NEGOCIO
    </div>
    {/* Botón contáctenos */}
    <button className="border-2 border-orange-500 text-orange-500 font-semibold rounded px-8 py-2 mb-4 transition hover:bg-orange-50">
      CONTÁCTENOS
    </button>
    {/* Botón WhatsApp flotante */}
    <a
      href="https://wa.me/573001234567"
      className=" bottom-6 right-6 md:static md:ml-4"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="h-12 w-12"
      />
    </a>
  </section>
  )
}
