'use client' 
import { useEffect, useState } from "react";

const salesPoints = [
  {
    city: "Medellín",
    color: "text-orange-500",
    data: [
      { icon: "📍", text: "Cra 65 #30-84" },
      { icon: "📞", text: "(+57) 604 4481899" },
      { icon: "✉️", text: "Lidermercadeo@ajyweb.com" },
    ],
  },
  {
    city: "Barranquilla",
    color: "text-orange-500",
    data: [
      { icon: "📍", text: "Cra 65 #30-84" },
      { icon: "📞", text: "(+57) 604 4481899" },
      { icon: "✉️", text: "Lidermercadeo@ajyweb.com" },
    ],
  },
  {
    city: "Bogotá",
    color: "text-orange-500",
    data: [
      { icon: "📍", text: "Cra 65 #30-84" },
      { icon: "📞", text: "(+57) 604 4481899" },
      { icon: "✉️", text: "Lidermercadeo@ajyweb.com" },
    ],
  },
];


export const AccordionCities = () => {
  const [open, setOpen] = useState(0); 
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []); 

  return (
    <div>
      <h3 className="font-bold mb-2">Puntos de venta</h3>
      <div className="space-y-2">
        {salesPoints.map((point, idx) => (
          <div key={point.city}>
            <button
              type="button"
              className={`md:pointer-events-none flex items-center font-bold ${point.color} focus:outline-none`}
              onClick={() => !isDesktop && setOpen(open === idx ? -1 : idx)}
              tabIndex={isDesktop ? -1 : 0}
              aria-expanded={isDesktop || open === idx}
              aria-controls={`city-panel-${idx}`}
            >
            
              {point.city} 
              {!isDesktop && (
              <span className="ml-2 text-xs md:hidden transform transition-transform"
                style={{ transform: open === idx ? "rotate(180deg)" : "rotate(0)" }}>
                
              </span> 
              )}
            </button> 


            {(isDesktop || open === idx) &&  (
              <div className="text-sm pl-3 mt-1">
                {point.data.map((item, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <span>{item.icon}</span> {item.text}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};