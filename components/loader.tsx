"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface LoaderProps {
  isLoading: boolean
}

export function Loader({ isLoading }: LoaderProps) {
  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
      <div className="animate-pulse">
        <Image
  src="/images/logo-emapolsac.png"
  alt="EMAPOL S.A.C"
  width={250}
  height={100}
  className="mx-auto max-w-full h-auto"
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
    }, 2000) // 2 segundos de carga

    return () => clearTimeout(timer)
  }, [])

  return <Loader isLoading={isLoading} />
}
