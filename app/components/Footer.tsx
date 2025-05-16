
import Image from "next/image";

import { AccordionCities } from "./AccordionCities";

const navLinks = [
  "Quienes somos",
  "Contacto",
  "Blog",
  "Marcas aliadas",
  "Política tratamiento de datos",
  "Política de privacidad",
  "Mapa del sitio",
];

export default function Footer() {
  return (
    <footer className="bg-black text-white px-4 py-8">
      <div className="max-w-7xl mx-auto">
       
        <div className="flex flex-col md:flex-row md:justify-between gap-8 mb-6">
          
          <div className="flex-1 min-w-[220px] flex flex-col gap-3">
              <Image src="/assets/icons/Recurso2.svg" alt="Polea" width={250} height={50} className="max-w-full max-h-full" /> 
            <p className="text-sm max-w-xs text-justify">
              Somos una empresa de bandas transportadoras en Medellín y Barranquilla que presta soluciones en diseño, fabricación y mejoramiento de procesos industriales de excelente calidad.
            </p>
           
            <div className="flex gap-4 mt-2">
              <a href="#" className="flex items-center justify-center w-8 h-8 bg-white text-orange-500 rounded-full">
                {/* Facebook */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="..."/></svg>
              </a>
              <a href="#" className="flex items-center justify-center w-8 h-8 bg-white text-orange-500 rounded-full">
                {/* Instagram */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="..."/></svg>
              </a>
              <a href="#" className="flex items-center justify-center w-8 h-8 bg-white text-orange-500 rounded-full">
                {/* LinkedIn */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="..."/></svg>
              </a>
            </div>
          </div>

       
          <div className="flex-1 min-w-[180px]">
            <h3 className="font-bold mb-2">Navegación</h3>
            <ul className="space-y-1 text-sm">
              {navLinks.map((text, i) => (
                <li
                  key={i}
                  className="transition-colors duration-200 hover:text-orange-500 cursor-pointer"
                >
                  {text}
                </li>
              ))}
            </ul>
       
            <Image src="/assets/icons/pse1.svg" alt="PSE" width={150} height={50} className="max-w-full max-h-full mt-6" /> 

          </div>

        
          <div className="flex-1 min-w-[220px]">
            <AccordionCities />
          </div>

         
          <div className="flex-1 min-w-[220px]">
            <h3 className="font-bold">Horario</h3>
            <p className="text-sm mt-1 mb-4">
              Lunes a viernes <br />
              <span className="font-bold">8:00 am - 6:00 pm</span>
            </p>
            <h3 className="font-bold">Suscribirse</h3>
            <div className="flex mt-2">
              <input
                type="email"
                placeholder="Escribe aquí tu email"
                className="flex-1 px-3 py-2 rounded-l bg-black border border-white placeholder-gray-400 text-white"
              />
              <button className="px-4 py-2 bg-white text-black font-bold rounded-r">
                Enviar
              </button>
            </div>
            <button className="w-full bg-orange-500 text-white font-bold rounded py-3 mt-6 hover:bg-orange-600">
              COTICE CON NOSOTROS
            </button>
          </div>
        </div>


        <div className="text-xs text-center border-t border-gray-700 pt-3 pb-1">
          COPYRIGHT © AyJ Transmisiones y Equipos S.A.S 2025 - Desarrollo de página web y Posicionamiento SEO por <span className="underline text-orange-500">PAXZU</span> -Todos los derechos reservados.
        </div>
      </div>

 
      <div className="bg-white p-4 mt-4 rounded shadow text-black text-center relative max-w-lg mx-auto">
       
        <div className="absolute top-2 right-2 cursor-pointer">
          <svg width="16" height="16" fill="none"><circle cx="8" cy="8" r="7" stroke="#000" strokeWidth="2"/><path d="M5 5l6 6m0-6l-6 6" stroke="#000" strokeWidth="2"/></svg>
        </div>
        <div className="flex justify-center mb-2">
         
        <Image src="/assets/icons/Cookie.svg" alt="Polea" width={30} height={30} className="max-w-full max-h-full" /> 
        </div>
        <p className="text-sm mb-2">
          Usamos cookies para conocer y mejorar su experiencia de navegación de acuerdo con nuestra política de privacidad. <span className="underline text-orange-500">Conózcala aquí</span>
        </p>
        <button className="bg-orange-500 text-white font-bold px-6 py-2 rounded hover:bg-orange-600">
          ACEPTAR
        </button>
      </div>
    </footer>
  );
}
