import Image from 'next/image'
import React from 'react'

export const Accesorry = () => {
  return (
<section className="py-10 px-4 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-between gap-6 md:gap-0">
        
    
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 flex-1">
  
          <div className="flex justify-center md:justify-start mb-3 md:mb-0">
            <Image src="/assets/icons/icon_help.svg" alt="Ayuda" width={50} height={50} className="max-w-full max-h-full" />
          </div>
        
          <div className="md:ml-4">
            <div className="text-center md:text-left mb-1 text-black font-medium text-base">
              RECIBA ASESORÍA PERSONALIZADA Y
            </div>
            <div className="text-center md:text-left text-2xl md:text-3xl font-black text-black leading-tight mb-0">
              SOLUCIONES A MEDIDA DE SU NEGOCIO
            </div>
          </div>
    
          <div className="flex justify-center md:justify-start md:ml-6 mt-3 md:mt-0">
            <button className="border-2 border-orange-500 text-orange-500 font-semibold rounded px-8 py-2  mr-4 transition hover:bg-orange-50 text-base md:text-lg">
              CONTÁCTENOS
            </button> 
            <a
            href="https://wa.me/573001234567"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="h-12 w-12 md:h-14 md:w-14 drop-shadow-md "
            />
          </a>
          </div>
        </div>

   
        <div className="flex items-center justify-center mt-4 md:mt-0 ">
          
        </div>
      </div>
    </section>
  )
}
