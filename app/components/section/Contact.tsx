import React from 'react'
import ContactForm from '../ContactForm'
import Image from 'next/image'

export const Contact = () => {
    return (
        <>
            <div className="mb-4 text-sm flex gap-1 text-gray-500 ml-4">
                <span>Inicio</span> <span>/</span> <span className="text-orange-500">Contacto</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-2 text-center mb-4">
                CONTÁCTENOS
            </h1>
            <div className="h-1 w-14 bg-orange-500 mx-auto mb-4"></div>
            <div className="text-center mb-8 font-medium mb-4">
                <span className="text-gray-500 text-base md:text-lg">
                    ESTAMOS PARA RESOLVER SUS DUDAS Y BRINDARLE SOLUCIONES
                </span>
            </div>


            <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto justify-center md:items-center">

                <div className="flex-shrink-0 w-full md:w-[440px]">
                    <ContactForm />
                </div>


                <div className="w-full flex flex-col md:flex-row gap-8 items-center md:items-center">

                    <div className="flex items-center justify-center w-[220px] h-[302px]">
                        <Image src="/assets/img/Mapa.svg" alt="Mapa de Colombia" width={220} height={302} className="max-w-full max-h-full" />
                    </div>

                    <div className="flex flex-col gap-6 min-w-[180px]">
                        <div>
                            <div className="flex items-center gap-2">
                                <Image src="/assets/icons/row.svg" alt="Ciudad" width={5} height={5} />
                                <span className="font-bold text-black">Medellín</span>
                            </div>
                            <span className="text-gray-700 text-sm block">
                                Cra 65 #30-84<br />
                                (+57) 604 4481899<br />
                                Lidermercadeo@ajyweb.com
                            </span>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <Image src="/assets/icons/row.svg" alt="Ciudad" width={5} height={5} />
                                <span className="font-bold text-black">Barranquilla</span>
                            </div>
                            <span className="text-gray-700 text-sm block">
                                Cra 65 #30-84<br />
                                (+57) 604 4481899<br />
                                Lidermercadeo@ajyweb.com
                            </span>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <Image src="/assets/icons/row.svg" alt="Ciudad" width={5} height={5} />
                                <span className="font-bold text-black">Bogotá</span>
                            </div>
                            <span className="text-gray-700 text-sm block">
                                Cra 65 #30-84<br />
                                (+57) 604 4481899<br />
                                Lidermercadeo@ajyweb.com
                            </span>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
