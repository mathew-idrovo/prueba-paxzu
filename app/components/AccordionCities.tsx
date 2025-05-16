'use client' 
import { useState } from "react";

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

  return (
    <div>
      <h3 className="font-bold mb-2">Puntos de venta</h3>
      <div className="space-y-2">
        {salesPoints.map((point, idx) => (
          <div key={point.city}>
            <button
              type="button"
              className={`md:pointer-events-none flex items-center font-bold ${point.color} focus:outline-none`}
              onClick={() => setOpen(open === idx ? -1 : idx)}
            >
              {point.city}
              <span className="ml-2 text-xs md:hidden transform transition-transform"
                style={{ transform: open === idx ? "rotate(180deg)" : "rotate(0)" }}>
                ▼
              </span>
            </button>
            {(open === idx || typeof window !== "undefined" && window.innerWidth >= 768) && (
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