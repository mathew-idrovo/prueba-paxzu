import Image from "next/image";
import ContactForm from "./components/ContactForm";
import { Contact } from "./components/section/Contact";
import { Products } from "./components/section/Products";
import { Accesorry } from "./components/section/Accesorry";

export default function Home() {
  return ( 

 <div className="w-full min-h-screen bg-[#fafafa] py-8 px-3">
 
    <nav className="mb-4 text-sm flex gap-1 text-gray-500">
      <span>Inicio</span> <span>/</span> <span className="text-orange-500">Contacto</span>
    </nav>
    <h1 className="text-4xl md:text-5xl font-black mb-2 text-center md:text-left">
      CONTÁCTENOS
    </h1>
    <div className="h-1 w-14 bg-orange-500 mx-auto md:mx-0 mb-4"></div>
    <div className="text-center md:text-left mb-8 font-medium">
      ESTAMOS PARA RESOLVER SUS DUDAS Y BRINDARLE SOLUCIONES
    </div>

    <Contact/> 
    <Products/> 
    <Accesorry/>
  </div>
  );
}
