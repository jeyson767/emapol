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
      <div className="w-[250px] h-[100px] flex items-center justify-center">
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
