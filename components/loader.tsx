"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface LoaderProps {
  isLoading: boolean
}

export function Loader({ isLoading }: LoaderProps) {
  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center overflow-hidden">
      
      {/* --- MOSAICO DE FONDO PARA EL LOADER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]" aria-hidden="true">
        <img src="/images/logo.png" className="absolute top-[10%] left-[5%] w-32 rotate-12 blur-[1px]" alt="" />
        <img src="/images/logo.png" className="absolute top-[40%] right-[10%] w-40 -rotate-12 blur-[2px]" alt="" />
        <img src="/images/logo.png" className="absolute bottom-[10%] left-[15%] w-36 rotate-45 blur-[1px]" alt="" />
        <img src="/images/logo.png" className="absolute top-[15%] right-[20%] w-28 rotate-[15deg] blur-[2px]" alt="" />
        <img src="/images/logo.png" className="absolute bottom-[20%] right-[15%] w-32 -rotate-[20deg] blur-[1px]" alt="" />
      </div>

      {/* LOGO CENTRAL ANIMADO */}
      <div className="relative z-10 w-[250px] h-[100px] flex items-center justify-center">
        <Image
          src="/images/logo-emapolsac.png"
          alt="EMAPOL S.A.C"
          width={250}
          height={100}
          className="animate-pulse"
          priority
          style={{ width: "250px", height: "100px", objectFit: "contain" }}
        />
      </div>
    </div>
  )
}

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return <Loader isLoading={isLoading} />
}