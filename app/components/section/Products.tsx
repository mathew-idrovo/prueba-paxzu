'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const products = [
    { src: "/assets/img/Polea.svg", alt: "Polea" },
    { src: "/assets/img/rodillo1.svg", alt: "Rodillo 1" },
    { src: "/assets/img/product3.svg", alt: "Product 3" },
    { src: "/assets/img/product4.svg", alt: "Product 4" },
    { src: "/assets/img/product5.svg", alt: "Product 5" },
  ]
  
  function useSlidesPerView() {
    const [slides, setSlides] = useState(2)
    useEffect(() => {
      function handleResize() {
        setSlides(window.innerWidth >= 1024 ? 5 : 2) 
      }
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [])
    return slides
  }
export const Products = () => {
    const slidesToShow = useSlidesPerView()
    const [startIdx, setStartIdx] = useState(0)
    const maxIdx = products.length - slidesToShow
    const handlePrev = () => setStartIdx(idx => Math.max(0, idx - 1))
    const handleNext = () => setStartIdx(idx => Math.min(maxIdx, idx + 1))
    const visibleProducts = products.slice(startIdx, startIdx + slidesToShow)
  
    return (
      <section className=" py-8 px-4 w-full max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-12">
          
          <div className="flex-shrink-0 w-full lg:w-64 lg:pt-6">
            <span className="text-xs lg:text-sm text-gray-700 font-medium tracking-wide block">PRODUCTOS QUE LE PUEDEN</span>
            <h2 className="text-2xl lg:text-3xl font-black text-black leading-tight mt-1 mb-4">
              INTERESAR
            </h2>
            <div className="h-1 w-14 bg-orange-500 mt-1 mb-2"></div>
          </div>
         
          <div className="flex-1 w-full">
            <div className="flex items-center gap-3">
              <button
                className="text-gray-300 hover:text-orange-500 text-2xl lg:text-3xl"
                onClick={handlePrev}
                disabled={startIdx === 0}
              >
                &lt;
              </button>
              <div className="flex flex-row gap-6 justify-center w-full">
                {visibleProducts.map((product, i) => (
                  <Image
                    key={i + startIdx}
                    src={product.src}
                    alt={product.alt}
                    width={90}
                    height={90}
                    className="transition-transform duration-200 hover:scale-105"
                  />
                ))}
              </div>
              <button
                className="text-gray-300 hover:text-orange-500 text-2xl lg:text-3xl"
                onClick={handleNext}
                disabled={startIdx === maxIdx}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }