import React from 'react'
import ContactForm from '../ContactForm'
import Image from 'next/image'

export const Contact = () => {
    return (
        <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto justify-center">
            <ContactForm />
            <div className="flex flex-col-reverse md:flex-row md:items-start gap-8">
  {/* Textos */}
  <div className="flex-1 flex flex-col gap-6 mt-6 md:mt-0">
    <div>
      <span className="font-bold text-black">Medellín</span><br />
      <span className="text-gray-700 text-sm">
        Cra 65 #30-84<br />
        (+57) 604 4481899<br />
        Lidermercadeo@ajyweb.com
      </span>
    </div>
    <div>
      <span className="font-bold text-black">Barranquilla</span><br />
      <span className="text-gray-700 text-sm">
        Cra 65 #30-84<br />
        (+57) 604 4481899<br />
        Lidermercadeo@ajyweb.com
      </span>
    </div>
    <div>
      <span className="font-bold text-black">Bogotá</span><br />
      <span className="text-gray-700 text-sm">
        Cra 65 #30-84<br />
        (+57) 604 4481899<br />
        Lidermercadeo@ajyweb.com
      </span>
    </div>
  </div>
  {/* Mapa */}
  <div className="mx-auto md:mx-0 flex items-center justify-center w-[220px] h-[302px]">
  
    <Image src="/assets/img/Mapa.svg" alt="Mapa de Colombia" width={220} height={302} className="max-w-full max-h-full" />
   
  </div>
</div>

        </div>
    )
}
